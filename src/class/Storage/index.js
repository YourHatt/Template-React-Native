import { AsyncStorage } from "react-native";

export default class Storage {
    constructor() {

    }

    async isToken() {
        return await this.getToken() ? true: false;
    }

    async saveToken(token) {
        await AsyncStorage.setItem("token", JSON.stringify(token));
    }

    async saveCurrentUser(user) {
        await AsyncStorage.setItem("currentUser", JSON.stringify(user));
    }

    async getToken() {
        return JSON.parse(await AsyncStorage.getItem("token"));
    }

    async getCurrentUser() {
        return JSON.parse(await AsyncStorage.getItem("currentUser"));
    }

    async removeStorage() {
        await AsyncStorage.clear();
    }
}