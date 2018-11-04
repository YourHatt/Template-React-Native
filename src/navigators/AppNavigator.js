import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import {
    Home,
    Login,
    Product,
    ShowProduct,
    CartScreen,
    CheckOutScreen
} from '../views';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const RootNavigator = createStackNavigator({
    // Home View
    Home: { screen: Home },
    Login: { screen: Login },
    Product: { screen: Product },
    ShowProduct: { screen: ShowProduct },
    CartScreen: { screen: CartScreen },
    CheckOutScreen: { screen: CheckOutScreen },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({ state: state.nav });

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };