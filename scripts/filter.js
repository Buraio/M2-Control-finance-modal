const filterButtons = document.querySelectorAll('.buttonFilter');

filterButtons.forEach((button) => {

  button.addEventListener('click', (event) => {

    entryList.innerHTML = '';
    const all = button.innerText;

    if (all === 'Todos') {
      generateCards(insertedValues);
    }

    const filter = entryTypeFilter(all);

    filterButtons.forEach((button) => button.classList.remove('selected'));

    button.classList.add('selected');

  })

})

function entryTypeFilter(text) {

  if (text === 'Entradas') {
    const filteredEntries = insertedValues.filter((entry) => entry.categoryID === 0);
    generateCards(filteredEntries);
  }
  else if (text === 'Saídas') {
    const filteredEntries = insertedValues.filter((entry) => entry.categoryID === 1);
    generateCards(filteredEntries);
  }

}