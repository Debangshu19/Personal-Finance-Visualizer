const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
        default: Date.now
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    category: {
        type: String,
        required: true,
        enum: ['Food', 'Transportation', 'Housing', 'Utilities', 'Entertainment', 'Shopping', 'Healthcare', 'Other']
    }
},  {
        timestamps: true
    }
);

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;