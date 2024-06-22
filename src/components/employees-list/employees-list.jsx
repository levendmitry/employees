
import EmployeesItem from "../employees-item/employees-item";
import './employees-list.css'; 

const EmployeesList = ({employeesData}) => {

    const employeesElements = employeesData.map((employee) => {
        return <EmployeesItem key={employee.id} name={employee.name} salary={employee.salary} isIncrease={employee.isIncrease}/>
    });

    return (
        <ul className="app-list list-group">
            {employeesElements}
        </ul>
    )
}

export default EmployeesList