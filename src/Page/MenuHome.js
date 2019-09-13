import React, {Component} from 'react';
import Header from './Header.js';
import "../Style/header.css";
class MenuHome extends Component {
	render(){
		return(
			<div>
				<Header />
				<br />
				<h1>
					<center>Selamat Datang di Halaman Home</center>
				</h1>
				<div className="image_header">
					<br />
				</div>
			</div>
		);
	}
}
export default MenuHome;