import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from '../redux/actions/login';
import FirebaseHelper from '../config/firebase'

class Model {

    constructor() {
        this.firebase = FirebaseHelper.getFirebase();
    }

    create = async (data) => {
        try {
            this.db = this.firebase.firestore();
            this.db.settings({ timestampsInSnapshots: true });
            let query = {
                email: data.email,
                pin: data.pinValue,
                name: data.name,
                tel: data.tel,
                role: this.db.doc('/roles/pgx3GeXMfXQABzcJROld'),
                share: '0',
            }
            return await this.db.collection('employees').add(query) ? true : false
        } catch (error) {
            console.log(error);
            return await false;
        }
    }
    getData = async (dataKey) => {
        try {
            this.db = this.firebase.firestore();
            this.db.settings({ timestampsInSnapshots: true });
            return await this.db.collection(dataKey).get().then(snap => {
                let data = [];
                snap.forEach(function (doc) {
                    data.push(doc.data())
                });
                return data;
            })
        } catch (ex) {
            // console.log(ex)
            return [];
        }
    }
    createProduct = async (data) => {
        try {
            this.db = this.firebase.firestore();
            this.db.settings({ timestampsInSnapshots: true });
            let query = {
                status: data.status,
                title: data.title,
                unitCost: data.unitCost,
                unitOfMeasure: data.unitOfMeasure,
                unitPrice: data.unitPrice,
                vatPrice: data.vatPrice,
            }
            return await this.db.collection('products').add(query) ? true : false
        } catch (error) {
            console.log(error);
            return await false;
        }
    }
    createMember = async (data) => {
        try {
            this.db = this.firebase.firestore();
            this.db.settings({ timestampsInSnapshots: true });
            let query = {
                name: data.name,
                address: data.address,
                tel: data.tel,
                numberOfShares: data.numberOfShares,
                role: this.db.doc('/roles/pgx3GeXMfXQABzcJROld')
            }
            return await this.db.collection('members').add(query) ? true : false
        } catch (error) {
            console.log(error);
            return await false;
        }
    }
    createLocation = async (data) => {
        try {
            this.db = this.firebase.firestore();
            this.db.settings({ timestampsInSnapshots: true });
            let query = {
                id:data.id,
                description:data.description
            }
            return await this.db.collection('locations').add(query) ? true : false
        } catch (error) {
            console.log(error);
            return await false;
        }
    }
    createUnitOfMeasure = async (data) => {
        try {
            this.db = this.firebase.firestore();
            this.db.settings({ timestampsInSnapshots: true });
            let query = {
                id:data.id,
                description:data.description
            }
            return await this.db.collection('unitOfMeasures').add(query) ? true : false
        } catch (error) {
            console.log(error);
            return await false;
        }
    }
    createExpense = async (data) => {
        try {
            this.db = this.firebase.firestore();
            this.db.settings({ timestampsInSnapshots: true });
            let query = {
                id:data.id,
                description:data.description
            }
            return await this.db.collection('expenses').add(query) ? true : false
        } catch (error) {
            console.log(error);
            return await false;
        }
    }

}
export default Model