import axios from 'axios'

const API_URL = 'http://localhost:8081'

export default {
    // Get all books
    getAll() {
        return axios.get(`${API_URL}/books`)
    },

    // Get one book
    getOne(id) {
        return axios.get(`${API_URL}/book/${id}`)
    },

    // Create book
    create(data) {
        return axios.post(`${API_URL}/book`, data)
    },

    // Update book
    update(id, data) {
        return axios.put(`${API_URL}/book/${id}`, data)
    },

    // Delete book
    delete(id) {
        return axios.delete(`${API_URL}/book/${id}`)
    }
}