
import EmployeesItem from "../employees-item/employees-item";
import './employees-list.css'; 

const EmployeesList = ({employeesData, onDelete, onToggleProp}) => {

    const employeesElements = employeesData.map((employee) => {
        const {id, ...employeesProps} = employee;
        return ( 
            <EmployeesItem
                key={id}
                {...employeesProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute("data-toggle"))}
            />)
    });

    return (
        <ul className="app-list list-group">
            {employeesElements}
        </ul>
    )
}

export default EmployeesList