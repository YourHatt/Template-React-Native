import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';

import { MenuProvider, MenuOption } from 'react-native-popup-menu';

import { middleware } from './src/navigators/AppNavigator';
import AppReducer from './src/redux/reducers/reducers';
import ReduxNavigation from './src/navigators/ReduxNavigation';

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, middleware));
const store = createStore(AppReducer, enhancer);

export default class App extends Component {
	render() {
		return <Provider store={store}>
			{/* <MenuProvider> */}
			<ReduxNavigation />
			{/* </MenuProvider> */}
		</Provider>
	}
}