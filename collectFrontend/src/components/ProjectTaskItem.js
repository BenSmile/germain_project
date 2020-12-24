import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProjectTask } from "../actions/projectTaskAction";

class ProjectTaskItem extends Component {


    deleteItem(pt_id){
        this.props.deleteProjectTask(pt_id);
    }
    render() {

        const {project_task} = this.props
        return (
            <div className="card mb-1 bg-light">

            <div className="card-header text-primary">
                ID: {project_task.id}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{project_task.summary}</h5>
                <p className="card-text text-truncate ">
                    {project_task.acceptanceCriteria}
                </p>
                <Link to={`/updateProjectTask/${project_task.id}`} className="btn btn-primary">
                    View / Update
                </Link>

                <button onClick={this.deleteItem.bind(this, project_task.id)} className="btn btn-danger ml-4">
                    Delete
                </button>
            </div>
        </div>
        )
    }
}



ProjectTaskItem.propTypes={
    deleteProjectTask:PropTypes.func.isRequired
}

export default connect(null, {deleteProjectTask})(ProjectTaskItem)
