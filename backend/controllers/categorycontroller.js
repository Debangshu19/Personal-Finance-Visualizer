const TransactionModel = require('../models/transactionmodel');

module.exports.getAll = async (req, res) => {
    try{
        const transactions = await TransactionModel.find(); // Fetch all transactions

        const groupedTransactions = transactions.reduce((acc, transaction) => {
            if (!acc[transaction.category]) {
                acc[transaction.category] = [];
            }
            acc[transaction.category].push(transaction);
            return acc;
        }, {});

        res.status(200).json({ success: true, transactions: groupedTransactions });
    }catch(error){
        console.error("Error in getAll function of categoryController:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};