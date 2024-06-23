import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import HeaderInfo from '../header-info/header-info';
import SearchPanel from '../search-panel/search-panel.jsx';
import Filter from '../filter/filter.jsx';
import EmployeesList from '../employees-list/employees-list.jsx';
import EmployeesAddForm from '../employees-add-for/employees-add-form.jsx';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeesData: [
                {id: "1", name: "Ivan", salary: 800},
                {id: "2", name: "Alex", salary: 1000},
                {id: "3", name: "Maria", salary: 1500}
            ]
        }
    }

    //Add employee in the list
    addItem = (name, salary) => {
        const newEmployee = {
            id: uuidv4(), //Рассмотреть UUIDGEN
            name: name,
            salary: salary
        }

        this.setState(({employeesData}) => {
            const newEmployeesData = [...employeesData, newEmployee];

            return {
                employeesData: newEmployeesData
            }
        })
    }

    //Delete employee from the list 
    deleteItem = (id) => {
        this.setState(({employeesData}) => {
            return {
                employeesData: employeesData.filter(employees => employees.id !== id)
            }
        })
    }

    render() {
        const {employeesData} = this.state;
        return (
            <div className="app">
    
                <HeaderInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <Filter/>
                </div>
                <EmployeesList employeesData={employeesData} onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
    
            </div>
        )
    }
}

export default App;