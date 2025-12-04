let editTarget = null;

function addItem() {
  const input = document.getElementById("inputText");
  const val = input.value.trim();

  if (val === "") return;

  // If editing existing item
  if (editTarget !== null) {
    editTarget.querySelector("span").innerText = val;
    editTarget = null;
    input.value = "";
    document.getElementById("addBtn").innerText = "Add";
    return;
  }

  // Add new item
  const list = document.getElementById("itemList");

  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
      <span>${val}</span>
      <button onclick="deleteItem(this)">Delete</button>
      <button onclick="editItem(this)">Edit</button>
    `;
  list.appendChild(div);
  input.value = "";
}

function editItem(btn) {
  const parent = btn.parentElement;
  const span = parent.querySelector("span");

  document.getElementById("inputText").value = span.innerText;

  editTarget = parent;

  document.getElementById("addBtn").innerText = "Save";
}

function deleteItem(btn) {
  const itemText = btn.parentElement.querySelector("span").innerText;

  const deletedList = document.getElementById("deletedList");
  const delDiv = document.createElement("div");
  delDiv.className = "item";
  delDiv.innerHTML = `
      <span>${itemText}</span>
      <button class="recover-btn" onclick="recoverItem(this)">Recover</button>
    `;
  deletedList.appendChild(delDiv);

  btn.parentElement.remove();
}

function recoverItem(btn) {
  const itemText = btn.parentElement.querySelector("span").innerText;

  const list = document.getElementById("itemList");
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
      <span>${itemText}</span>
      <button onclick="deleteItem(this)">Delete</button>
      <button onclick="editItem(this)">Edit</button>
    `;
  list.appendChild(div);

  btn.parentElement.remove();
}
