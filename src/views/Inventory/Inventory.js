import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as inventoryAction from '../../redux/actions/inventory';

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

} from '../../components';

import Spinner from 'react-native-loading-spinner-overlay';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Inventory extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    renderListItems = () => {
        const { navigation } = this.props
        return menu.inventory.map((e, i) => {
            return <ListItem icon key={i} style={{ marginTop: 20 }}>
                <Left>
                    <Button
                        onPress={() => navigation.dispatch({ type: e.link })}
                        style={{ backgroundColor: "#007AFF", justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                        <Icon active name={e.icon} />
                    </Button>
                </Left>
                <TouchableOpacity
                    onPress={() => navigation.dispatch({ type: e.link })}
                    style={{ flex: 1, justifyContent: 'flex-start' }}
                >
                    <Body>
                        <Text style={styles.text}>{e.label}</Text>
                    </Body>
                </TouchableOpacity>
            </ListItem>
        })
    }

    render() {
        const { isLoading, navigation } = this.props;
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <Fragment>
                <ScrollView style={styles.container}>
                    <List style={{ marginTop: 10 }}>
                        {this.renderListItems()}
                    </List>
                </ScrollView>
            </Fragment>
        )
    }
}

Inventory.navigationOptions = () => ({
    title: 'Inventory',
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
    }
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...inventoryAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);