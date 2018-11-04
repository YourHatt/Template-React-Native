
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
    TouchableHighlight,
} from 'react-native';
import {
    ShowModal
} from '../../components'

import React, { Component, Fragment } from 'react';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class ShowList extends Component {

    state = {
        menuKeyState: '',
        data: {}
    };
    renderListItems = () => {
        const { menu, backpress, navigation, list, listTitle } = this.props
        if (list) return list.map((e, i) => {
            return <TouchableOpacity style={{ width: '90%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 30 }} onPress={() => navigation.dispatch({ type: 'SHOW_SCREEN', data: e, formType: listTitle })} key={i}>
                <Card style={{ marginVertical: 10, width: '100%', borderBottomWidth: 1, borderColor: '#ff5766', }}>
                    <CardItem >
                        <Left style={{ width: '30%', height: '75%', alignItems: 'center', justifyContent: 'center' }}>
                            <Thumbnail square large source={e.image} style={styles.imageList} resizeMode='contain' />
                        </Left>
                        <Body >
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>{e.title}</Text>
                            <Text note style={{ fontSize: 14, marginLeft: 10 }}>{e.status}</Text>
                            <Text note style={{ fontSize: 14, marginLeft: 10 }}>{e.status}</Text>
                            <Text note style={{ fontSize: 14, marginLeft: 10 }}>{e.status}</Text>
                            <Text note style={{ fontSize: 14, marginLeft: 10, color: '#ff5766', marginTop: 10 }}>${e.unitPrice}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity >
        })
    }
    render() {
        const { menuKeyState, data } = this.state
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 0.2, }}>
                </View>
                <View style={{ flex: 0.6 }}>
                    <Content style={{ flex: 1, marginTop: '15%', marginBottom: '5%' }}>
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
        marginTop: 50,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: '#636263',
        fontWeight: 'bold'
    },
    imageList: {
        height: '100%',
        width: '100%',
    },
    divider: {
        marginTop: 20,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ff5766'
    },
    list: {
        borderRadius: 10,
        marginRight: deviceWidth / 20,
        marginTop: 10,
        height: deviceHeight / 3,
        width: deviceWidth * 0.9,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        alignSelf: 'center',
    },

});