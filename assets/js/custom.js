const addTaskBtn = document.querySelector('.addTask');
const todoValue = document.querySelector('.taskValue');
const deleteAll = document.querySelector('.deleteAll');
const tasks = document.querySelector('.taskList');
const deleteTask = document.querySelectorAll('.delButton');

let tasksCarry = [];


addTaskBtn.addEventListener('click', () => {
    let taskEl = todoValue.value;

    if(taskEl !== ''){
        console.log(`Task has been added to the list: ${taskEl}`);
        tasksCarry.push(taskEl);

        todoValue.value = '';

        tasks.innerHTML = '';

        for (let i = 0; i < tasksCarry.length; i++) {
            // tasks.innerHTML += `<li>${tasksCarry[i]}</li>`;
            tasks.innerHTML += `
            <li class="task">
                <div class="d-flex align-items-center justify-content-between">
                    <p class="flex-grow-1">${tasksCarry[i]}</p>
                    <button class="transparent-btn delButton flex-shrink-0" onclick="deleteParticularTask(this)" ><i class="fa-solid fa-trash text-danger p-sm"></i></button>
                </div>
            </li>
            `;
        }
    } else{
        console.log('Please enter a task');
    }

    
});


deleteAll.addEventListener('click', () =>{
    tasksCarry = [];
    tasks.innerHTML = '';
    console.log(tasksCarry)
})


function deleteParticularTask() {
    const parent = document.querySelector(".taskList");
    const child = document.querySelector(".task");
    parent.removeChild(child);
    console.log(tasksCarry)
  }

  

