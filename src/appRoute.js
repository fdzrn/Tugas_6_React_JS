import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import MenuMakanan from './Page/MenuMakanan';
import MenuMinuman from './Page/MenuMinuman';
import Kontak from './Page/Kontak';
import MenuHome from './Page/MenuHome';

const AppRoute = () => (
	<BrowserRouter>
		<div>
			<Route path="/" exact component={App} />
			<Route path="/Home" component={MenuHome}/>
			<Route path="/Makanan" component={MenuMakanan}/>
			<Route path="/Minuman" component={MenuMinuman}/>
			<Route path="/Kontak" component={Kontak}/>
		</div>
	</BrowserRouter>
)

export default AppRoute;