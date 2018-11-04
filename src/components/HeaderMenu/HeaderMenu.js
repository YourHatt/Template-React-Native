import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationActions, StackActions } from 'react-navigation';


import {
    Button,
    Icon,
    Picker
} from 'native-base'

import React, { Component } from 'react';
import * as loginActions from '../../redux/actions/login';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

class HeaderMenu extends Component {

    render() {
        const { onClickLogin, onSignOut } = this.props
        return (
            <TouchableOpacity onPress={() => onClickLogin()}>
                <View style={{ width: 50, alignItems: 'center' }}>
                    <Icon active type='Feather' name='user' style={{ color: '#ff5766' }} />
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    iconTriger: {
        fontSize: 50,
        color: '#ff5766'
    },
    divider: {
        marginVertical: 5,
        marginHorizontal: 2,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    text: {
        fontSize: 20
    }
});
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...loginActions,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);