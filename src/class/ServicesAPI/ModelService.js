import BaseService from './BaseService';
import ModelsDTO from '../DataHelper/DTO/ModelsDTO';
import ModelsOTS from '../DataHelper/ObjectToStore/ModelsOTS';

class ModelsService extends BaseService {
    constructor(domain) {
        super(domain)
        this.dto = ModelsDTO;
        this.ots = ModelsOTS;
    }
    
}

export default new ModelsService('api/models');