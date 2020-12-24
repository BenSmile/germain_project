import React, { Component } from 'react';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProjectTask } from "../actions/projectTaskAction";
import { Link } from "react-router-dom";

class AddProjectTask extends Component {

    constructor(props) {
        super(props)

        this.state = {
            summary: '',
            acceptanceCriteria: '',
            status: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const newProjectTask = {
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status
        }

        this.props.addProjectTask(newProjectTask, this.props.history)
    }


    render() {

        const { errors } = this.state;
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/" className="btn btn-dark">
                                Back to Board
                                 </Link>
                            <h4 className="display-4 text-center">Add /Update Project Task</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input value={this.state.summary} onChange={this.onChange} type="text" className={`form-control form-control-lg ${errors.summary && "is-invalid"}`} name="summary" placeholder="Project Task summary" />
                                    {
                                        errors.summary && (<div className="invalid-feedback">{errors.summary}</div>)
                                    }
                                </div>
                                <div className="form-group">
                                    <textarea value={this.state.acceptanceCriteria} onChange={this.onChange} className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria"></textarea>
                                </div>
                                <div className="form-group">
                                    <select value={this.state.status} onChange={this.onChange} className="form-control form-control-lg" name="status">
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


AddProjectTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
