import {create} from 'zustand';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const useBudgetStore = create ((set, get) => ({
    isBudgetLoading: false,
    isBudgetAdding: false,
    isBudgetDeleting: false,
    budgets: [],

    getBudget: async () => {
        set({isBudgetLoading: true});
        try {
            const response = await axios.get('http://localhost:5000/api/budget', {withCredentials: true});
            set({budgets: response.data.budgets});
        } catch (error) {
            toast.error('Failed to fetch Budgets');
        }
        set({isBudgetLoading: false});
    },
    addBudget: async(data) => {
        set({isBudgetAdding: true});
        try {
            const response = await axios.post('http://localhost:5000/api/budget/add', data, {withCredentials: true});
            set({budgets: [...get().budgets, response.data.budget]});
            toast.success('Budget added successfully');
        } catch (error) {
            toast.error('Failed to add Budget');
        }
        set({isBudgetAdding: false});
    },
    deleteBudget: async() => {
        set({isBudgetDeleting: true});
        try {
            await axios.delete(`http://localhost:5000/api/budget/delete`, {withCredentials: true});
            set({budgets: []});
            toast.success('Budget deleted successfully');
        } catch (error) {
            toast.error('Failed to delete Budget');
        }
        set({isBudgetDeleting: false});
    },
}));