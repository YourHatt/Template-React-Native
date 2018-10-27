
import {
    Button,
    Card,
    CardItem,
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
            return <TouchableOpacity style={{ width: '90%', borderRadius: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} onPress={() => navigation.dispatch({ type: 'FORM_SCREEN', data: e, formType: listTitle, edit: true })} key={i}>
                {/* <View style={{ marginVertical: 10, width: '90%', borderBottomWidth: 1, borderColor: '#64D4BE' }}>
                    <Text style={styles.text}>{e.title ? e.title : e.name ? e.name : e.label ? e.label : e.id ? e.id : e.product}</Text>
                    <Text style={{ marginLeft: 30 }} note numberOfLines={1}>{listTitle}</Text>
                    <Text style={{ marginLeft: 30 }} note numberOfLines={1}>description 1</Text>
                    <Text style={{ marginLeft: 30, marginBottom: 5 }} note numberOfLines={1}>description 2</Text>
                </View> */}
                <Card style={{ marginVertical: 10, width: '100%', borderBottomWidth: 1, borderColor: '#64D4BE' }}>
                    <CardItem>
                        <Body>
                            <Text style={styles.text}>{e.title ? e.title : e.name ? e.name : e.label ? e.label : e.id ? e.id : e.product}</Text>
                            <Text style={{ marginLeft: 30 }} note numberOfLines={1}>{listTitle}</Text>
                            <Text style={{ marginLeft: 30 }} note numberOfLines={1}>description 1</Text>
                            <Text style={{ marginLeft: 30, marginBottom: 5 }} note numberOfLines={1}>description 2</Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>

        })
    }
    render() {
        const { menuKeyState, data } = this.state
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 0.2, }}>
                </View>
                <View style={{ flex: 0.6 }}>
                    <Content style={{ flex: 1 }}>
                        {this.renderListItems()}
                    </Content>
                </View>
                <View style={{ flex: 0.2, }}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        marginLeft: 20,
        flex: 1,
        fontSize: 20,
        color: '#1E8DAB'
    }
});