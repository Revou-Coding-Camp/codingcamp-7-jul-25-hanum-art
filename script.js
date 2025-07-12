document.addEventListener("DOMContentLoaded", loadTasks);

const taskinput = document.getElementById("task-input");
const taskDataInput = document.getElementById("task-data");
const calendaricon= document.getElementById("calendar-icon");
const addtaskbtn = document.getElementById("add-task-btn");
const tasklist= document.getElementById("task-list");
const pendingtaskcount = document.getElementById("pending-task");
const clearAllbtn = document.getElementById("clear-all-btn");

let selectData ="";
calendaricon.addEventListener("click", ()=>{
    selectData = e.target.value;
});
addtaskBtn.addEventListener("click",addTask);
clearAllBtn.addEventListener("click",clearAllTask);

function addTask(){
    conts taskText = taskInput.value.trim();
    if(taskText === || selectedData === ""){
        alert("Please enter a task and select a due date.");
        return

    }
    const taskItem = createTaskElement(taskText, false,selectedDate);
    tasklist.appendChild(taskItem);
    saveTaskToLocalStorage(taskText, false, selectedDate);
    taskInput.value="";
    selectedDate="";
    updatePendingTask();
}
function createTaskElement(taskText, isComleted, taskData){
    const li = document.createElement("li");
     culateDaysLeft(taskData);
     daysLeft === 0? "task Overdue" : `${daysLeft} ${daysLeft} === 1? "day": "days"} left`;

     let color = daysLeft < 3? "red" : daysLeft<=5 ? "orangr" :"green" ;
     li.innerHTML =`
     <input type= "checkbod" class ="task-checkbox" ${isComleted ? "checked" : ""}>
     <span class "task-text ${isComleted ? "complected" : ""}>${taskText}</
     <span>
     <span class "daysLeft" style"color: ${color};">${daysLeftText}</span>
     <button class= "edit-btn">✏️</button>
     <button class= "delete-btn">❌</button>
`;

const editBtn = li.querySelector(".edit-btn");
const deleteBtn = li.querySelector(".delete-btn");
const taskTextElement = li.querySelector(".task-text");

li.querySelector(".task-checkbox").addEventListener("change", (e) =>{
const isChecked = e.target.checked;
taskTextElement.classList.toggle("completed", ischecked);
updateTaskStatus(taskText, isChecked, taskDate);
updatePendingTask();

});
editBtn.addEventListener("click", () => editTask(li, taskText, taskDate));
deleteBtn.addEventListener("click",() => {
    removeTaskFromLocalStorage(taskText);
    li.remove();
    updatePendingTask();
});
return li
}

function editTask(li, oldText, oldDate){
    const taskTextElement = li.querySelector(".task-text");
    const daysLeftElement = li.querySelector(".days-left");
    const editBtn = li.querySelector(".tedit-btnt");

    const textInput =document.createElement("input");

textInput.type = "text";

taskinput.value = taskTextElement.textContent;

textInput.classList.add("edit-input");

const dateInput = document.createElement("input");

dateInput.type = "date";

dateInput.value = oldDate;

dateInput.classList.add("edit-date");

const saveBtn = document.createElement("button");

saveBtn.innerHTML = "";

saveBtn.classList.add("save-btn");

li.replaceChild(textInput, taskTextElement);

li.replaceChild(dateInput, daysLeftElement);

li.replaceChild(saveBtn, editBtn);

saveBtn.addEventListener("click", () => saveEditedTask(li, oldText,textInput.value, dateInput.value))
}
function saveEditedTask(li, oldText, newText, newDate) {
if (!newText.trim() || !newDate) {
alert("Task name and date cannot be empty");

return
}
const daysLeft calculateDaysLeft(newDate); const daysLeftText daysLeft ===? "Task Overdue": ${daysLeft) $ (daysLeft ===1? "day" "days") left; let color daysLeft < 3? "red" daysLeft <= 5? "orange": "green";

const taskTextElement = document.createElement("span");

taskTextElement.textContent = newText;

taskTextElement.classList.add("task-text");

const daysLeftElement document.createElement("span");

daysLeftElement.textContent daysLeftText;

daysLeft Element.style.color = color;

daysLeftElement.classList.add("days-left");
const editBtn = document.createElement("button");

editBtn.innerHTML = "";

editBtn.classList.add("edit-btn");

li.replaceChild(taskTextElement, li.querySelector(".edit-input"));

11.replaceChild(daysLeftElement, li.querySelector(".edit-date"));

li.replaceChild(edit new li.querySelector(".save-btn"));

[Music]

editBtn.addEventListener("click", () => editTask(li, newText, newDate));
updateTaskinLocalStorage (oldText, newText, newDate);

loadTasks();

}

function calculateDaysLeft(taskDate) {

const today = new Date();
const dueDate = new Date(taskDate);

const timeDiff dueDate today;

const daysLeft = Math.ceil(timeDiff / (1000-60 60*24));

return daysLeft < 0?0 daysLeft;
function saveTaskToLocalStorage(taskText, isCompleted, taskDate) {
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.push({ text: taskText, completed: isCompleted, date: taskDate}); 
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskinLocalStorage(oldText, newText, newDate) {
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks = task.map(task =>
task.text === oldText ? { text: newText, completed: task.completed, date: newDate}: task
);
localStorage.setItem("task", JSON.stringify(tasks))
}
function removeTaskFromLocalStorage(taskText) {

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.tasks.filter(task => task.text == taskText);

localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.sort((a, b) => calculateDaysLeft(a.date) calculateDaysLeft(b.

date));

taskList.innerHTML = "";

tasks.forEach(task => {
const taskItem = createTaskElement(taskText, task.completed, task.date);

taskList.appendChild(taskItem);

});

updatePendingTasks();
function updatePendingTasks() {

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let pendingCount = tasks.filter(task => !task.completed).length;
pendingtaskcount.textContent = `You have ${pendingCount} pending tasks.`;
clearAllBtn.style.display = tasks.length > 0 ? "inline-block" : "none";
}