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
      throw error; // Re-throw the error for further handling
    }
  }

  //login user method
  async createSessionLogin({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(email, password)
      return session
    } catch (error) {
      throw error; // Re-throw the error for further handling
    }
  }

  //Get Current active login User Details
  async getCurrentUser() {
    try {
      const currentUser = await this.account.get()
      return currentUser
    } catch (error) {
      throw error;
    }
  }


  //logout total session
  async logoutSession() {
    try {
      const session = await this.account.deleteSessions()
      return session

    } catch (error) {
      throw error;
    }
  }


}

const authServiceAppwrite = new AuthService
export default authServiceAppwrite