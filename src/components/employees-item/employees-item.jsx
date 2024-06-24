

import './employees-item.css';

const EmployeesItem = ({name, salary, onDelete, onToggleIncrease, onToggleRise, isIncrease, isRise}) => {
    
    const isIncreaseClass = isIncrease ? " increase" : "",
          isLikeClass = isRise ? " like" : "";

    return (
            <li className={"list-group-item d-flex justify-content-between" + isIncreaseClass + isLikeClass}>
                <span className={"list-group-item-label"}
                    onClick={onToggleRise}
                >
                    {name}
                </span>
                <input type="text"
                    className="list-group-item-input"
                    defaultValue={salary + "$"}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={onToggleIncrease}
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


export default EmployeesItem;