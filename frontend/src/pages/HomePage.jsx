import React, { useState, useEffect } from 'react';
import { useTransactionStore } from '../store/transactionstore';
import {Link} from 'react-router-dom';

const HomePage = () => {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Food");
    const { getTransactions, transactions, addTransaction, deleteTransaction} = useTransactionStore();

    const categories = ['Food', 'Transportation', 'Housing', 'Utilities', 'Entertainment', 'Shopping', 'Healthcare', 'Other'];

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({ amount, description, category });
        setAmount("");
        setDescription("");
        setCategory("Food");
    };
    console.log(transactions);

    return (
        <>
        <div className="max-w-md my-10 mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Add Expense</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount"
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
                        placeholder="Enter description"
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
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                    Add Expense
                </button>
            </form>
        </div>
            {/* Transactions Table */}
            <div className="mt-6 mx-auto px-10 py-5">
                <h2 className="text-xl font-semibold text-center text-gray-700">Transaction List</h2>
                <table className="w-full mt-4 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Amount($)</th>
                            <th className="border p-2">Description</th>
                            <th className="border p-2">Category</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className="text-center border">
                                <td className="border p-2">{transaction.amount}</td>
                                <td className="border p-2">{transaction.description}</td>
                                <td className="border p-2">{transaction.category}</td>
                                <td className="border p-2">{new Date(transaction.date).toLocaleDateString()}</td>
                                <td className="border p-2 flex justify-center gap-2">
                                    <Link to={`/edit/${transaction._id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</Link>
                                    <button onClick={() => deleteTransaction(transaction._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default HomePage;
