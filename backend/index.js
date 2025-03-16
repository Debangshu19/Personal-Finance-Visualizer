const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const connectToDb = require('./db/connect');
const transactionRoutes = require('./routes/transactionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const budgetRoutes = require('./routes/budgetRoutes');

connectToDb();
const corsOptions = {
    origin: 'https://personal-finance-visualizer-opal.vercel.app', // New frontend URL
    credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions)); // Apply CORS middleware
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/transaction", transactionRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/budget", budgetRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
