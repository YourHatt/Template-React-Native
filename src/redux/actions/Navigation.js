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
        case Types.INVENTORY_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Inventory' }),
                state
            )
            break;
        case Types.SALERECEIVING_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'SaleReceiving' }),
                state
            )
            break;
        case Types.RECORD_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'RecordExpense' }),
                state
            )
            break;
        case Types.TIME_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'TimeManagement' }),
                state
            )
            break;
        case Types.WEIGHT_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'WeightManagement' }),
                state
            )
            break;
        case Types.SHARING_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Sharing' }),
                state
            )
            break;
        case Types.REPORT_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Report' }),
                state
            )
            break;
        case Types.PLAN_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Plantation' }),
                state
            )
            break;
        case Types.MASTER_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'MasterData' }),
                state
            )
            break;
        case Types.PRODUCT_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Product' }),
                state
            )
            break;
        case Types.FORM_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'FormInput' }),
                state
            )
            break;
        case Types.MEMBER_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Member' }),
                state
            )
            break;
        case Types.UNITOFMEASURE_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'UnitOfMeasure' }),
                state
            )
            break;
        case Types.LOCATION_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Location' }),
                state
            )
            break;
        case Types.EXPENSE_SCREEN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Expense' }),
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