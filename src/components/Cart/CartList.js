
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

export default class CartList extends Component {

    state = {
        menuKeyState: '',
        data: {}
    };

    renderListItems = () => {
        const { menu, backpress, navigation, list, listTitle, amount } = this.props
        if (list.length) return list.map((e, i) => {
            return <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} key={i}>
                <Card style={{ marginVertical: 10, width: '100%', borderBottomWidth: 1, borderColor: '#ff5766', }}>
                    <CardItem >
                        <Left style={{ width: '30%', height: '75%', alignItems: 'center', justifyContent: 'center' }}>
                            <Thumbnail square large source={e.image} style={styles.imageList} resizeMode='contain' />
                        </Left>
                        <Body>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>{e.title}</Text>
                            <Text note style={{ fontSize: 14, marginLeft: 10 }}>{e.status}</Text>
                            <Text note style={{ fontSize: 14, marginLeft: 10 }}>{e.status}</Text>
                            <Text note style={{ fontSize: 14, marginLeft: 10 }}>{e.status}</Text>
                            <Text note style={{ fontSize: 14, marginLeft: 10, color: '#ff5766', marginTop: 10, fontWeight: 'bold' }}>${e.unitPrice} x {amount[i]}</Text>
                        </Body>
                        <Right style={{ width: '100%', height: '100%' }}>
                            <TouchableOpacity>
                                <Icon active type='EvilIcons' name='close-o' style={{ fontSize: 40, color: '#f18316' }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ff5766', textAlign: 'center', marginTop: '30%' }}> $ {e.unitPrice * amount[i]}</Text>
                        </Right>
                    </CardItem>
                </Card>
            </View>
        }
        )
        else return <View style={styles.container}>
            <Text style={styles.text}>There are no item in cart </Text>
        </View>
    }
    render() {
        const { menuKeyState, data } = this.state
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 0.2, }}>
                </View>
                <View style={{ flex: 0.6 }}>
                    <Content style={{ flex: 1, marginTop: '5%', marginBottom: '5%' }}>
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
        color: '#ff5766',
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