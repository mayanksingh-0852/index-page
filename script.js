function addItem() {
    const input = document.getElementById("inputText");
    const val = input.value.trim();

    if (val === "") return;

    const list = document.getElementById("itemList");

    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <span>${val}</span>
      <button onclick="deleteItem(this)">Delete</button>
    `;

    list.appendChild(div);
    input.value = "";
  }

  function deleteItem(btn) {
    const itemText = btn.parentElement.querySelector("span").innerText;

    // Add to deleted section
    const deletedList = document.getElementById("deletedList");
    const delDiv = document.createElement("div");
    delDiv.className = "item";
    delDiv.innerHTML = `
      <span>${itemText}</span>
      <button class="recover-btn" onclick="recoverItem(this)">Recover</button>
    `;
    deletedList.appendChild(delDiv);

    // Remove from main list
    btn.parentElement.remove();
  }

  function recoverItem(btn) {
    const itemText = btn.parentElement.querySelector("span").innerText;

    // Add back to main list
    const list = document.getElementById("itemList");
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <span>${itemText}</span>
      <button onclick="deleteItem(this)">Delete</button>
    `;
    list.appendChild(div);

    // Remove from deleted list
    btn.parentElement.remove();
  }