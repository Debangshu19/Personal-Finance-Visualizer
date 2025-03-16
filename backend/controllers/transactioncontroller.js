const TransactionModel = require('../models/transactionmodel');

module.exports.add = async (req, res) => {
    try{
        const { amount, date, description, category } = req.body;
        const newTransaction = new TransactionModel({ amount, date, description, category });
        await newTransaction.save();
        res.status(201).json({success: true, newTransaction});
    }catch(error){
        console.log("Error in add function of transactioncontroller:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports.getAll = async (req, res) => {
    try{
        const transactions = await TransactionModel.find();
        res.status(200).json({success: true, transactions});
    }catch(error){
        console.log("Error in getAll function of transactioncontroller:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, date, description, category } = req.body;

        const updatedTransaction = await TransactionModel.findByIdAndUpdate(
            id,
            { amount, date, description, category },
            { new: true, runValidators: true }
        );

        if (!updatedTransaction) {
            return res.status(404).json({ success: false, message: "Transaction not found" });
        }

        res.status(200).json({ success: true, transaction: updatedTransaction });
    } catch (error) {
        console.error("Error in update function of transactionController:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


module.exports.delete = async (req, res) => {
    try{
        const { id } = req.params;
        await TransactionModel.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Transaction deleted successfully"});
    }catch(error){
        console.log("Error in delete function of transactioncontroller:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
