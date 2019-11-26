// download all needed elements

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const tempOwner = document.querySelector('#temp-owner');
const btnAdd = document.querySelector('.btn');
const search = document.querySelector('.search');
const date = new Date;
const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' godz: ' + date.getHours() + ':' + date.getMinutes();

// adding book to the list after click 

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  const div = document.createElement('div');
  div.className = 'alert text-center mt-5 bg-warning';
  div.textContent = `You successfully added book titled: ${title.value.toUpperCase()} to the list!`;
  const container = document.querySelector('.container');
  const bookForm = document.querySelector('#book-form');
  const removeAlert = setTimeout(function () {
    div.parentNode.removeChild(div)
  }, 2000);
  container.insertBefore(div, bookForm);

  if (title.value === '' && author.value === '' && tempOwner.value === '') {
    const message = 'fields can not be empty';
    div.textContent = message;
    removeAlert();
    return;
  } else if (title.value === "" && tempOwner.value === '') {
    const message = 'add title and temporary owner of the book';
    div.textContent = message;
    removeAlert();
    return;
  } else if (title.value === '' && author.value === "") {
    const message = 'add title and author of the book';
    div.textContent = message;
    removeAlert();
    return;
  } else if (author.value === '' && tempOwner.value === '') {
    const message = 'add author and temporary owner of the book';
    div.textContent = message;
    removeAlert();
    return;
  } else if (tempOwner.value === '') {
    const message = 'add temporary owner of the book';
    div.textContent = message;
    removeAlert();
    return;
  } else if (title.value === '') {
    const message = 'add title of the book';
    div.textContent = message;
    removeAlert();
    return;
  } else if (author.value === '') {
    const message = 'add author of the book';
    div.textContent = message;
    removeAlert();
    return;
  }
  // clearing all input after added book

  const bookList = document.querySelector('.book-list');
  const tr = document.createElement('tr');
  const thTitle = document.createElement('th');
  const thAuthor = document.createElement('th');
  const thTempOwner = document.createElement('th');
  const thDate = document.createElement('th');
  const thDelete = document.createElement('th');
  thDelete.className = 'delete';
  thDelete.title = 'Just click this button if you want to delete this book...';

  // downloading content of title, author, tempOwner 
  let titleText = title.value;
  let authorText = author.value;
  let tempOwnerText = tempOwner.value;

  // adding elements to the book list
  bookList.appendChild(tr);
  tr.className = 'new-book';
  tr.appendChild(thTitle).textContent = titleText;
  tr.appendChild(thAuthor).textContent = authorText;
  tr.appendChild(thTempOwner).textContent = tempOwnerText;
  tr.appendChild(thDate).textContent = dateText;
  tr.appendChild(thDelete);
  const btn = document.createElement('button');
  thDelete.appendChild(btn)
  btn.textContent = 'X';
  btn.className = 'btn-danger btn-xs'

  // deleting book
  btn.addEventListener('click', (e) => {
    const container = document.querySelector('.container');
    const bookForm = document.querySelector('#book-form');
    const div = document.createElement('div');
    div.style.display = 'block';
    let btn_yes = document.createElement('button');
    let btn_no = document.createElement('button');
    btn_yes.className = 'yes';
    btn_no.className = 'no';
    btn_yes.textContent = 'YES';
    btn_no.textContent = 'NO';
    div.className = 'delete-alert'
    const message = 'Press YES if you want to delete this book from "borrowed book list" ?';
    div.textContent = message;
    container.insertBefore(div, bookForm);
    div.append(btn_yes);
    div.append(btn_no);

    btn_yes.addEventListener('click', () => {
      console.log('działa');
      const delete_btn = document.querySelector('.btn-danger');
      delete_btn.parentNode.parentNode.remove();
      const delete_alert = document.querySelector('.delete-alert');
      delete_alert.remove();
    });

    btn_no.addEventListener('click', () => {
      const delete_alert = document.querySelector('.delete-alert');
      delete_alert.remove();
    });
  });
  title.value = '';
  author.value = '';
  tempOwner.value = '';
});