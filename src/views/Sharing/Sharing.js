import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import * as sharingAction from '../../redux/actions/sharing';

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

} from '../../components';

import Spinner from 'react-native-loading-spinner-overlay';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Sharing extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Master Data</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },

        }
    }

    // renderListItems = () => {
    //     const { navigation } = this.props
    //     return menu.Sharing.map((e, i) => {
    //         return <ListItem icon key={i} style={{ marginTop: 20 }}>
    //             <Left>
    //                 <Button
    //                     onPress={() => navigation.dispatch({ type: e.link })}
    //                     style={{ backgroundColor: "#007AFF", justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
    //                     <Icon active name={e.icon} />
    //                 </Button>
    //             </Left>
    //             <TouchableOpacity
    //                 onPress={() => navigation.dispatch({ type: e.link })}
    //                 style={{ flex: 1, justifyContent: 'flex-start' }}
    //             >
    //                 <Body>
    //                     <Text style={styles.text}>{e.label}</Text>
    //                 </Body>
    //             </TouchableOpacity>
    //         </ListItem>
    //     })
    // }

    render() {
        const { isLoading, navigation } = this.props;
        if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} />
        return (
            <ImageBackground source={require('../../../assets/background/background.png')} style={{ flex: 1 }}>
                <Fragment>
                    <ScrollView style={styles.container}>
                        {/* <List style={{ marginTop: 10 }}>
                        {this.renderListItems()}
                    </List> */}
                        <Text>SHARING_SCREEN</Text>
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
            ...sharingAction,
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sharing);