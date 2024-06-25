
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

    isValidName = (name) => {
      // validation employee name
      const pattern = /^([А-Я]{1}[а-яё]{1,23}) ([А-Я]{1}[а-яё]{1,23})$/;
      return pattern.test(name);
    }

    isValidSalary = (salary) => {
      // validation employee salary
      const pattern = /^([0-9]{1,10})$/
      return pattern.test(salary);
    }

    onValueChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value
      })
    }

    onSubmit = (event) => {
      event.preventDefault();
      if (!this.isValidName(this.state.name)) {
        console.log("hui");
        return;
      }
      if (!this.isValidSalary(this.state.salary)) {
        console.log("pi3da");
        return;
      }
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