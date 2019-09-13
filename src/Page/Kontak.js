import React, {Component} from 'react';
import Header from './Header';
import '../Style/kontak.css'

class Kontak extends Component{
	render(){
		return(
			<div id="kontak_bg">
				<Header/>
				<div className="kontak">
					<h2>
						Jl. Swadaya IV,Pd.Ranggon,Cipayung,Kota Jakarta Timur,Daerah Khusus Ibukota Jakarta Kode pos :13860
					</h2>
					<h5> No Telpon : 08123456789 </h5>
				</div>
			</div>
		);
	}
}
export default Kontak;