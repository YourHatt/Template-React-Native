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
                        <Card>
                            <CardItem>
                                <Text> Member Name </Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <TextInput value={this.state.name} onChangeText={e => this.setState({ name: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text> Address </Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <TextInput value={this.state.address} onChangeText={e => this.setState({ address: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text> Tel </Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <TextInput value={this.state.tel} onChangeText={e => this.setState({ tel: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Text> Number Of Shares </Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <TextInput value={this.state.numberOfShares} onChangeText={e => this.setState({ numberOfShares: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                                </Body>
                            </CardItem>
                        </Card>
                        {/* <Autocomplete
                            data={data}
                            defaultValue={testSearchProduct}
                            onChangeText={text => this.setState({ testSearchProduct: text })}
                            renderItem={item => (
                                <TouchableOpacity onPress={() => this.setState({ testSearchProduct: item })}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                        /> */}
                        {/* <Card>
                            <CardItem button onPress={() => this.toggleSearchinput(this.state.showSearchInput)}>
                                <Body>
                                    <TextInput editable={false} value={testName} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                                </Body>
                            </CardItem>
                        </Card> */}
                        <Button onPress={() => { this.onInputChange() }}><Text> SUBMIT</Text></Button>
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
        flex: 1,
        fontSize: 20,
        color: 'black'
    },
    input: {
        paddingLeft: 10,
        width: '80%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#e8edf4',
        fontSize: 20,
        color: 'black'
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