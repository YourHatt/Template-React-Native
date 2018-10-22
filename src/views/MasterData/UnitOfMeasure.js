import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as unitOfMeasureAction from '../../redux/actions/unitOfMeasure';

import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View

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
    Text,
} from 'native-base';

import {
    ListHeader,
    ShowList
} from '../../components';

import Spinner from 'react-native-loading-spinner-overlay';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class UnitOfMeasure extends Component {
    state = {
        initialItem: [],
        searchInput: '',
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    componentDidMount = async () => {
        const { getList, unitOfMeasures } = this.props;
        getList();
    }

    searchFilter = (searchWord, data) => {
        this.setState({ searchInput: searchWord })
    }

    searchList = () => {
        const { searchInput } = this.state;
        const { unitOfMeasures } = this.props;
        if (searchInput && unitOfMeasures) return unitOfMeasures.filter(e => e.title.match(new RegExp(searchInput, 'gi')));
        else return unitOfMeasures;
    }

    render() {
        const { backpress, replace, isLoading, navigation, unitOfMeasures } = this.props;
        const listTitle = 'unitOfMeasures'
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <Fragment>
                <ListHeader navigation={navigation} listTitle={listTitle} search={this.searchFilter} data={unitOfMeasures} />
                <ScrollView style={styles.container}>
                    <ShowList menu={menu.unitOfMeasure} backpress={backpress} navigation={navigation} list={this.searchList()} listTitle={listTitle} />
                </ScrollView>
                <View style ={styles.bottomBar} />
            </Fragment>
        )
    }
}

UnitOfMeasure.navigationOptions = () => ({
    title: 'Unit Of Measures',
    headerTintColor: 'black',
    headerStyle: {
        backgroundColor: 'white'
    }
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
    },
    bottomBar: {
        width: '100%',
        height: 20,
        backgroundColor: '#efefef',
    },
});

const mapStateToProps = state => ({
    isLoading: state.unitOfMeasure.isLoading,
    unitOfMeasures: state.unitOfMeasure.unitOfMeasures,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...unitOfMeasureAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitOfMeasure);