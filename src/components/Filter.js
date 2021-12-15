import React, { Component } from 'react'

export default class Filter extends Component {
	render() {
		return (
			<div>
			<div className='filter'>{this.props.count} Products
			  <div className='filter-sort'>order{""} 
				<select value={this.props.sort} onChange={this.props.sortProducts}>
				<option >Latest</option>
				<option value="Lowest">Lowest</option>
				<option value="Highest">Highest</option>
				</select></div>
				<div className='filter-size'>Filter
				  <select value={this.props.size} onChange={this.props.filterProducts}>
					 <option >All</option>
					 <option value="XS">XS</option>
					 <option value="S">S</option>
					 <option value="L">L</option>
					 <option value="XL">XL</option>
					 <option value="XXL">XXL</option>
				
					</select>
				</div> 
				</div>
			</div>
		)
	}
}
