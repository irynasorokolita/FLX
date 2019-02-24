let addNewItem = document.querySelector('.add-input');
let addBtn = document.querySelector('.add-btn');
let list = document.querySelector('.list');
let warningMessage = document.querySelector('.warning-message');

addNewItem.oninput = function(e) {
  let inputText = addNewItem.value;
  addBtn.disabled = !addNewItem;

  if (event.key === 'Enter' && inputText) {
    createListItem(inputText);
  }
}

addBtn.onclick = function() {
  createListItem(addNewItem.value);
}

let createListItem = function(inputText) {
  let listItem = document.createElement('li');
  listItem.setAttribute('class', 'list_item');
  listItem.setAttribute('draggable', true);

  let text = document.createElement('span');
  text.appendChild(document.createTextNode(inputText));

  let counter = 0;
  let MAX_ITEMS = 10;

  let checkIcon = document.createElement('i');
  checkIcon.setAttribute('class', 'material-icons');
  checkIcon.appendChild(document.createTextNode('check_box_outline_blank'));

  let delIcon = document.createElement('i');
  delIcon.setAttribute('class', 'material-icons');
  delIcon.appendChild(document.createTextNode('delete'));

  let checkBox = document.createElement('button');
  checkBox.setAttribute('class', 'list_checkbox');

  let delBtn = document.createElement('button');
  delBtn.setAttribute('class', 'list_remove_item');

  checkBox.appendChild(checkIcon);
  checkBox.appendChild(text);
  delBtn.appendChild(delIcon);
  listItem.appendChild(checkBox);
  listItem.appendChild(delBtn);
  list.appendChild(listItem);

  counter++;

  if (counter >= MAX_ITEMS) {
    warningMessage.style.visibility = 'visible'
    addBtn.disabled = true;
    addNewItem.disabled = true;
  }

  delBtn.onclick = function() {
    listItem.remove();
    addNewItem.disabled = false;
    warningMessage.style.visibility = 'hidden';
    counter--;
  }

  checkBox.onclick = function() {
    checkIcon.textContent = 'check_box'
  }

  addNewItem.value = '';
  addBtn.disabled = true;
}
