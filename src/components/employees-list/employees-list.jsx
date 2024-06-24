
import EmployeesItem from "../employees-item/employees-item";
import './employees-list.css'; 

const EmployeesList = ({employeesData, onDelete, onToggleIncrease, onToggleRise}) => {

    const employeesElements = employeesData.map((employee) => {
        const {id, ...employeesProps} = employee;
        return ( 
            <EmployeesItem
                key={id}
                {...employeesProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}
            />)
    });

    return (
        <ul className="app-list list-group">
            {employeesElements}
        </ul>
    )
}

export default EmployeesList