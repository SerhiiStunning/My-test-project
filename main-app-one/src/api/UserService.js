import axios from "axios";

export default class UserService {
    // Вказується що функція 'static'(статична) щоб можна було викликати її без створення екземпляра класа. 
    static async getUsers() {
        return axios.get('./users.json')
    }
}