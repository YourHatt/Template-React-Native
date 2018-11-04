import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Icon } from 'native-base'
import React, { Component } from 'react';
import * as cartActions from '../../redux/actions/cart';

class CartIcon extends Component {
    render() {
        const { onClickCart, iconColor } = this.props
        return (
            <View>
                <Button transparent style={{ backgroundColor: 'transparent' }} onPress={() => onClickCart()}>
                    <Icon active type='EvilIcons' name='cart' style={{ color: iconColor }} />
                </Button>
            </View>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...cartActions,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);