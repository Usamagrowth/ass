document.getElementById("addBtn").addEventListener("click", function () {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("please enter valid input");
    return;
  }
  console.log(taskText);
  const li = document.createElement("li");
  li.textContent = taskText;

  //Complete
  const CompleteBtn = document.createElement("button");

  CompleteBtn.textContent = "✓";
  CompleteBtn.click(() => {
    alert("click")
    li.classList.toggle("completed")});

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onClick = () => li.remove();
  li.appendChild(CompleteBtn);
  li.appendChild(deleteBtn);
 const parent = document.getElementById("taskList");
 const firstChild = undefined
  parent.insertBefore(li, firstChild);
  input.value = "";
});
