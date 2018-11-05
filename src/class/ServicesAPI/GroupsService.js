import BaseService from './BaseService';
import GroupsDTO from '../DataHelper/DTO/GroupsDTO';
import GroupsOTS from '../DataHelper/ObjectToStore/GroupsOTS';


class GroupsService extends BaseService {
    constructor(domain) {
        super(domain)
        this.dto = GroupsDTO;
        this.ots = GroupsOTS;
    }
}

export default new GroupsService('api/groups');