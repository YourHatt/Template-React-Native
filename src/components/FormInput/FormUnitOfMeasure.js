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
import * as unitOfMeasureAction from '../../redux/actions/unitOfMeasure';
import {
    ScrollView,
    StyleSheet,
    Dimensions,
    TextInput,
    View,
} from 'react-native';
import { PRODUCT_LOADING_STARTED } from '../../redux/actions/unitOfMeasure';

class FormUnitOfMeasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            description: '',
        }
        this.newData = {
            id: '',
            description: ''
        }
    }
    static navigationOptions = ({ navigation }) => {
        const { itemData } = this.props
        return {
            headerTitle: <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>{itemData ? 'Edit Unit Of Measure' : 'Create Unit Of Measure'}</Text>,
            headerStyle: {
                backgroundColor: '#1E8DAB',
            },

        }
    }
    componentDidMount() {
        const { itemData } = this.props;
        if (itemData) {
            this.setState({
                id: itemData.id,
                description: itemData.description,
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
                    <Text style={[styles.text, { marginVertical: 10 }]}> Unit Of Measure </Text>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Id </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.id} onChangeText={e => this.setState({ id: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardForm}>
                        <CardItem>
                            <Text style={styles.text}> Description </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <TextInput value={this.state.description} onChangeText={e => this.setState({ description: e })} style={styles.input} underlineColorAndroid='rgba(0,0,0,0.0)' />
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
    isLoading: state.unitOfMeasure.isLoading,

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...unitOfMeasureAction
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormUnitOfMeasure);