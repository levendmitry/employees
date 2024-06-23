
import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        salary: ""
      }
    }

    onValueChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value
      })
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: "",
        salary: ""
      })
    }

    render() {
      const {name, salary} = this.state;

      return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form 
                className="add-form d-flex"
                onSubmit={this.onSubmit}
                >

                <input
                  className="form-control new-post-label"
                  name="name"
                  type="text"
                  placeholder="Имя сотрудника"
                  value={name}
                  onChange={this.onValueChange}
                />
                <input
                  className="form-control new-post-label"
                  name="salary"
                  type="number"
                  placeholder="Зарплата в $"
                  value={salary}
                  onChange={this.onValueChange}
                />
                <button
                  className="btn btn-outline-light"
                  type="submit"
                >
                  Добавить
                </button>

            </form>
        </div>
    )
    }
}

export default EmployeesAddForm;