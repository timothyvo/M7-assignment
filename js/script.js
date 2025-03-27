// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm')
let employees = document.querySelector('#employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
let empCount = document.querySelector('#empCount');  
empCount.textContent = count;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let extension = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = document.createElement('tr');
    employees.appendChild(newRow);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = newRow.insertCell(0)
    let cellName = newRow.insertCell(1)
    let cellExtension = newRow.insertCell(2)    
    let cellEmail = newRow.insertCell(3)
    let cellDepartment = newRow.insertCell(4)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(id))
    cellName.appendChild(document.createTextNode(name))
    cellExtension.appendChild(document.createTextNode(extension))
    cellEmail.appendChild(document.createTextNode(email))
    cellDepartment.appendChild(document.createTextNode(department))

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    newRow.appendChild(deleteBtn)

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++
    empCount.textContent = count

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    id.focus();
})

// DELETE EMPLOYEE
employees.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete this employee?')) {
            employees.removeChild(e.target.parentElement)
            count--
            empCount.textContent = count;
        }
    }
})
