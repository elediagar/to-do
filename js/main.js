const sectionTasks = document.querySelector('#lista')
const inputTitle = document.querySelector('#titulo');
const inputPriority = document.querySelector('#prioridad-input');
const selectPriority = document.querySelector('#prioridad-filter');


//----- PRINT TASK
const printAllTasks = function (pTaskList) {
    sectionTasks.innerHTML = "";
    for (let task of pTaskList) {
        printOneTask(task);
    }
}


const printOneTask = function (pTask) {

    let li = document.createElement('li');
    li.classList.add(`${pTask.prioridad}`);
    let button = document.createElement('button');

    li.innerHTML = `<a href="">${pTask.titulo}</a>`
    let contentButton = document.createTextNode(`Eliminar`);

    button.appendChild(contentButton);
    li.appendChild(button)


    button.classList.add('delete');
    button.dataset.id = pTask.id;
    button.addEventListener('click', deleteTask);

    sectionTasks.appendChild(li)
}



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

printAllTasks(listaTareas)

//----- FILTER TASK BY PRIORITY



selectPriority.addEventListener('change', getPriority);

function getPriority(event) {
    let priority = event.target.value;
    if (priority != "") {
        let listaTasksFiltrada = filterByPriority(priority, listaTareas);
        printAllTasks(listaTasksFiltrada)
    } else {
        printAllTasks(listaTareas)
    }
}

function filterByPriority(pPriority, pTaskList) {
    const listaFiltrada = pTaskList.filter(task => task.prioridad == pPriority);

    return listaFiltrada;
}

//----- FILTER TASK BY WORD


let inputWord = document.querySelector('#buscador');

inputWord.addEventListener('keydown', getInputData);

function getInputData(event) {
    if (event.keyCode == 13) {
        let wordSearch = inputWord.value;
        let taskListFound = searchByWord(wordSearch, listaTareas);
        printAllTasks(taskListFound)
    }
}

function searchByWord(pWord, pTaskList) {
    const filteredList = pTaskList.filter(task => task.titulo.toLowerCase().includes(pWord.toLowerCase()))
    return filteredList
}








/*

cambiar color del li como cojones lo hago!!!


if (listaTareas.prioridad == 'Baja') {
        li.style.backgroundColor = 'black'
    } else if (listaTareas.prioridad == 'Media') {
        li.style.backgroundColor = 'white'
    } else if (listaTareas.prioridad == 'Alta') {
        li.style.backgroundColor = 'tomato'
    } else {
        alert('Completa todos los campos');
    }

    if (inputPriority.value == 'Baja') {
        li.style.backgroundColor = 'black'
    } else if (inputPriority.value == 'Media') {
        li.style.backgroundColor = 'white'
    } else if (inputPriority.value== 'Alta') {
        li.style.backgroundColor = 'tomato'
    } else {
        alert('Completa todos los campos');
    }

 */