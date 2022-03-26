import Header from './components/Header'
import Form from './components/Form'
import ItemList from './components/ItemList'
import { DataProvider } from './context/DataContext' 
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemPage from './pages/ItemPage';

function App() {
	return (
		<>
       <Router>
			<Header />
			<DataProvider>
			 <Routes>
				<Route path = '/' element ={<Home />} />
				<Route path = '/about' element={<About />} />
				<Route path = '/items/:id' element={<ItemPage />} />
				<Route path = '*' element={<NotFound />} />
			 </Routes>
			</DataProvider>
			</Router>
		</>
	)
}

export default App
