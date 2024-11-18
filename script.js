let todoList = () => {
    var input = document.getElementById("userInput").value.trim();
    if (input === "") {
        alert("Please enter a task");
    } else {
        
        var listItem = document.createElement("li");
        listItem.textContent = input;

        
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.marginLeft = "10px"; 
        removeButton.onclick = () => {
            listItem.remove(); 
        };

    
        listItem.appendChild(removeButton);

        
        document.getElementById("taskList").appendChild(listItem);

        
        document.getElementById("userInput").value = "";
    }
};
