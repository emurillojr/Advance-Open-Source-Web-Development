class Model extends BaseModel {

    constructor() {
        super()
        this.APIS = {
            Employees : `//${window.location.hostname}:3001/api/v1/employees/`
        }
    }


    getEmployeeList() {
        return this.http.get(this.APIS.Employees)
                .then( data => {
                    data.forEach((review) => {
                        review.startDateFormatted = this.formatDate(review.startDate) //**
                        review.salaryFormatted = this.formatDate(review.salary) //**
                    })
                   return Components.todoTable(data).then(html => { return this.dataBindModel.todoTable = html })
                })
    }

    deleteEmployee(evt) {
       const url = `${this.APIS.Employees}${evt.target.dataset.id}`
       return this.http.delete(url)
                .then( ()=>{
                   return this.dataBindModel.deleteResultMsg = 'Employee Deleted'
                }).catch( err => {
                    return this.dataBindModel.deleteResultMsg = 'Employee was NOT Deleted'
                }).then( () => {
                   return this.getEmployeeList()
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
                .then( data => {
                   this.dataBindModel.saveResultMsg = 'Todo Saved'
                   return data
                }).catch( err => {
                   this.dataBindModel.saveResultMsg = 'Todo was NOT Saved'
                   return err
                })
    }

    goToUpdatePage(evt) {
        this.redirect('update',{id: evt.target.dataset.id})
        return Promise.resolve()
    }

    updatePageLoad() {
        const url = `${this.APIS.Todo}${this.urlParams().get('id')}`
        return this.http.get(url).then( data => {
            this.dataBindModel = {title: data.title, completed: data.completed, id: data.id }
            return data
        })
    }

    updateTodo(evt) {
        let form = evt.target.form
         if (!form.checkValidity()) {
             this.dataBindModel.updateResultMsg = 'All fields are required'
             return Promise.resolve()
         }
        const data = {
            title : this.dataBindModel.title,
            completed : this.dataBindModel.completed
        }
         const url = `${this.APIS.Todo}${this.dataBindModel.id}`
         return this.http.put(url, data)
                 .then( data => {
                     this.dataBindModel.updateResultMsg = 'Todo updated'
                     return data
                 }).catch( err => {
                     this.dataBindModel.updateResultMsg = 'Todo was NOT updated'
                     return err
                 })
    }

    get isDeleted() {
        const msg = this.dataBindModel.deleteResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1
    }

    get isAdded() {
        const msg = this.dataBindModel.saveResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1 && msg.toLowerCase().indexOf('required') === -1
    }

    get isUpdated() {
        const msg = this.dataBindModel.updateResultMsg
        return msg && msg.toLowerCase().indexOf('not') === -1 && msg.toLowerCase().indexOf('required') === -1
    }

}
