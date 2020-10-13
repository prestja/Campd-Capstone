import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Style.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			log: localStorage.getItem("jwtToken")
		};
	}

	render() {
		return (
			<div className="topnav">
				<section className="header">
					<div>
						<h3 className="title">Research and Project Portal</h3>
					</div>
					<div className="banner">
						<img className="unt-banner" alt={'University of North Texas logo'} src={require('./unt-banner.svg')} />
					</div>
				</section>
				<nav>
					<div>
						<Link to="/">Home</Link>
						<Link to="/login">Login</Link>
						<Link to="/signup">Sign up</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/admin">Admin</Link>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;
