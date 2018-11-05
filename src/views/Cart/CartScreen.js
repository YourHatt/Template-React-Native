import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as cartAction from '../../redux/actions/cart';

import {
    StyleSheet,
    View,
    Picker,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';

import {
    Button,
    Icon,
    Text,
    Card,
    CardItem,
    Content,
    Body
} from 'native-base'

import {
    HeaderMenu,
    CartIcon,
    CartList
} from '../../components';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class CartScreen extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    renderCheckoutHeader = (totalPrice) => {
        const { navigation } = this.props
        if (totalPrice !== 0) return <View style={{ width: deviceWidth * 1, height: deviceHeight * 0.1, backgroundColor: '#f18316', flexDirection: 'row' }}
            visibility={totalPrice === 0 ? false : true}
        >
            <View style={{ width: deviceWidth * 0.65, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, marginBottom: 5, color: 'white', marginLeft: '10%' }}>Total</Text>
                <Text style={{ fontSize: 30, marginBottom: 5, color: 'white', marginLeft: '10%' }}>$ {totalPrice}</Text>
            </View>
            <View style={{ width: deviceWidth * 0.35, justifyContent: 'center' }}>
                <Button transparent style={{ borderRadius: 20, borderColor: '#f18316', backgroundColor: 'rgba(0,0,0,0.1)', marginRight: '10%' }}
                    onPress={() => navigation.dispatch({ type: 'CHECKOUT_SCREEN' })}
                >
                    <Text style={{ color: 'white' }}>check out </Text>
                </Button>
            </View>
        </View>
        else return <View />
    }
    render() {
        const { navigation, backpress, carts, amount, totalAmount, totalPrice, onRemoveCart } = this.props;
        return (
            <Fragment>
                {this.renderCheckoutHeader(totalPrice)}
                <ScrollView style={styles.container}>
                    <CartList backpress={backpress} navigation={navigation} list={carts} onRemoveCart={onRemoveCart} amount={amount} />
                </ScrollView>
            </Fragment >
        )
    }
}

CartScreen.navigationOptions = () => ({
    title: 'Cart',
    headerTintColor: 'black',
    headerStyle: {
        backgroundColor: 'white'
    },
    // headerRight: <CartIcon />,
    // headerRight: <HeaderMenu />,

});
const styles = StyleSheet.create({
    container: {
        height: deviceHeight * 0.65,
        width: deviceWidth,
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    button: {
        // marginVertical: 10,
    },
    text: {
        fontSize: 22,
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 10,
    },
    imageBox: {
        flex: 0.7,
        width: deviceWidth * 0.9,
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: deviceWidth * 0.9,
        height: deviceHeight * 0.6,
    },
    description: {
        flex: 0.2,
        marginTop: 10,
        width: deviceWidth * 0.9,
        borderRadius: 5,
        backgroundColor: 'white',
        paddingBottom: 10
    },
    divider: {
        width: deviceWidth * 0.9,
        flex: 0.05,
    }
});

const mapStateToProps = state => ({
    carts: state.cart.carts,
    amount: state.cart.amount,
    totalAmount: state.cart.totalAmount,
    totalPrice: state.cart.totalPrice
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...cartAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);