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
                    <Card>
                        <CardItem>
                            <Text> ExpenseId </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.id} onChangeText={e => this.setState({ id: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <Text> description </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.description} onChangeText={e => this.setState({ description: e })} style={styles.input} rounded underlineColorAndroid='rgba(0,0,0,0.0)' />
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