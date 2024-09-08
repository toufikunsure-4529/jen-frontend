import { Account, Client, Databases, ID, Storage } from "appwrite";
import conf from "../conf/conf";

class productServiceDB {
  client = new Client;
  account
  database
  storage
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.account = new Account(this.client)
    this.database = new Databases(this.client)
    this.storage = new Storage(this.client)

  }


  //admin panel add new product backend methods
  async createNewProduct({ title, slug, brand, manufecture, mrpPrice, price, discountPercent, description, warranty, status, deliveryTime, productImageId }) {
    try {

      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductCollectionId,
        slug,
        { title, brand, manufecture, mrpPrice, price, discountPercent, description, warranty, status, deliveryTime, productImageId, slug }
      )
    } catch (error) {
      throw error
    }
  }

  //admin panel upload card product image 
  async uploadProductImage(file) {
    try {
      return await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file)
    } catch (error) {
      throw error
    }
  }


  //get all products
  async getAllProducts() {
    try {
      return await this.database.listDocuments(conf.appwriteDatabaseId, conf.appwriteProductCollectionId, [])
    } catch (error) {
      throw error
    }
  }

  getProductImgPreview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId)
  }


}


const productServiceDBappwrite = new productServiceDB
export default productServiceDBappwrite