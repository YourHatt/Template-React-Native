import {
    ToastAndroid
} from 'react-native';

class Success {
    constructor(message) {
        this.message = message;
    }

    notify() {
        ToastAndroid.show(this.message, ToastAndroid.SHORT);
    }
}



export default Success;