import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as locationAction from '../../redux/actions/location';

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

class MasterLocation extends Component {
    state = {
        initialItem: [],
        searchInput: '',
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Location</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },

        }
    }

    componentDidMount = async () => {
        const { getList, locations } = this.props;
        getList();
    }

    searchFilter = (searchWord, data) => {
        this.setState({ searchInput: searchWord })
    }

    searchList = () => {
        const { searchInput } = this.state;
        const { locations } = this.props;
        if (searchInput && locations) return locations.filter(e => e.title.match(new RegExp(searchInput, 'gi')));
        else return locations;
    }

    render() {
        const { backpress, replace, isLoading, navigation, locations } = this.props;
        const listTitle = 'locations'
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <Fragment>
                <ListHeader navigation={navigation} listTitle={listTitle} search={this.searchFilter} data={locations} />
                <ScrollView style={styles.container}>
                    <ShowList menu={menu.location} backpress={backpress} navigation={navigation} list={this.searchList()} listTitle={listTitle} />
                </ScrollView>
                <View style={styles.bottomBar} />
            </Fragment>
        )
    }
}

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
        backgroundColor: 'white',
    },
});

const mapStateToProps = state => ({
    isLoading: state.location.isLoading,
    locations: state.location.locations,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...locationAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterLocation);