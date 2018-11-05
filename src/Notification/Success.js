import {
    ToastAndroid,
    Platform
} from 'react-native';

class Success {
    constructor(message) {
        this.message = message;
    }

    notify() {
        if (Platform.OS === 'android') ToastAndroid.show(this.message, ToastAndroid.SHORT);  
    }
}



export default Success;