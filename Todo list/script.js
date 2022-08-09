window.addEventListener("load", () => {
    const input = document.querySelector(".input-item input");
    const createBtn = document.querySelector(".input-item button");
    const todos = document.querySelector(".todos");
    const popUp = document.querySelector(".popUp");
    const popUpBtn = document.querySelector(".popUp button");
    const popUpCont = document.querySelector(".popUp h2");

    createBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const taskContent = input.value;

        if (!taskContent) {
            alert("Give task name");
            return
        }

        const task = document.createElement("div");
        task.classList.add("task")
        todos.appendChild(task);

        const content = document.createElement("div");
        content.classList.add("content");
        task.appendChild(content);

        const inputContent = document.createElement("div");
        inputContent.classList.add("input-content");
        content.appendChild(inputContent);

        const taskName = document.createElement("input");
        taskName.value = taskContent;
        inputContent.appendChild(taskName);
        taskName.setAttribute("readonly", "readonly");

        const action = document.createElement("div");
        action.classList.add("input-button");
        content.appendChild(action);
        
        input.value = "";

        const sucBtn = document.createElement("button");
        sucBtn.classList.add("suc");
        sucBtn.innerHTML = "Suc";
        action.appendChild(sucBtn);

        sucBtn.addEventListener("click",()=>{
            todos.removeChild(task);        
        })

        const editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("edit");
        action.appendChild(editBtn);

        editBtn.addEventListener("click", () => {
            if (editBtn.innerHTML == "Edit") {
                taskName.removeAttribute("readonly", "readonly");
                taskName.focus();
                editBtn.innerHTML = "Save";
            }else{
                taskName.setAttribute("readonly", "readonly");
                editBtn.innerHTML = "Edit";
            }

        })

        const cancelBtn = document.createElement("button");
        cancelBtn.innerHTML = "Cancel";
        cancelBtn.classList.add("close");
        action.appendChild(cancelBtn);

        cancelBtn.addEventListener("click",()=>{
           todos.removeChild(task);    
        })
    })
})

