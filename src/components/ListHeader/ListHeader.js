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
    onAdd = () => {
        const { navigation, listTitle, search, datas, onAddPress } = this.props
        onAddPress()
        navigation.dispatch({ type: 'FORM_SCREEN', formType: listTitle })

    }
    render() {
        const { navigation, listTitle, search, datas } = this.props
        return (
            <View style={styles.topBar}>

                <TextInput placeholder='search' style={styles.inputText} underlineColorAndroid='rgba(0,0,0,0)' onChangeText={e => search(e, datas)} />
                <Button style={{ backgroundColor: '#c5d2e8' }} onPress={() => navigation.dispatch({ type: 'FORM_SCREEN', formType: listTitle })}>
                    <Icon active type='Ionicons' name='add' />
                </Button>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#c5d2e8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: 'white'
    },
    inputText: {
        width: '60%',
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize: 15,
        borderRadius: 25,
        backgroundColor: 'white',
        borderColor: 'white',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
});