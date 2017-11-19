class View {

  get home() {
    return Promise.resolve(`<section class="hero is-info is-small spacer">
                    <div class="hero-body">
                        <h1 class="title">Employees</h1>
                    </div>
                </section>
                <p data-bind-model="deleteResultMsg" data-bind-safe data-bind-class="{'is-success': 'isDeleted', 'is-danger': '!isDeleted' }" class="notification is-spaced"></p>
                <table class="table is-spaced is-bordered is-hoverable is-fullwidth is-small">
                  <thead>
                    <tr class="is-selected">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                    <th>Start Date</th>
                    <th>Job Title</th>
                    <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody data-bind-model="employeeTable"></tbody>
              </table>`)
  }

  get add() {
    return Promise.resolve(`<section class="hero is-info is-small spacer">
                 <div class="hero-body">
                     <h1 class="title">Add New Employee</h1>
                 </div>
             </section>
             <form data-no-submit>
                 <div class="field">
                     <label class="label">First Name</label>
                     <input type="text" name="firstName" class="input" required />
                 </div>
                 <div class="field">
                     <label class="label">Last Name</label>
                     <input type="text" name="lastName" class="input" required />
                 </div>
                 <div class="field">
                     <label class="label">Department</label>
                     <select name="department" class="select" required>
                         <option value=""></option>
                         <option value="IT">IT</option>
                         <option value="Purchasing">Purchasing</option>
                         <option value="Accounting">Accounting</option>
                         <option value="HR">HR</option>
                         <option value="Tech-Services">Tech-Services</option>
                     </select>
                 </div>

                 <div class="field">
                     <label class="label">Start Date</label>
                     <input class="input" type="date" name="startDate" required>
                 </div>
                 <div class="field">
                     <label class="label">Job Title</label>
                     <input type="text" name="jobTitle" class="input" required />
                 </div>
                 <div class="field">
                     <label class="label">Salary</label>
                     <input type="text" name="salary" class="input" required />
                 </div>


                 <div class="field">
                     <input type="reset" value="reset" class="button is-primary is-outlined" />
                     <input type="button" value="submit" class="button is-link" data-bind-event="click:saveEmployee" />
                 </div>
                 <p data-bind-model="saveResultMsg" data-bind-safe data-bind-class="{'is-success': 'isAdded', 'is-danger': '!isAdded' }" class="notification"></p>
             </form>`)
  }

}
