import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../../navigators/AppNavigator';
import * as Types from '../types/Navigation';

const firstAction = RootNavigator.router.getActionForPathAndParams('Home');
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
        case Types.LOGIN_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            )
            break;
        case Types.PRODUCT_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Product' }),
                state
            )
            break;
        case Types.SHOW_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ShowProduct' }),
                state
            )
            break;
        case Types.CART_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'CartScreen' }),
                state
            )
            break;
        case Types.CHECKOUT_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'CheckOutScreen' }),
                state
            )
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

export default nav;