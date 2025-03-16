import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTransactionStore } from '../store/transactionstore';

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { transactions, editTransaction } = useTransactionStore();
    
    const transaction = transactions.find(t => t._id === id);
    
    const [amount, setAmount] = useState(transaction ? transaction.amount : "");
    const [description, setDescription] = useState(transaction ? transaction.description : "");
    const [category, setCategory] = useState(transaction ? transaction.category : "Food");
    
    useEffect(() => {
        if (transaction) {
            setAmount(transaction.amount);
            setDescription(transaction.description);
            setCategory(transaction.category);
        }
    }, [transaction]);

    const categories = ['Food', 'Transportation', 'Housing', 'Utilities', 'Entertainment', 'Shopping', 'Healthcare', 'Other'];

    const handleSubmit = (e) => {
        e.preventDefault();
        editTransaction(id, { amount, description, category });
        navigate('/'); // Redirect to homepage after editing
    };

    if (!transaction) {
        return <p className="text-center text-red-500">Transaction not found!</p>;
    }

    return (
        <div className="max-w-md my-10 mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Edit Expense</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
                    Update Expense
                </button>
            </form>
        </div>
    );
};

export default EditPage;
