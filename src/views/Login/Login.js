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
    Dimensions
} from 'react-native';
import { Button, Icon, Content, Input, Item } from 'native-base'

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
                        <View style={{ flex: 0.2, }}></View>
                        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', }} >
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
                            <Content style={styles.input}>
                                <Item rounded style={{ borderColor: '#ff5766' }}>
                                    <Input maxLength={3} onChangeText={e => { emailChange(e) }} placeholder='Username' />
                                    <Icon active type='EvilIcons' name='user' style={{ color: '#ff5766' }} />
                                </Item>
                            </Content>
                            <Content style={styles.input}>
                                <Item rounded style={{ borderColor: '#ff5766' }}>
                                    <Input maxLength={3} onChangeText={e => { passwordChange(e) }} placeholder='Password' />
                                    <Icon active type='EvilIcons' name='lock' style={{ color: '#ff5766' }} />
                                </Item>
                            </Content>
                        </View>
                        <View style={{ flex: 0.2, }}>
                            <Button
                                rounded
                                info
                                style={styles.button}
                                onPress={() => onAuthen()}
                            >
                                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Login</Text>
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
        width: '75%',
        height: 44,
        marginHorizontal: '5%',
        backgroundColor: '#ff5766'
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