import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as loginAction from '../../redux/actions/login';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Image,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import { Button, Icon } from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay';

import {

} from '../../components';

class Login extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    render() {
        const { navigation, emailChange, passwordChange, email, password, onAuthen, onClickSignUp } = this.props;
        console.log('xxx')
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        flexDirection: 'column',
                    }} behavior="padding" enabled>
                        <View style={{ flex: 0.2 }}></View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }} >
                            <Image source={require('../../../assets/icon.png')} resizeMode='contain' style={{ width: '25%' }} />
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.SectionStyle}>
                                <Icon style={styles.inputIcon} type='EvilIcons' name='user'></Icon>
                                <TextInput
                                    value={email}
                                    onChangeText={e => { emailChange(e) }}
                                    placeholder={'Username'}
                                    style={styles.input}
                                /></View>
                            <View style={styles.SectionStyle}>
                                <Icon style={styles.inputIcon} type='EvilIcons' name='lock'></Icon>
                                <TextInput
                                    value={password}
                                    onChangeText={e => { passwordChange(e) }}
                                    placeholder={'Password'}
                                    secureTextEntry={true}
                                    style={styles.input}
                                /></View>
                        </View>
                        <View style={{ flex: 0.4 }}>
                            <Button
                                rounded
                                info
                                style={styles.button}
                                onPress={() => onAuthen()}
                            >
                                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Login</Text>
                            </Button>
                            <Button transparent
                                style={styles.button}
                            onPress={() => onClickSignUp()}
                            >
                                <Text style={{ fontSize: 15, textAlign: 'right' }}>Sign Up ?</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

Login.navigationOptions = () => ({
    header: null
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    textHeader: {
        flex: 1,
        fontSize: 30,
        color: '#b1bbcc'
    },
    input: {
        fontSize: 15,
        margin: 10,
        marginTop: 10,
        width: '75%',
        height: 44,
        padding: 10,
        // borderWidth: 1,
        // borderColor: 'white',
        marginBottom: 10,
    },
    button: {
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        width: 144,
        marginHorizontal: '5%'
    },
    inputIcon: {
        padding: 10
    },
    SectionStyle: {
        marginTop: 20,
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

const mapStateToProps = state => ({
    isLoading: state.login.isLoading,
    email: state.login.email,
    password: state.login.password,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...loginAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);