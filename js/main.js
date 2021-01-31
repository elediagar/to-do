let sectionTasks = document.querySelector('#lista')


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

printAllTasks(listaTareas)

//----------Funciones



//----------Eventos