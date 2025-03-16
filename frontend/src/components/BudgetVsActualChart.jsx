import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useBudgetStore } from "../store/budgetstore";
import { useCategoryStore } from "../store/categorystore";

const BudgetVsActualChart = () => {
    const { budgets, getBudget } = useBudgetStore();
    const { categories, getCategories } = useCategoryStore();
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        getBudget();
        getCategories();
    }, []);

    console.log("categories:", categories);

    useEffect(() => {
        if (budgets.length > 0 && Object.keys(categories).length > 0) {
            console.log("Budgets:", budgets);
            console.log("Categories:", categories);
    
            // Extract budgeted categories from the first budget entry
            const budgetData = budgets[0] || {}; 
            console.log("Budget Data:", budgetData);
    
            // Process each category present in the budget
            const formattedData = Object.keys(budgetData)
            .filter(category => categories.hasOwnProperty(category)) // Exclude non-category fields
            .map((category) => {
                console.log(`Processing Category: ${category}`);

                // Sum actual spending from categories object
                let total = 0;
                const arr = categories[category] || []; // Ensure it's an array
                console.log("Array:", arr);

                // Iterate through the array properly
                for (const item of arr) {
                    total += item.amount || 0; // Ensure amount exists
                }

                console.log(`Actual Amount for ${category}:`, total);

                // Get budgeted amount directly from budgets[0]
                const budgetedAmount = Number(budgetData[category]) || 0;

                console.log(`Budgeted Amount for ${category}:`, budgetedAmount);

                return {
                    category,
                    budgeted: budgetedAmount,
                    actual: total,
                };
            });

    
            console.log("Formatted Data:", formattedData);
            setChartData(formattedData);
        }
    }, [budgets, categories]);
    
    
    

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Budget vs Actual</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="budgeted" fill="#8884d8" name="Budgeted Amount" />
                    <Bar dataKey="actual" fill="#82ca9d" name="Actual Amount" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BudgetVsActualChart;
