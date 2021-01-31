const sectionTasks = document.querySelector('#lista')

//----- PRINT TASK
const printAllTasks = function (pTaskList) {
    sectionTasks.innerHTML = "";
    for (let task of pTaskList) {
        printOneTask(task);
    }
}

const printOneTask = function (pTask) {

    let li = document.createElement('li');
    let button = document.createElement('button');

    li.innerHTML = `<a href="">${pTask.titulo}</a>`
    let contentButton = document.createTextNode(`Eliminar`);

    button.appendChild(contentButton);
    li.appendChild(button)

    button.classList.add('delete');
    button.dataset.id = pTask.id;
    /* button.addEventListener('click', deleteTask); */

    sectionTasks.appendChild(li)
}

printAllTasks(listaTareas);

//----- ADD TASK FROM FORM

const inputTitle = document.querySelector('#titulo');
const inputPriority = document.querySelector('#prioridad');

let idTask = listaTareas.length

const btnForm = document.querySelector('#btn');

btnForm.addEventListener('click', getDataForm)

function getDataForm(event) {
    event.preventDefault(); 

    const title = inputTitle.value;
    const priority = inputPriority.value;

    if (title != "" && priority != "") {
        const newTask = {
            id: ++idTask, 
            titulo: title,
            prioridad: priority,
        };
        saveTask(newTask);
    } else {
        alert('Completa todos los campos');
    }
}

function saveTask (pTask){
    listaTareas.push(pTask);
    printOneTask(pTask);
    console.log(listaTareas);
}





//----------Funciones



//----------Eventos