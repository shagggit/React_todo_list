import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props;

        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icons">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <li className="fas fa-pen"></li>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <li className="fas fa-trash"></li>
                    </span>
                </div>
            </li>
        )
    }
}
