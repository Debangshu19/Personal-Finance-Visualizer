import {create} from 'zustand';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const useCategoryStore = create ((set, get) => ({
    isCategoryLoading: false,
    categories: [],
    getCategories: async () => {
        set({isCategoryLoading: true});
        try {
            const response = await axios.get('http://localhost:5000/api/category', {withCredentials: true});
            set({categories: response.data.transactions, isCategoryLoading: false});    
        } catch (error) {
            toast.error('Failed to fetch categories');
        }
        set({isCategoryLoading: false});
    },
}));