
import {
    List,
    ListItem,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    Item,
    Content,
    Thumbnail
} from 'native-base';
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput,
    View,
    Modal,
    TouchableHighlight
} from 'react-native';
import {
    ShowModal
} from '../../components'

import React, { Component, Fragment } from 'react';

export default class ShowList extends Component {

    state = {
        menuKeyState: '',
        data: {}
    };

    renderListItems = () => {
        const { menu, backpress, navigation, list, listTitle } = this.props
        if (list) return list.map((e, i) => {
            return <ListItem numberOfLines={2} icon key={i} style={{ marginTop: 20 }} button onPress={() => navigation.dispatch({ type: 'FORM_SCREEN', data: e, formType: listTitle })}>
                <Left>
                    <Thumbnail square source={require('../../../assets/icon.png')} />
                </Left>
                <Body>
                    <Text>{e.title ? e.title : e.name ? e.name : e.label}</Text>
                    {/* <Text note numberOfLines={1}>{e.status ? e.status : e.address ? e.address : e.description}</Text> */}
                    <Text note numberOfLines={1}>{listTitle}</Text>
                </Body>
            </ListItem>
        })
    }
    render() {
        const { menuKeyState, data } = this.state
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 0.2, backgroundColor: 'green' }}>
                </View>
                <View style={{ flex: 0.6 }}>
                    <Content style={{ flex: 1 }}>
                        <List style={{ marginTop: 10, marginBottom: 10 }}>
                            {this.renderListItems()}
                        </List>
                    </Content>
                </View>
                <View style={{ flex: 0.2, backgroundColor: 'red' }}>
                </View>
            </View>
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
    }
});