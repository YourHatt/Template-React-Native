import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as goodTransferAction from '../../redux/actions/goodTransfer';

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

class GoodTransfer extends Component {
    state = {
        initialItem: [],
        searchInput: '',
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Good Transfer</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },

        }
    }

    componentDidMount = async () => {
        const { getList, goodTransfer } = this.props;
        getList();

    }

    searchFilter = (searchWord, data) => {
        this.setState({ searchInput: searchWord })
    }

    searchList = () => {
        const { searchInput } = this.state;
        const { goodTransfers } = this.props;
        // console.log(goodTransfer);
        if (searchInput && goodTransfers) return goodTransfers.filter(e => e.product.match(new RegExp(searchInput, 'gi')));
        else return goodTransfers;
    }

    render() {
        const { backpress, replace, isLoading, navigation, goodTransfers } = this.props;
        const listTitle = 'goodTransfers'
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <Fragment>
                <ListHeader navigation={navigation} listTitle={listTitle} search={this.searchFilter} data={goodTransfers} />
                <ScrollView style={styles.container}>
                    <ShowList menu={menu.goodTransfer} backpress={backpress} navigation={navigation} list={this.searchList()} listTitle={listTitle} />
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
        backgroundColor: '#efefef',
    },
});

const mapStateToProps = state => ({
    isLoading: state.goodTransfer.isLoading,
    goodTransfers: state.goodTransfer.goodTransfers,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...goodTransferAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodTransfer);