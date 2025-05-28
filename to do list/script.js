const userinput = document.getElementById("entry");
const button = document.getElementById("button");
const box = document.querySelector(".container");

let final;

function addElement() {
    final = userinput.value.trim();
    
    if (final === "") {
        alert("Enter a valid input");
    } else {

        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "usertask";
        newInput.className = "task";
        newInput.value = final;
        newInput.readOnly = true;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete-btn";

        const taskContainer = document.createElement("div");
        taskContainer.className = "task-item";
        
        taskContainer.appendChild(newInput);
        taskContainer.appendChild(deleteButton);
        box.appendChild(taskContainer);

        userinput.value = "";

        deleteButton.addEventListener("click", function () {
            box.removeChild(taskContainer);
        });
    }
}

button.addEventListener("click", function () {
    addElement();
});
