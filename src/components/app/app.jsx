
import HeaderInfo from '../header-info/header-info';
import SearchPanel from '../search-panel/search-panel.jsx';
import Filter from '../filter/filter.jsx';
import EmployeesList from '../employees-list/employees-list.jsx';
import EmployeesAddForm from '../employees-add-for/employees-add-form.jsx';

import './app.css'

function App() {
    return (
        <div className="app">

            <HeaderInfo/>
            <div className="search-panel">
              <SearchPanel/>
              <Filter/>
            </div>
            <EmployeesList/>
            <EmployeesAddForm/>

        </div>
    )
}

export default App;