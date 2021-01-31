const sectionTasks = document.querySelector('#lista')
const inputTitle = document.querySelector('#titulo');
const inputPriority = document.querySelector('#prioridad');

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

    li.classList.add('tarea2');
    button.classList.add('delete');
    button.dataset.id = pTask.id;
    button.addEventListener('click', deleteTask);

    sectionTasks.appendChild(li)

}

printAllTasks(listaTareas);

//----- ADD TASK FROM FORM


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

function saveTask(pTask) {
    listaTareas.push(pTask);
    printOneTask(pTask);
    console.log(listaTareas);
}

//-------- DELETE TASK

function deleteTask(event) {

    let li = event.target.parentNode;
    li.parentNode.removeChild(li)

    let id = parseInt(event.target.dataset.id);
    let position = listaTareas.findIndex(task => task.id === id);

    listaTareas.splice(position, 1)
    console.log(listaTareas);

}


//----- FILTER TASK BY PRIORITY

const btnFilter = 






/*

cambiar color del li como cojones lo hago!!!

let li = document.querySelector('.tarea')



if (priority == 'Baja') {
    li.style.backgroundColor = 'black'
} else if (priority == 'Media') {
    li.style.backgroundColor = 'white'
} else if (priority == 'Alta') {
    li.style.backgroundColor = 'tomato'
} else {
    alert('Completa todos los campos');
} */