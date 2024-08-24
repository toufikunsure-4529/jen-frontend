import { Account, Client, ID } from "appwrite";
import config from "../config/Config";


class AuthService {
  client = new Client();
  account
  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)
    this.account = new Account(this.client) // when constructor call new object method used to set end point and project id auto metic save
  }


  //create new user method
  async createAccount({ name, email, password, mobileNo }) {
    try {
      const createUser = await this.account.create(ID.unique(), name, email, password, mobileNo)
      return createUser;
    } catch (error) {
      console.log("Error: createAccount method auth.js:", error)
    }
  }

}