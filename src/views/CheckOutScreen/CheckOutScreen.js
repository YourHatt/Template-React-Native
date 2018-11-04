import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Picker,
    Animated,
    Dimensions,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import {
    Icon,
    Text,
    Card,
    CardItem,
    Body,
} from 'native-base'

import {
    HeaderMenu,
    CircleView
} from '../../components';
// import  { } from 'react-native-share';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class CheckoutScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: '#ff5766', fontWeight: 'bold', fontSize: 22, marginLeft: '5%' }}>Sumary</Text>,
            headerStyle: {
                backgroundColor: 'white',
            },
            headerRight: <HeaderMenu />
        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <ImageBackground source={require('../../../assets//background/background_1.jpg')} style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonBox} onPress={() => console.log('do something')} >
                        <Card style={styles.cardBox}>
                            <CardItem style={{ borderRadius: 50 }}>
                                <Body>
                                    <View style={styles.button}>
                                        <Text style={styles.text}>Action three</Text>
                                        <CircleView color='#ff5766' />
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                </View>
            </ ImageBackground >

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '2.5%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '2.5%',
    },
    button: {
        // marginVertical: 10,
        width: '100%',
        height: deviceHeight / 4.5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardBox: {
        // borderRadius: 50
    },
    buttonBox: {
        // marginVertical: 10,
        width: '90%',
    },
    text: {
        alignSelf: 'center',
        marginLeft: '10%',
        fontSize: deviceWidth / 20
    },
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);