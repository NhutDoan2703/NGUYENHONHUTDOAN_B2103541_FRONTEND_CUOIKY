import createApiClient from "./http.service";
import axios from "axios";
class GlassesstoresService {
    constructor(baseUrl = "/api/glassesstores") {
        this.api = createApiClient(baseUrl);
}
async getAll() {
    return (await this.api.get("/")).data;
}
async create(data) {
    return(await axios.post("/api/glassesstores/",data)).data;
}
async deleteAll() {
    return (await this.api.delete("/")).data;
}
async get(id) {
    return (await this.api.get(`/user/${id}`)).data;
}

async updateUser(id, data) {
    return (await axios.put(`/api/glassesstores/user/${id}`,data)).data;
}
async update(id, data) {
    return (await axios.put(`/api/glassesstores/home/${id}`, data)).data;
}
async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
}

async createProduct(data){
    return (await axios.post("/api/glassesstores/home/",data)).data;
}

async getAllProduct(){
    return (await this.api.get("/home/")).data;
}

async getProduct(id) {
    return (await this.api.get(`/home/${id}`)).data;
}

async deleteProduct(id) {
    return (await this.api.delete(`/home/${id}`)).data;
}

async addCart(data,id1, id2) {
    return (await axios.post(`/api/glassesstores/home/${id1}/${id2}/product/`,data)).data;
}

async getOneCart(id1, id2) {
    return (await this.api.get(`/home/${id1}/${id2}/product`)).data;
}

async updateCart(id1,id2,data) {
    return (await axios.put(`/api/glassesstores/home/${id1}/${id2}/product`,data)).data
}

async reUpdateCart(id, data) {
    return (await axios.put(`/api/glassesstores/home/${id}/cart`,data)).data;
}

async getAllCart(id) {
    return(await this.api.get(`/home/${id}/cart`)).data;
}

async deleteAllCart(id) {
    return (await this.api.delete(`/home/${id}/cart`)).data;
}

async getCart(id) {
    return (await this.api.get(`/home/cart/${id}`)).data;
}

async deleteCartCount(id,data) {
    return (await axios.put(`/api/glassesstores/home/cart/${id}`,data)).data;
}

async deleteCart(id) {
    return (await this.api.delete(`/home/cart/${id}`)).data;
}

async deleteCartbyProductId(id) {
    return (await this.api.delete(`/cart/${id}`)).data;
}
}
export default new GlassesstoresService();