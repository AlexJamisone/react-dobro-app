import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import YandexReviews from './routes/YandexReviews/YandexReviews';
import Tips from './routes/Tips/Tips';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App/>}/>
			<Route path='/yandex' element={<YandexReviews/>}/>
			<Route path='/tips' element={<Tips/>}/>
		</Routes>
	</BrowserRouter>
);
