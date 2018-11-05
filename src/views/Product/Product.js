import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as productAction from '../../redux/actions/product';
import Spinner from 'react-native-loading-spinner-overlay';
import React, { Component, Fragment } from 'react';
import {
    StyleSheet,
    View,
    Picker,
    ScrollView,
    Platform,
    Animated,
    ImageBackground
} from 'react-native';

import {
    Button,
    Icon,
    Text
} from 'native-base'

import {
    HeaderMenu,
    ShowList,
    ListHeader,
    CartIcon,
} from '../../components';

import model from '../../class/ServicesAPI';

const ProductDTO = model.products.dto;

const NAVBAR_HEIGHT = 64;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 0, android: 0 });
const AnimatedListView = Animated.createAnimatedComponent(ShowList);

class Product extends Component {
    constructor(props) {
        super(props);
        const scrollAnim = new Animated.Value(0);
        const offsetAnim = new Animated.Value(0);

        this.state = {
            scrollAnim,
            offsetAnim,
            initialItem: [],
            searchInput: '',
            clampedScroll: Animated.diffClamp(
                Animated.add(
                    scrollAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                        extrapolateLeft: 'clamp',
                    }),
                    offsetAnim,
                ),
                0,
                NAVBAR_HEIGHT - STATUS_BAR_HEIGHT,
            ),
        };
    }
    state = {
        initialItem: [],
        searchInput: '',
    }
    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: '#ff5766', fontWeight: 'bold', fontSize: 22, marginLeft: '5%' }}>Products</Text>,
            headerStyle: {
                backgroundColor: 'white',
            },
            headerRight: <CartIcon iconColor='#ff5766' />,
        }
    }
    componentDidMount = async () => {
        const { getList, products } = this.props;
        getList();
    }

    searchFilter = (searchWord, data) => {
        this.setState({ searchInput: searchWord })
    }

    searchList = () => {
        const { searchInput } = this.state;
        let { products } = this.props;
        products = ProductDTO.filterDataActive(products);
        products = ProductDTO.getArrayToDispaly(products);
        if (searchInput && products) return ProductDTO.searchFilter(searchInput, products);
        else return products;
    }
    render() {
        let { backpress, replace, isLoading, navigation, products } = this.props;
        const { clampedScroll } = this.state;
        const navbarTranslate = clampedScroll.interpolate({
            inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
            outputRange: [0, -(NAVBAR_HEIGHT - STATUS_BAR_HEIGHT)],
            extrapolate: 'clamp',
        });
        const navbarOpacity = clampedScroll.interpolate({
            inputRange: [0, NAVBAR_HEIGHT - 20],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });

        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <ImageBackground source={require('../../../assets//background//bg_pink.png')} style={{ flex: 1 }}>
                <Fragment>
                    <ScrollView
                        style={styles.container}
                        scrollEventThrottle={1}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
                        )}
                    >
                        <ShowList backpress={backpress} navigation={navigation} list={this.searchList()} />
                    </ScrollView>
                    <Animated.View style={[styles.navbar, { transform: [{ translateY: navbarTranslate }], opacity: navbarOpacity  }]}>
                        <ListHeader navigation={navigation} search={this.searchFilter} data={products} />
                    </Animated.View>
                </Fragment>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    button: {
        // marginVertical: 10,
    },
    text: {
        fontSize: 22
    },
    bottomBar: {
        width: '100%',
        height: 20,
        backgroundColor: '#efefef',
    },
    navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: 'white',
        height: NAVBAR_HEIGHT,
        justifyContent: 'center',
    },
    contentContainer: {
        paddingTop: NAVBAR_HEIGHT,
    },


});

const mapStateToProps = state => ({
    isLoading: state.product.isLoading,
    products: state.product.products,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...productAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);