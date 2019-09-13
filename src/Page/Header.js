import React, {Component} from 'react';
import "../Style/header.css";
import {Link} from "react-router-dom";

class Header extends Component{
	render(){
		return(
			<div id="head">
				<table style={{ width: "100%" }} >
					<tbody>
						<tr>
							<center>
								<td>
									<h2>
										<Link to="/Home" img="/Home" className="link">
										Home  
										</Link>
									</h2>
								</td>
								<td>
									<h2>
										<Link to="/Makanan" img="/Makanan" className="link">
										Makanan 
										</Link>
									</h2>
								</td>
								<td>
									<h2>
										<Link to="/Minuman" img="/Minuman" className="link">
										Minuman 
										</Link>
									</h2>
								</td>
								<td>
									<h2>
										<Link to="/Kontak" img="/Kontak" className="link">
										Kontak 
										</Link>
									</h2>
								</td>
							</center>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}


export default Header;