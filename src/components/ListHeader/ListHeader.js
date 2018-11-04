import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Text
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import { Button, Icon } from 'native-base'

export default class ListHeader extends Component {
    render() {
        const { navigation, listTitle, search, datas } = this.props
        return (
            <View style={styles.topBar}>
                <TextInput placeholder='filter' style={styles.inputText} underlineColorAndroid='#ff5766' onChangeText={e => search(e, datas)} placeholderTextColor='#ff5766' />
            </View >
        )
    }
}
const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: 'white',
    },
    inputText: {
        width: '90%',
        height: 40,
        borderStyle: 'solid',
        fontSize: 15,
        textAlign: 'right',
        paddingLeft: 10,
        paddingRight: 10
    },
    addButton: {
        height: 40,
        marginTop: '1%',
        backgroundColor: '#2962ff',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    }

});