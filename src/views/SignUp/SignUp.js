import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as signUpAction from '../../redux/actions/signUp';

import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import {
    Button,
    Content,
    Item,
    Input,
    Icon
} from 'native-base'
import {

} from '../../components';

class SignUp extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22, marginLeft: '5%' }}>Sign Up</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },
        }
    }
    render() {
        const { navigation, onClickSubmit, emailChange, passwordCahnge, nameChange, retypePasswordChange, telChange, addressChange, passwordChange, inputError, inputSuccess, isSame, password, retypePassword } = this.props;
        return (
            <ImageBackground source={require('../../../assets/background/background_login.png')} style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <View style={{ flex: 0.9 }}>
                            <Content>
                                <Item rounded style={styles.input}>
                                    <Icon active name='home' />
                                    <Input placeholder='e-mail' onChangeText={e => emailChange(e)} />
                                </Item>
                            </Content>
                            <Content>
                                <Item rounded style={styles.input}>
                                    <Icon active name='home' />
                                    <Input placeholder='name' onChangeText={e => nameChange(e)} />
                                </Item>
                            </Content>
                            <Content>
                                <Item rounded style={styles.input} error={!!!password && isSame} success={!!password && isSame}>
                                    <Icon active name='home' />
                                    <Input placeholder='password' secureTextEntry={true} onChangeText={e => passwordChange(e)} />
                                </Item>
                            </Content>
                            <Content>
                                <Item rounded style={styles.input} error={!!!retypePassword && isSame} success={!!retypePassword && isSame}>
                                    <Icon active name='home' />
                                    <Input placeholder='retype password' secureTextEntry={true} onChangeText={e => retypePasswordChange(e)} />
                                </Item>
                            </Content>
                            <Content>
                                <Item rounded style={styles.input}>
                                    <Icon active name='home' />
                                    <Input placeholder='tel' onChangeText={e => telChange(e)} />
                                </Item>
                            </Content>
                            <Content>
                                <Item rounded style={styles.input}>
                                    <Icon active name='home' />
                                    <Input placeholder='address' onChangeText={e => addressChange(e)} />
                                </Item>
                            </Content>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                        <Button primary block onPress={() => onClickSubmit()} style={styles.button}>
                            <Text>OK</Text>
                        </Button>
                    </View>

                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
        paddingTop: '5%'
    },
    button: {
        backgroundColor: '#1E8DAB'
    },
    input: {
        backgroundColor: 'white',
        width: 300,
        alignSelf: 'center'
    }
});

const mapStateToProps = state => ({
    inputError: state.signUp.inputError,
    inputSuccess: state.signUp.inputSuccess,
    isSame: state.signUp.isSame,
    password: state.signUp.password,
    retypePassword: state.signUp.retypePassword,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...signUpAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);