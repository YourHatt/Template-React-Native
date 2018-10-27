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
import * as expenseAction from '../../redux/actions/expense';
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TextInput,
    View,
} from 'react-native';

class FormExpense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            description: ''
        }
        this.newData = {
            id: '',
            description: ''
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
        this.newData.id = this.state.id
        this.newData.description = this.state.description
        onCreateSubmit(this.newData)
        getList();

    }
    render() {
        const { itemData } = this.props;
        return (
            <View>
                <Content padder>
                    <Text style={[styles.text, { marginVertical: 10 }]}> Expense </Text>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> ExpenseId </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.id} onChangeText={e => this.setState({ id: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> description </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.description} onChangeText={e => this.setState({ description: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
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
    isLoading: state.expense.isLoading,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...expenseAction
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);