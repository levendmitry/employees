
import EmployeesItem from "../employees-item/employees-item";
import './employees-list.css'; 

const EmployeesList = ({employeesData, onDelete, onAdd}) => {

    const employeesElements = employeesData.map((employee) => {
        const {id, ...employeesProps} = employee;
        return ( 
            <EmployeesItem
                key={id}
                {...employeesProps}
                onDelete={() => onDelete(id)}
            />)
    });

    return (
        <ul className="app-list list-group">
            {employeesElements}
        </ul>
    )
}

export default EmployeesList