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
		const isLoggedIn = true;
		const isAdmin = true; 
		return (
			<div className="topnav">
				<section className="header">
					<div>
						<h3 className="title">UNT Greenlight Projects Portal</h3>
					</div>
					<div className="banner">
						<img className="unt-banner" alt={'University of North Texas logo'} src={require('./unt-banner.svg')} />
					</div>
				</section>
				<nav>
					<div>
						<Link to="/">Home</Link>
						<Link to = "/projects">Projects</Link>
						{!isLoggedIn ? null: <Link to="/AddProject">Add Project</Link>}
						{!isLoggedIn ? <div><Link to="/login">Login</Link> <Link to="/signup">Sign up</Link> </div>: <Link to = "/profile">Profile</Link>}
						{isAdmin && isLoggedIn ? <Link to="/admin">Admin</Link> : null}
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;
