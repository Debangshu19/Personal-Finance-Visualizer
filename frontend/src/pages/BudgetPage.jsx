import React, { useState, useEffect } from "react";
import { useBudgetStore } from "../store/budgetstore";
import BudgetVsActualChart from "../components/BudgetVsActualChart";

const BudgetPage = () => {
    const [Food, setFood] = useState("");
    const [Transportation, setTransportation] = useState("");
    const [Housing, setHousing] = useState("");
    const [Utilities, setUtilities] = useState("");
    const [Entertainment, setEntertainment] = useState("");
    const [Shopping, setShopping] = useState("");
    const [Healthcare, setHealthcare] = useState("");
    const [Other, setOther] = useState("");

    const { getBudget, addBudget, budgets, deleteBudget } = useBudgetStore();

    useEffect(() => {
        getBudget();
    }, []);
    const budgetData = budgets.length > 0 ? budgets[0] : {}; // Ensure budgetData is not undefined

    const handleSubmit = (e) => {
        e.preventDefault();
        addBudget({ Food, Transportation, Housing, Utilities, Entertainment, Shopping, Healthcare, Other });
        setFood("");
        setTransportation("");
        setHousing("");
        setUtilities("");
        setEntertainment("");
        setShopping("");
        setHealthcare("");
        setOther("");
    };
    
    return (
        <>
        <div className="flex justify-center items-start gap-10 p-8">
            {/* Left: Budget Form */}
            <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Budget</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Food</label>
                        <input
                            type="number"
                            placeholder="Enter food budget"
                            value={Food}
                            onChange={(e) => setFood(e.target.value)}
                            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Transportation</label>
                        <input
                            type="number"
                            placeholder="Enter transportation budget"
                            value={Transportation}
                            onChange={(e) => setTransportation(e.target.value)}
                            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Housing</label>
                        <input
                            type="number"
                            placeholder="Enter housing budget"
                            value={Housing}
                            onChange={(e) => setHousing(e.target.value)}
                            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Utilities</label>
                        <input
                            type="number"
                            placeholder="Enter utilities budget"
                            value={Utilities}
                            onChange={(e) => setUtilities(e.target.value)}
                            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Entertainment</label>
                        <input
                            type="number"
                            placeholder="Enter entertainment budget"
                            value={Entertainment}
                            onChange={(e) => setEntertainment(e.target.value)}
                            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Shopping</label>
                        <input
                            type="number"
                            placeholder="Enter shopping budget"
                            value={Shopping}
                            onChange={(e) => setShopping(e.target.value)}
                            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Healthcare</label>
                        <input
                            type="number"
                            placeholder="Enter healthcare budget"
                            value={Healthcare}
                            onChange={(e) => setHealthcare(e.target.value)}
                            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Other</label>
                        <input
                            type="number"
                            placeholder="Enter other budget"
                            value={Other}
                            onChange={(e) => setOther(e.target.value)}
                            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                        Make/Change Budget
                    </button>
                </form>
            </div>

            {/* Right: Budget Display */}
            <div className="w-1/2 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Current Budget</h2>
                <ul className="space-y-2">
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-600">Food</span>
                        <span className="text-gray-800 font-semibold">${budgetData.Food}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-600">Transportation</span>
                        <span className="text-gray-800 font-semibold">${budgetData.Transportation}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-600">Housing</span>
                        <span className="text-gray-800 font-semibold">${budgetData.Housing}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-600">Utilities</span>
                        <span className="text-gray-800 font-semibold">${budgetData.Utilities}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-600">Entertainment</span>
                        <span className="text-gray-800 font-semibold">${budgetData.Entertainment}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-600">Shopping</span>
                        <span className="text-gray-800 font-semibold">${budgetData.Shopping}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-600">Healthcare</span>
                        <span className="text-gray-800 font-semibold">${budgetData.Healthcare}</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                        <span className="font-medium text-gray-600">Other</span>
                        <span className="text-gray-800 font-semibold">${budgetData.Other}</span>
                    </li>
                </ul>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => deleteBudget()} 
                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                    >
                        Delete Budget
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full">
                <BudgetVsActualChart />
        </div>
        </>
    );
};

export default BudgetPage;
