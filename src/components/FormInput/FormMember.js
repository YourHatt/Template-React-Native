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
    Card,
    CardItem,
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as memberAction from '../../redux/actions/member';
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TextInput,
    View,
} from 'react-native';
import { PRODUCT_LOADING_STARTED } from '../../redux/actions/member';

class FormMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchInput: false,
            searchInput: '',
            name: '',
            address: '',
            tel: '',
            numberOfShares: '',
            word: '',
        }
        this.newData = {
            name: '',
            address: '',
            tel: '',
            numberOfShares: '',
        }
    }
    componentDidMount() {
        const { itemData } = this.props;
        if (itemData) {
            this.setState({
                name: itemData.name,
                address: itemData.address,
                tel: itemData.tel,
                numberOfShares: itemData.numberOfShares,
            })
        }
    }
    onInputChange = () => {
        const { onCreateSubmit, getList } = this.props;
        this.newData.name = this.state.name
        this.newData.address = this.state.address
        this.newData.tel = this.state.tel
        this.newData.numberOfShares = this.state.numberOfShares
        onCreateSubmit(this.newData)
        getList();

    }
    render() {
        const { itemData } = this.props;
        return (
            <View>
                <Content padder>
                    <Text style={[styles.text, { marginVertical: 10 }]}> Member </Text>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Member Name </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.name} onChangeText={e => this.setState({ name: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Address </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.address} onChangeText={e => this.setState({ address: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Tel </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.tel} onChangeText={e => this.setState({ tel: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Number Of Shares </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.numberOfShares} onChangeText={e => this.setState({ numberOfShares: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Button style={{ backgroundColor: '#24C1A2' }} block onPress={() => { this.onInputChange() }}><Text> {itemData ? 'Save' : 'Add'}</Text></Button>
                </Content>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    text: {
        // marginLeft: 20,
        flex: 1,
        fontSize: 20,
        color: '#1E8DAB'
    },
    input: {
        paddingLeft: 10,
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#e8edf4',
        fontSize: 20,
        color: 'black'
    },
    cardForm: {
        borderBottomWidth: 1,
        borderColor: '#64D4BE'
    }
});
const mapStateToProps = state => ({
    isLoading: state.member.isLoading,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...memberAction
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormMember);