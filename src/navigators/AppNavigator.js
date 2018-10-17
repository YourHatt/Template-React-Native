import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import {
    Home,
    Login,
    SignUp,
    Inventory,
    SaleReceiving,
    RecordExpense,
    TimeManagement,
} from '../views';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const RootNavigator = createStackNavigator({
    // Home View
    Login: { screen: Login },
    Home: { screen: Home },
    SignUp: { screen: SignUp },
    Inventory: { screen: Inventory },
    SaleReceiving: { screen: SaleReceiving },
    RecordExpense: { screen: RecordExpense },
    TimeManagement: { screen: TimeManagement },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({ state: state.nav });

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };