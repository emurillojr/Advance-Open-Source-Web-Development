class Model extends BaseModel {

  constructor() {
    super()
    this.APIS = {
      Employees: `//${window.location.hostname}:3001/api/v1/employees/`
    }
  }


  getEmployeeList() {
    return this.http.get(this.APIS.Employees)
      .then(data => {
        data.forEach((employee) => {
          employee.startDateFormatted = this.formatDate(employee.startDate) //**
          employee.salaryFormatted = this.formatNumber(employee.salary) //**
        })
        return Components.employeeTable(data).then(html => {
          return this.dataBindModel.employeeTable = html
        })
      })
  }

  saveEmployee(evt) {

    let form = evt.target.form
    if (!form.checkValidity()) {
      this.dataBindModel.saveResultMsg = 'All fields are required'
      return Promise.resolve()
    }
    const data = {
      firstName: this.dataBindModel.firstName,
      lastName: this.dataBindModel.lastName,
      department: this.dataBindModel.department,
      startDate: new Date(this.dataBindModel.startDate),
      jobTitle: this.dataBindModel.jobTitle,
      salary: this.dataBindModel.salary
    }
    return this.http.post(this.APIS.Employees, data)
      .then(data => {
        this.dataBindModel.saveResultMsg = 'Employee Saved'
        return data
      }).catch(err => {
        this.dataBindModel.saveResultMsg = 'Employee was NOT Saved'
        return err
      })
  }


  get isAdded() {
    const msg = this.dataBindModel.saveResultMsg
    return msg && msg.toLowerCase().indexOf('not') === -1 && msg.toLowerCase().indexOf('required') === -1
  }

}
