import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as formInputAction from '../../redux/actions/formInput';

import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
} from 'react-native';

import menu from '../../config/menu'

import {
    Text,
} from 'native-base';

import {
    SignOut,
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
                    {/* <Text>{formType}</Text> */}
                </ScrollView>
            </Fragment>
        )
    }
}

FormInput.navigationOptions = () => ({
    title: 'Form Input',
    headerTintColor: 'black',
    headerStyle: {
        backgroundColor: '#ffffff'
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
    formType: state.formInput.formType,
    data: state.formInput.data
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...formInputAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
