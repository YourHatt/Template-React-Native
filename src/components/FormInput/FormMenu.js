import React, { Component } from 'react'
import {
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    Item,
    Content,
} from 'native-base';
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TextInput,
    View,
} from 'react-native';
import {
    FormProduct,
    FormMember,
    // FormLocation,
    // FormUnitOfMeasure,
    // FormExpense
} from '../index'

export default class FormMenu extends Component {

    render() {
        const { formType, itemData, navigation } = this.props
        this.renderMasterProduct
        switch (formType) {
            case 'products':
                return <FormProduct itemData={itemData} navi={navigation} />
            case 'members':
                return <FormMember itemData={itemData} navi={navigation} />
            // case 'locations':
            //     return <FormLocation itemData={itemData} navi={navigation} />
            // case 'unitOfMeasures':
            //     return <FormUnitOfMeasure itemData={itemData} navi={navigation} />
            // case 'expenses':
            //     return <FormExpense itemData={itemData} navi={navigation} />
            default:
                return <View>
                </View>
        }
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
