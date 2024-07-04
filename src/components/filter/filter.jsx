import { v4 as uuidv4 } from 'uuid';
import './filter.css';

const Filter = (props) => {
    const buttonsData = [
        {id: uuidv4(), name: 'isAllFilter', label: 'Все сотрудники'},
        {id: uuidv4(), name: 'isRiseFilter', label: 'На повышение'},
        {id: uuidv4(), name: 'isMore1000Filter', label: 'З/П больше 1000$'}
    ];

    const toggleActiveClass = (activeFilterName) => {
        if(activeFilterName) {
            return "btn btn-light";
        }
        return "btn btn-outline-light";
    }

    const buttons = buttonsData.map(({id, name, label}) => {

        return (
            <button type="button"
                    className={toggleActiveClass(props.filtersState[name])}
                    key={id}
                    onClick={() => props.onFilterChange(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default Filter;