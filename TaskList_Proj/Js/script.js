//Define UI Element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

//Define eventListeners

form.addEventListener('submit', addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);

//Define Functions
function addTask(e){

    if(taskInput.value === '' ) {
    
        alert('Add a task first!');
    } else {
        //create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value +
             " "));

        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);

        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = '';
    }
    e.preventDefault();
}
//remove function
function removeTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
    //console.log(e.target);
}

//CLear Task

function clearTask(e){
    //taskList.innerHTML= " ";
    while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild); 
    }
}
//Filter Task
function filterTask(e){
    let text = e.target.value.tolowercase();
    document.querySelectorAll('li').foreach(task =>{
        if(item.tolowercase().indexof(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

//Store in local storag

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null ) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null ) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
            }

        tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + ""));

        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);   
        });
}