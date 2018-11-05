import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as showAction from '../../redux/actions/showProduct';
import * as cartAction from '../../redux/actions/cart';

import {
    StyleSheet,
    View,
    Picker,
    Dimensions,
    Image,
    ScrollView,
    TextInput
} from 'react-native';

import {
    Button,
    Icon,
    Text,
    Item,
    Input,
    InputGroup,
    Content
} from 'native-base'

import {
    HeaderMenu,
    CartIcon
} from '../../components';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class ShowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productValue: 1
         }
    }
    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22, marginLeft: '5%' }}>Seleceted Product</Text>,
            headerStyle: {
                backgroundColor: 'white',
            },
            headerRight: <CartIcon iconColor='white' />,
            headerBackground: (
                <Image
                    style={StyleSheet.absoluteFill}
                    source={{ uri: 'https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.15752-9/44895605_325495011600646_9032834973932978176_n.png?_nc_cat=100&_nc_ht=scontent.fbkk8-3.fna&oh=06b8b58d3dd3e28f3ca307f0f25fadca&oe=5C7F6C12' }}
                />
            ),
        }
    }

    onAddCart = () => {
        let { pickedItem, onAddCart } = this.props;
        onAddCart(pickedItem, productValue);
    }

    render() {
        const { navigation, pickedItem, value, onAddCart } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.imageBox}>
                        <Image source={pickedItem.image} resizeMode='contain' style={styles.image} />
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', }}>{pickedItem.title}</Text>
                        <Text style={styles.text}>description 1</Text>
                        <Text style={styles.text}>description 2</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <Content style={styles.input}>
                            <Item rounded style={{ borderColor: '#ff5766' }}>
                                <Input keyboardType='numeric' maxLength={3} onChangeText={e => this.setState({ productValue: e })} placeholder='1' error={true} />
                                <Icon active type='EvilIcons' name='chevron-down' style={{ color: '#ff5766' }} />
                            </Item>
                        </Content>
                        <Button style={{ marginLeft: deviceWidth * 0.075, backgroundColor: '#ff5766' }} onPress={this.onAddCart}>
                            <Text>add to cart</Text>
                            <Icon active type='EvilIcons' name='cart' />
                        </Button>
                        <View style={{ width: deviceWidth * 0.1 }} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: '5%'
        // justifyContent: 'center',
    },
    button: {
        // marginVertical: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 20,
    },
    textTitle: {
        fontSize: 22,
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
    },
    imageBox: {
        width: '80%',
    },
    image: {
        width: deviceWidth * 0.8,
        height: deviceHeight * 0.5,
    },
    description: {
        width: deviceWidth * 0.9,
        height: deviceHeight * 0.20,
        marginTop: '2.5%',
        paddingLeft: '5%'
    },
    bottomView: {
        flexDirection: 'row',
        width: deviceWidth * 0.9,
        height: deviceHeight * 0.07,
        paddingLeft: '5%',
        marginTop: '2.5%',
        marginBottom: '2.5%',
        // backgroundColor: 'orange',
        marginBottom: '2.5%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 15,
    },
    divider: {
        width: deviceWidth * 0.9,
        flex: 0.1,
    },
    input: {
        width: deviceWidth * 0.2,
        height: deviceHeight * 0.6,
        alignSelf: 'flex-start',
    }
});

const mapStateToProps = state => ({
    pickedItem: state.showProduct.pickedItem,
    value: state.showProduct.value,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...showAction,
            ...cartAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);