import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as authUserActions from '../../redux/actions/login';
import SignOut from '../../components/SingOut/SignOut'
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import menu from '../../config/menu'

import {
    List,
    ListItem,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text
} from 'native-base';

import {
    FormMenu
} from '../../components';

import Spinner from 'react-native-loading-spinner-overlay';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class FormInput extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    render() {
        const { navigation, user, isLoading, data, formType } = this.props;
        // console.log(data, formType)
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <Fragment>
                <ScrollView style={styles.container}>
                    <FormMenu formType={formType} itemData={data} isEdit navigation={navigation} />
                </ScrollView>
            </Fragment>
        )
    }
}

FormInput.navigationOptions = () => ({
    title: 'FormInput',
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#2962ff'
    },
    headerRight: <SignOut />
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: '#636263'
    }
});

const mapStateToProps = state => ({
    user: state.login.user,
    isLoading: state.login.isLoading,
    // data: state.formInput.data,
    // formType: state.formInput.formType
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...loginActions
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
