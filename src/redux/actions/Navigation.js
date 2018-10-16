import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../../navigators/AppNavigator';
import * as Types from '../types/Navigation';

const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(tempNavState);

const nav = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case Types.BACK_PRESS:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

export default nav;