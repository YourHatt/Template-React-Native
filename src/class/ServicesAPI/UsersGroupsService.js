import BaseService from './BaseService';
import UsersGroupsDTO from '../DataHelper/DTO/UsersGroupsDTO';
import UsersGroupsOTS from '../DataHelper/ObjectToStore/UsersGroupsOTS';

class GroupsService extends BaseService {
    constructor(domain) {
        super(domain)
        this.dto = UsersGroupsDTO;
        this.ots = UsersGroupsOTS;
    }
}

export default new GroupsService('api/groups/users');