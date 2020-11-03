// layout/EditProject.js

import React, { Component } from 'react';
import UpdateProject from '../../containers/UpdateProject';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

class EditProject extends Component{
	render() {
		return (
			<div >
				<div >
					<div >
						<UpdateProject />
					</div>
				</div>
			</div>
		);
	}
}

export default EditProject;