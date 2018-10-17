import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as signUpAction from '../../redux/actions/signUp';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Button } from 'native-base'
import {

} from '../../components';

class SignUp extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    render() {
        const { navigation, onClickSubmit } = this.props;
        return (
            <View>
                <Text>yyyyyy</Text>
                <Button primary block onPress={() => onClickSubmit()}>
                    <Text>OK</Text>
                </Button>
            </View>
        )
    }
}

SignUp.navigationOptions = () => ({
    title: 'SignUp',
    headerTintColor: 'black',
    headerStyle: {
        backgroundColor: 'white'
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...signUpAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);