import React, { Component } from "react";
import './Style.css';

class Landing extends Component {
	render() {
		return (
			<div>
				<img className="center" alt={'University of North Texas logo'} src={require('./unt-logo.jpeg')} width="30%" />
				<h1>UNT Greenlight Projects Portal</h1>
				<br />
				<h5 className="center">The Research and Project Portal is a centralized database of all projects and research ideas by UNT students and faculty. <br /> You can search for specific projects, topics, projects held by specific professors or maintained by specific students.</h5>
			</div>
		);
	}
}
export default Landing;
