import Error from './Error';
import Success from './Success';

class Notification {
    

    success(message) {
        const success = new Success(message);
        success.notify();
    }

    error(messageErr) {
        const error = new Error();
        error.setErrorMessage(messageErr)
        error.notify();
    }
}


export default new Notification();