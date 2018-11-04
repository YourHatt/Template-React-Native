import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as expenseAction from '../../redux/actions/expense';

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

class Expense extends Component {
    state = {
        initialItem: [],
        searchInput: '',
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Expense</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },

        }
    }

    componentDidMount = async () => {
        const { getList, expenses } = this.props;
        getList();

    }

    searchFilter = (searchWord, data) => {
        this.setState({ searchInput: searchWord })
    }

    searchList = () => {
        const { searchInput } = this.state;
        const { expenses } = this.props;
        if (searchInput && expenses) return expenses.filter(e => e.title.match(new RegExp(searchInput, 'gi')));
        else return expenses;
    }

    render() {
        const { backpress, replace, isLoading, navigation, expenses } = this.props;
        const listTitle = 'expenses'
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <Fragment>
                <ListHeader navigation={navigation} listTitle={listTitle} search={this.searchFilter} data={expenses} />
                <ScrollView style={styles.container}>
                    <ShowList menu={menu.expense} backpress={backpress} navigation={navigation} list={this.searchList()} listTitle={listTitle} />
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
    isLoading: state.expense.isLoading,
    expenses: state.expense.expenses,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...expenseAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Expense);