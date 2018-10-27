import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
    ImageBackground
} from 'react-native';

import menu from '../../config/menu'

import {
    List,
    ListItem,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
} from 'native-base';

import {
    SignOut
} from '../../components';

import Spinner from 'react-native-loading-spinner-overlay';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22, marginLeft: '5%' }}>Home</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },
            headerRight: <SignOut />
        }
    }
    renderListItems = () => {
        const { navigation } = this.props
        return menu.mainMenu.map((e, i) => {
            return <ListItem icon key={i} style={{ marginTop: 20 }}>
                <Left>
                    <Button
                        onPress={() => navigation.dispatch({ type: e.link })}
                        style={{ backgroundColor: '#1E8DAB', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                        <Icon active name={e.icon} />
                    </Button>
                </Left>
                <TouchableOpacity
                    onPress={() => navigation.dispatch({ type: e.link })}
                    style={{ flex: 1, justifyContent: 'flex-start' }}
                >
                    <Body>
                        <Text style={styles.text}>{e.label}</Text>
                    </Body>
                </TouchableOpacity>
            </ListItem>
        })
    }

    render() {
        const { isLoading, navigation } = this.props;
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <ImageBackground source={require('../../../assets/background/background.png')} style={{ flex: 1 }}>
                <Fragment>
                    <ScrollView style={styles.container}>
                        <List style={{ marginTop: 10 }}>
                            {this.renderListItems()}
                        </List>
                    </ScrollView>
                </Fragment>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.75)'
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: '#636263'
    }
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);