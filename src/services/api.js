import axios from 'axios';

const API_BASE_URL = 'http://13.203.232.154:5001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const productAPI = {
    // GET
    getAllProducts: async () => {
        try {
            const response = await api.get('/getproduct');
            return response.data; 
        } catch (error) {
            console.error("Error fetching all products:", error);
            throw error;
        }
    },

    // POST
    createProduct: async (productData) => {
        try {
            const data = {
                name: productData.name,
                description: productData.description,
                price: parseFloat(productData.price),
                stock: parseInt(productData.stock),
                category: productData.category,
                image: typeof productData.image === 'string' ? productData.image : ''
            };
            const response = await api.post('/postProduct', data);
            return response.data;
        } catch (error) {
            console.error("Error creating product:", error);
            throw error.response?.data?.error || new Error("Failed to create product");
        }
    },

    // PUT
    updateProduct: async (id, productData) => {
        try {
            const data = {
                name: productData.name,
                description: productData.description,
                price: parseFloat(productData.price),
                stock: parseInt(productData.stock),
                category: productData.category,
                image: typeof productData.image === 'string' ? productData.image : ''
            };
            const response = await api.put(`/updateProduct/${id}`, data);
            return response.data;
        } catch (error) {
            console.error(`Error updating product ID ${id}:`, error);
            throw error.response?.data?.error || new Error("Failed to update product");
        }
    },

    // DELETE
    deleteProduct: async (id) => {
        try {
            const response = await api.delete(`/deleteProduct/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting product ID ${id}:`, error);
            throw error.response?.data?.error || new Error("Failed to delete product");
        }
    },
};

export default api;
