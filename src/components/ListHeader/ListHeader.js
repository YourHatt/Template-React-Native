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
                <TextInput placeholder='search' style={styles.inputText} underlineColorAndroid='#64D4BE' onChangeText={e => search(e, datas)} placeholderTextColor='#24C1A2' maxLength={36} />
                <Button style={styles.addButton} onPress={() => navigation.dispatch({ type: 'FORM_SCREEN', formType: listTitle, edit: false })}>
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
        height: 60,
        backgroundColor: 'white',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: 'white'
    },
    inputText: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        fontSize: 15,
        backgroundColor: 'white',
        borderColor: 'white',
        textAlign: 'left',
        paddingLeft: 10,
        paddingRight: 10,
        // color: '#1E8DAB'
    },
    addButton: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        marginTop: '1%',
        backgroundColor: '#64D4BE',
        justifyContent: 'center',
        alignItems: 'center',
    }

});