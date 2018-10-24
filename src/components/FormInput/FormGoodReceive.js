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
import * as goodReceiveAction from '../../redux/actions/goodReceive';
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TextInput,
    View,
} from 'react-native';

class FormGoodReceive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: '',
            location: '',
            reference: '',
            unitOfMeasure: '',
            qty: '',
            unitCost: '',
            supplier: '',
            lotNumber: '',
        }
        this.newData = {
            product: '',
            location: '',
            reference: '',
            unitOfMeasure: '',
            qty: '',
            unitCost: '',
            supplier: '',
            lotNumber: '',
        }
    }
    componentDidMount() {
        const { itemData } = this.props;
        if (itemData) {
            this.setState({
                id: itemData.id,
                description: itemData.description
            })
        }
    }
    onInputChange = () => {
        const { onCreateSubmit, getList } = this.props;
        this.newData.product = this.state.product
        this.newData.location = this.state.location
        this.newData.reference = this.state.reference
        this.newData.unitOfMeasure = this.state.unitOfMeasure
        this.newData.qty = this.state.qty
        this.newData.unitCost = this.state.unitCost
        this.newData.supplier = this.state.supplier
        this.newData.lotNumber = this.state.lotNumber

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
                            <Text> Product </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.product} onChangeText={e => this.setState({ product: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text> Location </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.location} onChangeText={e => this.setState({ location: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text> Reference </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.reference} onChangeText={e => this.setState({ reference: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text> Unit Of Measure </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.unitOfMeasure} onChangeText={e => this.setState({ unitOfMeasure: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text> QTY </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.qty} onChangeText={e => this.setState({ qty: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text> Unit Cost </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.unitCost} onChangeText={e => this.setState({ unitCost: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text> Supplier </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.supplier} onChangeText={e => this.setState({ supplier: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text> Lot Number </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.lotNumber} onChangeText={e => this.setState({ lotNumber: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Button onPress={() => { this.onInputChange() }}><Text> SUBMIT</Text></Button>
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
    isLoading: state.goodReceive.isLoading,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...goodReceiveAction
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormGoodReceive);