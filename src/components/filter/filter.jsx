import './filter.css';

const Filter = () => {
    return (
        <div className="filter">
            <div className="btn-group">
                <button
                  className="btn btn-light"
                  type="button"
                >
                    Все сотрудники
                </button>
                <button
                  className="btn btn-outline-light"
                  type="button"
                >
                    На повышение
                </button>
                <button
                  className="btn btn-outline-light"
                  type="button"
                >
                    З\П выше 1000$
                </button>
            </div>
        </div>
    )
}

export default Filter;