import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as productAction from '../../redux/actions/product';

import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
    ImageBackground
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

class Product extends Component {
    state = {
        initialItem: [],
        searchInput: '',
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Product</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },

        }
    }
    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    componentDidMount = async () => {
        const { getList, products } = this.props;
        getList();
    }

    searchFilter = (searchWord, data) => {
        this.setState({ searchInput: searchWord })
    }

    searchList = () => {
        const { searchInput } = this.state;
        const { products } = this.props;
        if (searchInput && products) return products.filter(e => e.title.match(new RegExp(searchInput, 'gi')));
        else return products;
    }

    render() {
        const { backpress, replace, isLoading, navigation, products } = this.props;
        const listTitle = 'products'
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <Fragment>
                <ListHeader navigation={navigation} listTitle={listTitle} search={this.searchFilter} data={products} />
                <ScrollView style={styles.container}>
                    <ShowList menu={menu.product} backpress={backpress} navigation={navigation} list={this.searchList()} listTitle={listTitle} />
                </ScrollView>
                <View style={styles.bottomBar} />
            </Fragment>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
    isLoading: state.product.isLoading,
    products: state.product.products,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...productAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);