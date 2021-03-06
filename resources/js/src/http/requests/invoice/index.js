import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`invoice${filters}`)
    },
    getRevenue(id) {
        return axios.get(`revenue/${id}`)
    },

    view(id) {
        return axios.get(`invoice/${id}`)
    },

    delete(id) {
        return axios.delete(`invoice/${id}`)
    }
}
