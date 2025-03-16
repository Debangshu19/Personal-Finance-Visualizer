const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
    Food: {
        type: Number,
        required: [true, 'food is required']
    },
    Transportation: {
        type: Number,
        required: [true, 'transportation is required']
    },
    Housing: {
        type: Number,
        required: [true, 'housing is required']
    },
    Utilities: {
        type: Number,
        required: [true, 'utilities is required']
    },
    Entertainment: {
        type: Number,
        required: [true, 'entertainment is required']
    },
    Shopping: {
        type: Number,
        required: [true, 'shopping is required']
    },
    Healthcare: {
        type: Number,
        required: [true, 'healthcare is required']
    },
    Other: {
        type: Number,
        required: [true, 'other is required']
    },
},  { 
        timestamps: true 
    }
);

const Budget = mongoose.model("Budget", BudgetSchema);
module.exports = Budget;