const BudgetModel = require('../models/budgetmodel');

module.exports.add = async (req, res) => {
    try {
        const { Food, Transportation, Housing, Utilities, Entertainment, Shopping, Healthcare, Other } = req.body;
        const budget = new BudgetModel({ Food, Transportation, Housing, Utilities, Entertainment, Shopping, Healthcare, Other });
        await budget.save();

        res.status(200).json({ success: true, budget });
    } catch (error) {
        console.error("Error in addOrUpdate function of budgetController:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


module.exports.getAll = async(req,res) => {
    try{
        const budgets = await BudgetModel.find();
        res.status(200).json({success: true, budgets});
    }catch(error){
        console.error("Error in getAll function of budgetController:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports.deleteBudget = async (req, res) => {
    try {
        // Find and delete the first (only) budget entry
        const deletedBudget = await BudgetModel.findOneAndDelete();

        if (!deletedBudget) {
            return res.status(404).json({ success: false, message: "No budget entry found to delete" });
        }

        res.status(200).json({ success: true, message: "Budget entry deleted successfully" });
    } catch (error) {
        console.error("Error in deleteBudget function of budgetController:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
