import { HttpClient } from "../HttpClient";

class AuthService extends HttpClient {
    constructor() {
        super("https://localhost:44313/api/Auth");

    }


    register(body){
        return this.post("register", body);

    }
}

export const authService = new AuthService();