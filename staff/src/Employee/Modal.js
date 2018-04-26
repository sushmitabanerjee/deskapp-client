import React, { Component } from "react";

class EmployeeModal extends Component {

	constructor(props) {
		super(props);
		this.state = props.student;
	}

    componentWillReceiveProps(props) {
		if (props.student === null) {

			// Blank state
			this.setState({
				id: "",
				firstName: "",
				lastName: "",
				position: "",
				email: "",
				phoneNb: ""
			});

		} else {
            this.setState(props.student);
		}
    }

    handleChange(field) {
		return event => {
			const state = {};
			state[field] = event.target.value;
			this.setState(state);
		}
	}

	render() {
		return (
			<div id="employee-modal" className="modal-box hide">
				<div className="modal">
					<span className="close"></span>
					<div className="modal-header">Add / Edit Employee</div>
					<div className="modal-body">
						<form className="form">
							<div className="form-item">
								<label>Student ID <input type="text" onChange={this.handleChange("id").bind(this)} value={this.state.id}></input></label>
							</div>
							<div className="form-item">
								<label>First Name <input type="text" onChange={this.handleChange("firstName").bind(this)} value={this.state.firstName}></input></label>
							</div>
							<div className="form-item">
								<label>Last Name <input type="text" onChange={this.handleChange("lastName").bind(this)} value={this.state.lastName}></input></label>
							</div>
							<div className="form-item">
								<label>Position
									<select value={this.state.position} onChange={this.handleChange("position").bind(this)}>
										<option value="DA">Desk Attendant</option>
										<option value="RA">Resident Assistant</option>
									</select>
								</label>
							</div>
							<div className="form-item">
								<label>Email <input type="text" onChange={this.handleChange("email").bind(this)} value={this.state.email}></input></label>
							</div>
							<div className="form-item">
								<label>Phone Number <input type="text" onChange={this.handleChange("phoneNb").bind(this)} value={this.state.phoneNb}></input></label>
							</div>
							<button>Save</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default EmployeeModal;