import { View, Text, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Icon } from 'native-base'
import React, { Component } from 'react';
import * as loginActions from '../../redux/actions/login';

class SignOut extends Component {
    render() {
        const { onSignOut } = this.props
        return (
            <TouchableOpacity onPress={() => onSignOut()}>
                <View style={{ width: 50, alignItems: 'center' }}>
                    <Icon active type='Feather' name='log-out' style={{ color: 'white' }} />
                </View>
            </TouchableOpacity>
        )
    }
}
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...loginActions
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);