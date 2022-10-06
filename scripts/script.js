const entryList = document.getElementById('listContainer');
const spanSumValue = document.querySelector('.spanSumValue');

function generateCards(array) {

  const spanSumValue = document.querySelector('.spanSumValue');

  const divNoEntries = document.createElement('div');
  const pNoEntries = document.createElement('p');
  const spanNoEntries = document.createElement('span');

  divNoEntries.classList.add('noEntries');
  divNoEntries.append(pNoEntries, spanNoEntries);

  pNoEntries.innerText = "Nenhum valor encontrado";
  spanNoEntries.innerText = "Registre um novo valor";

  if (array.length === 0 ) {
    spanSumValue.innerText = `R$ 0.00`;
    entryList.appendChild(divNoEntries);
  }
  else {

    entryList.innerHTML = '';
    createCards(array);
  
    removeEntry(array);
  }

}

function createCards(array) {

  let count = 0;

  array.forEach((element, index) => {

    const li             = document.createElement('li');
    const spanValue      = document.createElement('span');
    const spanEntryType  = document.createElement('span');
    const spanRemoveIcon = document.createElement('span');
    const removeIcon     = document.createElement('img');

    li.classList.add('liValueEntry');
    spanValue.classList.add('spanValue');
    spanEntryType.classList.add('spanEntryType');
    spanRemoveIcon.classList.add('spanRemoveIcon');

    spanSumValue.innerText = `R$ ${(count += element.value).toFixed(2)}`;

    spanRemoveIcon.id = index + 1;

    removeIcon.src = './assets/img/trashBin.svg';

    spanRemoveIcon.appendChild(removeIcon);
    li.append(spanValue, spanEntryType, spanRemoveIcon);

    dataToCards(array, spanValue, spanEntryType, index);

    renderCard(li);

  })

}

function dataToCards(array, span1, span2, index) {

  span1.innerText = `R$ ${(array[index].value).toFixed(2)}`;

  if (array[index].categoryID === 0) {
    span2.innerText = valuesCategory[0];
  }
  else if (array[index].categoryID === 1) {
    span2.innerText = valuesCategory[1];
  }

}

function modifyArrayId(array) {
  array.forEach((element, index) => element.id = index + 1);
}

function renderCard(li) {
  entryList.appendChild(li);
}

generateCards(insertedValues);

function removeEntry(array) {

  const listItems = document.querySelectorAll('.liValueEntry');
  const removeBtn = document.querySelectorAll('.spanRemoveIcon');

  removeBtn.forEach((item, index) => {
  
    item.addEventListener('click', (event) => {
  
      const indexItem = event.target;
      const itemId = parseInt(indexItem.parentElement.id);
  
      if (array[index].id === itemId) {
        listItems[index].remove();
        array.splice(index, 1);

        modifyArrayId(array);

        generateCards(array);
  
      }
  
    });
  
  })

}