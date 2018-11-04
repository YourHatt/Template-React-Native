import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppNavigator } from './AppNavigator';

class ReduxNavigation extends Component {

	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}

	onBackPress = () => {
		const { dispatch, nav } = this.props;
		if (nav.index === 0) return false;
		dispatch(NavigationActions.back());
		return true;
	}

	render() {
		return <AppNavigator />
	}
}

const mapStateToProps = state => ({ nav: state.nav });

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			// ACTIONS
		}, dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation);