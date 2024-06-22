
import './employees-add-form.css'

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form 
                className="add-form d-flex">

                <input
                  className="form-control new-post-label"
                  type="text"
                  placeholder="Имя сотрудника"
                />
                <input
                  className="form-control new-post-label"
                  type="number"
                  placeholder="Зарплата в $"
                />
                <button
                  className="btn btn-outline-light"
                  type="submit">
                  Добавить
                </button>

            </form>
        </div>
    )
}

export default EmployeesAddForm;