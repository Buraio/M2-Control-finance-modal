const modalDiv = document.querySelector('.divBackContainer');
const input = document.getElementById('inputValue');
const buttons = document.querySelectorAll('[data-modal-control]');
const modalEntryType = document.querySelectorAll('.inputType');
const button1 = document.querySelector('#button0');
const button2 = document.querySelector('#button1');

buttons.forEach((button) => {

  button.addEventListener('click', () => {

    modalDiv.classList.toggle('hidden');
    removeSelectedClass();
    
    button1.checked = false;
    button2.checked = false;
    input.value = '';

  })

})

modalEntryType.forEach((button) => {

  button.addEventListener('click', (event) => {

    const eventTarget = event.target.getAttribute('for');

    removeSelectedClass();

    if (eventTarget == 'button0' || eventTarget == 'button1') {
      button.classList.add('selected');
    }

  })

})

const insertValue = document.querySelector('.formModalContainer');

insertValue.addEventListener('submit', (e) => {

  e.preventDefault();

  let newId = insertedValues.length + 1;
  let newValue;
  let newType;

  if (input.value === '') {
    alert('Insira um valor no campo abaixo');
  }
  else if (!button1.checked && !button2.checked) {
    alert('Selecione o tipo de movimentação abaixo: "Entrada" ou "Saída"');
  }
  else {

    newValue = parseFloat(input.value);

    if (button1.checked) {
      newType = 0;
    }
    else if (button2.checked) {
      newType = 1;
    }

    if (newId && newType !== undefined && newValue) {
      insertedValues.push({
        id: newId,
        value: newValue,
        categoryID: newType
      })
    }

    generateCards(insertedValues);

    modalDiv.classList.add('hidden');

  }

})

function removeSelectedClass() {
  modalEntryType.forEach((button) => {
    button.classList.remove('selected');
  })
}