import React, { useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useCategoryStore } from "../store/categorystore";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF6384", "#36A2EB", "#FFCE56"];

const CategoryPieChart = () => {
    const { categories, getCategories } = useCategoryStore();

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    console.log(categories);

    return (
        <div className="flex flex-wrap justify-center gap-10 mt-6">
            {Object.entries(categories).map(([category, items]) => {
                // Create data for this category's pie chart
                const data = items.map((item, index) => ({
                    name: item.description, // Item description as label
                    value: item.amount, // Amount spent on this item
                    color: COLORS[index % COLORS.length],
                }));

                return (
                    <div key={category} className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">{category}</h2>
                        <PieChart width={300} height={300}>
                            <Pie
                                data={data}
                                cx={150}
                                cy={150}
                                outerRadius={100}
                                dataKey="value"
                                label
                            >
                                {data.map((entry, idx) => (
                                    <Cell key={`cell-${idx}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend wrapperStyle={{ marginTop: 10, display: "flex", flexDirection: "column", alignItems: "center" }} />
                        </PieChart>
                    </div>
                );
            })}
        </div>
    );
};

export default CategoryPieChart;
