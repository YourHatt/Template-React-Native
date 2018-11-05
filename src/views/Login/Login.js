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
    Loading
} from '../../components';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Login extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            loading: false
        }
    }

    onAuthentication = () => {
        const { username, password } = this.state;
        const { onAuthen } = this.props;
        const data = {
            username,
            password
        }

        onAuthen(data, this.onHandleLoading);
    }

    onHandleLoading = (val) => {
        this.setState({ loading: val });
    }

    handleChangeText = (variable) => (value) => {
        this.setState({ [variable]: value })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={{ width: deviceWidth, height: deviceHeight * 0.6, }}>
                    </View>
                    <View style={{ width: deviceWidth, height: deviceHeight * 0.4, alignItems: 'center' }}>
                        <Content style={styles.input}>
                            <Item rounded style={{ borderColor: '#ff5766', marginVertical: 5 }}>
                                <Input
                                    disabled={this.state.loading}
                                    maxLength={25}
                                    onChangeText={this.handleChangeText('username')}
                                    value={this.state.username}
                                    placeholder='Username' />
                                <Icon active type='EvilIcons' name='user' style={{ color: '#ff5766' }} />
                            </Item>
                            <Item rounded style={{ borderColor: '#ff5766', marginVertical: 5 }} >
                                <Input
                                    disabled={this.state.loading}
                                    maxLength={25}
                                    secureTextEntry={true}
                                    onChangeText={this.handleChangeText('password')}
                                    value={this.state.password}
                                    placeholder='Password' />
                                <Icon active type='EvilIcons' name='lock' style={{ color: '#ff5766' }} />
                            </Item>
                            { this.state.loading ? 
                                <Loading /> : 
                                <Button
                                    rounded
                                    info
                                    style={styles.button}
                                    onPress={this.onAuthentication}
                                >
                                    <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Login</Text>
                                </Button> 
                            } 
                        </Content>
                    </View>
                </KeyboardAvoidingView>
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
        backgroundColor: 'white'
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
        backgroundColor: '#ff5766',
        marginVertical: 10
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