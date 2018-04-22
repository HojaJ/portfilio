const form = document.querySelector('form');
const note = document.getElementById('note');
const collect = document.getElementById('collection');
const clearAll = document.getElementById('clearAll');
form.addEventListener('submit', addTask);
clearAll.addEventListener('click', function(e){
  while(collect.firstChild){
    collect.removeChild(collect.firstChild);
  }
  localStorage.clear();
})
// collect.addEventListener('click', removeText);
function addTask(e) {

  const li = document.createElement('li');
  let text = document.createTextNode(note.value);
  const link = document.createElement('a');
  link.className = 'delete-item';
  link.innerHTML = '&times;';
  li.appendChild(text);
  li.appendChild(link);
  collect.appendChild(li);

  storeTextinLocalStorage(note.value);
  note.value = '';

  console.log(li);
  e.preventDefault();
}
function storeTextinLocalStorage(text){
  let texts;
  if(localStorage.getItem('texts')===null){
    texts = [];
  }else {
    texts = JSON.parse(localStorage.getItem('texts'));
  }
  texts.push(text);
  localStorage.setItem('texts', JSON.stringify(texts));
}

document.addEventListener('DOMContentLoaded', function getText(){
  let texts;
  if(localStorage.getItem('texts')===null){
    texts = [];
  }else {
    texts = JSON.parse(localStorage.getItem('texts'));
  }
  texts.forEach(function(t){
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.className = 'delete-item';
    link.innerHTML = '&times;';
    li.appendChild(document.createTextNode(t));
    li.appendChild(link);
    collect.appendChild(li);
  });
});

collect.addEventListener('click', removeItem);
function removeItem(e){
  if(e.target.className == 'delete-item'){
    e.target.parentElement.remove();
    removefromStorage(e.target.parentElement);
  }
}
function removefromStorage(textItem){
  let texts;
  if(localStorage.getItem('texts')===null){
    texts = [];
  }else {
    texts = JSON.parse(localStorage.getItem('texts'));
  }
  texts.forEach(function(text, index){
    if(textItem.textContent.slice(0, -1) === text){
      texts.splice(index, 1);
    } 
  });
  localStorage.setItem('texts', JSON.stringify(texts));
}
document.getElementById('filter').addEventListener('keyup', filterItem);
function filterItem(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('li').forEach(function(item){
    const it = item.firstChild.textContent;
    if(it.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }else {
      item.style.display = 'none';
    }
    console.log(item);
  })
  console.log(text);
  
}