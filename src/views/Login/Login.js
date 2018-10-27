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
    TouchableWithoutFeedback,
    Dimensions,
    ImageBackground
} from 'react-native';
import { Button, Icon } from 'native-base'

import {

} from '../../components';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Login extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    render() {
        const { navigation, emailChange, passwordChange, email, password, onAuthen, onClickSignUp } = this.props;
        return (
            <ImageBackground source={require('../../../assets/background/background_login.png')} style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>
                        <View style={{
                            width: '100%',
                            height: '100%',
                            flexDirection: 'column',
                        }} behavior="padding" enabled>
                            <View style={{ flex: 0.2 }}></View>
                            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }} >
                                <Icon style={{ fontSize: deviceWidth / 6, color: '#24C1A2' }} type='Feather' name='box'></Icon>
                            </View>
                            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.SectionStyle}>
                                    <Icon style={styles.inputIcon} type='EvilIcons' name='user'></Icon>
                                    <TextInput
                                        value={email}
                                        onChangeText={e => { emailChange(e) }}
                                        placeholder={'Username'}
                                        style={styles.input}
                                        placeholderTextColor='#64D4BE'
                                    /></View>
                                <View style={styles.SectionStyle}>
                                    <Icon style={styles.inputIcon} type='EvilIcons' name='lock'></Icon>
                                    <TextInput
                                        value={password}
                                        onChangeText={e => { passwordChange(e) }}
                                        placeholder={'Password'}
                                        secureTextEntry={true}
                                        style={styles.input}
                                        placeholderTextColor='#64D4BE'
                                    /></View>
                            </View>
                            <View style={{ flex: 0.4 }}>
                                <Button
                                    rounded
                                    info
                                    style={styles.button}
                                    onPress={() => onAuthen()}
                                >
                                    <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', }}>Login</Text>
                                </Button>
                                <Button transparent
                                    style={styles.buttonSignUp}
                                    onPress={() => onClickSignUp()}
                                >
                                    <Text style={{ fontSize: 15, textAlign: 'right', color: '#64D4BE' }}>Sign Up ?</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>

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
        // backgroundColor: '#ecf0f1',
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
        width: '60%',
        height: 44,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#64D4BE',
        // borderWidth: 1,
        // borderColor: 'white',
        marginBottom: 10,
    },
    button: {
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#1E8DAB',
        width: 144,
        marginHorizontal: '5%'
    },
    buttonSignUp: {
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        width: 144,
        marginHorizontal: '5%',
    },
    inputIcon: {
        padding: 10,
        fontSize: 35,
        color: '#64D4BE'
    },
    SectionStyle: {
        marginTop: 20,
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(255,255,255,0.2)',
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