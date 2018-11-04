import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native'

import React, { Component } from 'react';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class CircleView extends Component {
    render() {
        const color = this.props;
        return (
            <View style={[styles.circle, { backgroundColor: this.props.color }]} />
        )
    }
}
const styles = StyleSheet.create({
    circle: {
        marginRight: '2.5%',
        width: deviceHeight / 5,
        height: deviceHeight / 5,
        borderRadius: deviceHeight / 10,
        alignSelf: 'center',
        
    },
});
