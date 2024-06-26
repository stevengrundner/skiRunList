let id = 0;

document.getElementById("add").addEventListener("click", () => {
  let createdDate = new Date();
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById("new-area").value;
  row.insertCell(1).innerHTML =
    document.getElementById("new-opening-date").value;
  row.insertCell(2).innerHTML = document.getElementById("new-ski-run").value;
  row.insertCell(3).innerHTML = document.getElementById("new-ski-date").value;
  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("new-ski-run").value = "";
});

// the code above is creating a funtion when the add button is clicked the information from the boxes in the container are listed in the grey area logging the input

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log("Deleting row with id: item-${id}");
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}

// the code above creates a funtion to delete the row of inputted information
