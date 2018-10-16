import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import {

} from '../../components';

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>x</Text>
            </View>
        )
    }
}

Home.navigationOptions = () => ({
    title: 'Home',
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

        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);