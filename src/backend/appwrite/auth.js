import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";


class AuthService {
  client = new Client();
  account
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.account = new Account(this.client)
  }


  //create new user method
  async createAccount({ name, email, password }) {
    try {
      const createUser = await this.account.create(ID.unique(), email, password, name);
      return createUser;
    } catch (error) {
      console.log("Error: createAccount method auth.js:", error);
      throw error; // Re-throw the error for further handling
    }
  }


}

const authServiceAppwrite = new AuthService
export default authServiceAppwrite