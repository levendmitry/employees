import { Component } from 'react';

import './employees-item.css';

class EmployeesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isIncrease: false,
            isLike: false
        }
    }
    //Toggle increase of salary(печенька) for employee in the list
    toggleIncrease = () => {
        this.setState(({isIncrease}) => ({
            isIncrease: !isIncrease
        }))
    }
    //Toggle rise for employee in the list (star)
    toggleLike = () => {
        this.setState(({isLike}) => ({
            isLike: !isLike
        }))
    }
    
    render() {

        const {name, salary, onDelete} = this.props,
            {isIncrease, isLike} = this.state,
            isIncreaseClass = isIncrease ? " increase" : "",
            isLikeClass = isLike ? " like" : "";

        return (
                <li className={"list-group-item d-flex justify-content-between" + isIncreaseClass + isLikeClass}>
                    <span className={"list-group-item-label"}
                        onClick={this.toggleLike}
                    >
                        {name}
                    </span>
                    <input type="text"
                        className="list-group-item-input"
                        defaultValue={salary + "$"}
                    />
                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={this.toggleIncrease}
                            type="button"
                            className="btn-cookie btn-sm "
                        >
                            <i className="fas fa-cookie"></i>
                        </button>
    
                        <button
                            type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}
                        >
                            <i className="fas fa-trash"></i>
                        </button>
    
                        <i className="fas fa-star"></i>
                    </div>
                </li>
        )
    }
    };


export default EmployeesItem;