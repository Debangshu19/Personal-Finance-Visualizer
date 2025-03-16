import {create} from 'zustand';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const useTransactionStore = create ((set, get) => ({
    isTransactionLoading: false,
    isTransactionAdding: false,
    isTransactionDeleting: false,
    isTransactionEditing: false,
    transactions: [],

    getTransactions: async () => {
        set({isTransactionLoading: true});
        try {
            const response = await axios.get('https://personal-finance-visualizer-i4xy.onrender.com/api/transaction', {withCredentials: true});
            set({transactions: response.data.transactions});
        } catch (error) {
            toast.error('Failed to fetch transactions');
        }
        set({isTransactionLoading: false});
    },
    addTransaction: async(data) => {
        set({isTransactionAdding: true});
        try {
            const response = await axios.post('https://personal-finance-visualizer-i4xy.onrender.com/api/transaction/add', data, {withCredentials: true});
            set({transactions: [...get().transactions, response.data.newTransaction]});
            toast.success('Transaction added successfully');
        } catch (error) {
            toast.error('Failed to add transaction');
        }
        set({isTransactionAdding: false});
    },
    deleteTransaction: async(id) => {
        set({isTransactionDeleting: true});
        try {
            await axios.delete(`https://personal-finance-visualizer-i4xy.onrender.com/api/transaction/${id}`, {withCredentials: true});
            set({transactions: get().transactions.filter(transaction => transaction._id !== id)});
            toast.success('Transaction deleted successfully');
        } catch (error) {
            toast.error('Failed to delete transaction');
        }
        set({isTransactionDeleting: false});
    },
    editTransaction: async(id, data) => {
        set({isTransactionEditing: true});
        try {
            const response = await axios.patch(`https://personal-finance-visualizer-i4xy.onrender.com/api/transaction/${id}`, data, {withCredentials: true});
            set({transactions: get().transactions.map(transaction => transaction._id === id ? response.data.transaction : transaction)});
            toast.success('Transaction updated successfully');
        } catch (error) {
            toast.error('Failed to update transaction');
        }
        set({isTransactionEditing: false});
    }
}));
