
import EmployeesItem from "../employees-item/employees-item";
import './employees-list.css'; 

const EmployeesList = ({employeesData}) => {

    const employeesElements = employeesData.map((employee) => {
        const {id, ...employeesProps} = employee;
        return <EmployeesItem key={id} {...employeesProps}/>
    });

    return (
        <ul className="app-list list-group">
            {employeesElements}
        </ul>
    )
}

export default EmployeesList