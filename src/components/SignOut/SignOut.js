import { View, Text } from 'react-native'
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
            <View>
                <Button style={{ backgroundColor: 'rgba(255, 255, 255,1.0)' }} onPress={() => onSignOut()}>
                    <Icon active type='Feather' name='log-out' style={{ color: '#2962ff' }} />
                </Button>
            </View>
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