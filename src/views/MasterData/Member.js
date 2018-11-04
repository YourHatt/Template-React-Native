import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as memberAction from '../../redux/actions/member';

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

class Member extends Component {
    state = {
        initialItem: [],
        searchInput: '',
    }

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Member</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },

        }
    }
    componentDidMount = async () => {
        const { getList, members } = this.props;
        getList();
    }

    searchFilter = (searchWord, data) => {
        this.setState({ searchInput: searchWord })
    }

    searchList = () => {
        const { searchInput } = this.state;
        const { members } = this.props;
        if (searchInput && members) return members.filter(e => e.title.match(new RegExp(searchInput, 'gi')));
        else return members;
    }

    render() {
        const { backpress, replace, isLoading, navigation, members } = this.props;
        const listTitle = 'members'
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <Fragment>
                <ListHeader navigation={navigation} listTitle={listTitle} search={this.searchFilter} data={members} />
                <ScrollView style={styles.container}>
                    <ShowList menu={menu.member} backpress={backpress} navigation={navigation} list={this.searchList()} listTitle={listTitle} />
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
    isLoading: state.member.isLoading,
    members: state.member.members,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...memberAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Member);