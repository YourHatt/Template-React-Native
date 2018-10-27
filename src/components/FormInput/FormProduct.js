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
import * as productAction from '../../redux/actions/product';
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TextInput,
    View,
} from 'react-native';
import { PRODUCT_LOADING_STARTED } from '../../redux/actions/product';

class FormProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            status: '',
            unitOfMeasure: '',
            unitPrice: '',
            unitCost: '',
            vatPrice: '',
        }
        this.newData = {
            title: '',
            status: '',
            unitOfMeasure: '',
            unitPrice: '',
            unitCost: '',
            vatPrice: '',
        }
    }
    static navigationOptions = ({ navigation }) => {
        const { itemData } = this.props
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>{itemData ? 'Edit Product' : 'Create Product'}</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },

        }
    }
    componentDidMount() {
        const { itemData } = this.props;
        if (itemData) {
            this.setState({
                title: itemData.title,
                status: itemData.status,
                unitOfMeasure: itemData.unitOfMeasure,
                unitPrice: itemData.unitPrice,
                unitCost: itemData.unitCost,
                vatPrice: itemData.vatPrice,
            })
        }
    }
    onInputChange = () => {
        const { onCreateSubmit, getList } = this.props;
        this.newData.title = this.state.title
        this.newData.status = this.state.status
        this.newData.unitCost = this.state.unitCost
        this.newData.unitPrice = this.state.unitPrice
        this.newData.unitOfMeasure = this.state.unitOfMeasure
        this.newData.vatPrice = this.state.vatPrice
        onCreateSubmit(this.newData)
        getList();

    }
    render() {
        const { itemData } = this.props;
        return (
            <View>
                <Content padder>
                    <Text style={[styles.text, { marginVertical: 10 }]}> Product </Text>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Product </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.title} onChangeText={e => this.setState({ title: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Status </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.status} onChangeText={e => this.setState({ status: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Unit Cost </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.unitCost} onChangeText={e => this.setState({ unitCost: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Unit Of Measure </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.unitOfMeasure} onChangeText={e => this.setState({ unitOfMeasure: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Unit Price </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.unitPrice} onChangeText={e => this.setState({ unitPrice: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> VAT Price </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.vatPrice} onChangeText={e => this.setState({ vatPrice: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Button style={{ backgroundColor: '#24C1A2' }} block onPress={() => { this.onInputChange() }}><Text> {itemData ? 'Save' : 'Add'}</Text></Button>
                </Content>
            </View>
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
    isLoading: state.product.isLoading,

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...productAction
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormProduct);