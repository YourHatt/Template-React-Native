import BaseService from './BaseService';
import OrdersDTO from '../DataHelper/DTO/OrdersDTO';
import OrdersOTS from '../DataHelper/ObjectToStore/OrdersOTS';

class OrdersService extends BaseService {
    constructor(domain) {
        super(domain)
        this.dto = OrdersDTO;
        this.ots = OrdersOTS;
    }
    
}

export default new OrdersService('api/orders');