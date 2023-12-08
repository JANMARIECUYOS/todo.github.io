const input = document.querySelector("#input");
const form = document.querySelector("#form");
const task = document.querySelector(".task");

//ADD-ON CONST
const btn = document.querySelector("ul");
const search = document.querySelector(".search-item");
const clear = document.getElementById("clear");
 //load all event listeners
loadAllEventListener();


//call all event listeners
function loadAllEventListener() {
 
    form.addEventListener("submit",addTask);

    //CHANGE VARIABLE NAMES - eventlisteners\
    btn.addEventListener('click',deleteTask);
    search.addEventListener('input',searchTask);
    clear.addEventListener('click',clearAllTask);

}

function addTask(e){
    
    e.preventDefault();

    //create <li> Element
    const li = document.createElement("li");
    //add class to our li element
    li.className = "task-item";
    //create text node and append to our li element -- 
    // you must convert the value to a text node because you cant appendChild if the value is not Node
    li.innerHTML = input.value;
    //or you can simply use the innerHTML method
    
    
    //create new link element
    const link = document.createElement("a");
    //add class to our link element
    link.className = "delete-task";
    //add a delete icon inside our link element
    link.innerHTML="&times;";

     //append li to ul 
    li.appendChild(link);

    task.appendChild(li);

    // clear the input field
    input.value = "";

}
//FUNCTIONS CODE AREA:\

//FOR DELETION OF TASK

function deleteTask(e){
    let task = document.querySelector(".task");
    let li = e.target.parentNode;

    task.removeChild(li);
}

//STUDENT ADD-ON CHALLENGE
function searchTask() {

    const search = document.querySelector('.search-item');
    const filter = search.value.toLowerCase();
    const list =  document.querySelectorAll('.task-item');

 list.forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase() . includes(filter.toLowerCase())) {
            item.style.display = '';
        }
        else {
            item.style.display = 'none';
        }
    });

}

function clearAllTask() {
    var e = document.querySelector("ul");

    var child = e.lastElementChild;

    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
