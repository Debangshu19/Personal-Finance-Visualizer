import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
import CategoryPage from './pages/CategoryPage'
import BudgetPage from './pages/BudgetPage'
import {Navigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import {useTransactionStore} from './store/transactionstore'
import {useCategoryStore} from './store/categorystore'
import {Loader} from 'lucide-react'
import {useEffect} from 'react'

const App = () => {
  const {isTransactionLoading, isTransactionAdding, isTransactionDeleting, isTransactionEditing, getTransactions} = useTransactionStore();
  const {isCategoryLoading} = useCategoryStore();
  useEffect(() => {
    getTransactions();
  }, []);
  
  if (isTransactionLoading || isTransactionAdding || isTransactionDeleting || isTransactionEditing) {
    return (
			<div className='h-screen'>
				<div className='flex justify-center items-center bg-white h-full'>
					<p className='font-bold mx-10'>Wait Data is being Fetched</p>
					<Loader className='animate-spin text-black size-10' />
				</div>
			</div>
		);
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path='/budget' element={<BudgetPage />} />
        <Route path='/edit/:id' element={<EditPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
