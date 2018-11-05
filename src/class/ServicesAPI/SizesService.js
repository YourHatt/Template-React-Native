import BaseService from './BaseService';
import SizesDTO from '../DataHelper/DTO/SizesDTO';
import SizesOTS from '../DataHelper/ObjectToStore/SizesOTS';

class SizesService extends BaseService {
    constructor(domain) {
        super(domain)
        this.dto = SizesDTO;
        this.ots = SizesOTS;
    }
}

export default new SizesService('api/sizes');