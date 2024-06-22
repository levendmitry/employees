
import HeaderInfo from '../header-info/header-info';
import SearchPanel from '../search-panel/search-panel.jsx';
import Filter from '../filter/filter.jsx';
import EmployeesList from '../employees-list/employees-list.jsx';
import EmployeesAddForm from '../employees-add-for/employees-add-form.jsx';

import './app.css'

function App() {

    const employeesData = [
        {id: 1, name: "Ivan", salary: 800, isIncrease: false},
        {id: 2, name: "Alex", salary: 1000, isIncrease: false},
        {id: 3, name: "Maria", salary: 1500, isIncrease: true}
    ];

    return (
        <div className="app">

            <HeaderInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <Filter/>
            </div>
            <EmployeesList employeesData={employeesData}/>
            <EmployeesAddForm/>

        </div>
    )
}

export default App;