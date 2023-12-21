const name = 'Nadia';

const jumbotronHeaderName = document.querySelector('.jumbotron__header span');
jumbotronHeaderName.textContent = name;

const submitForm = document.querySelector('.contact__container-form');
const nameInput = submitForm.querySelector('#name');
const emailInput = submitForm.querySelector('#email');
const selectedGender = document.getElementsByName('gender');
const messageInput = submitForm.querySelector('#message');


const containerOutput = document.querySelector('.contact__container-output__data');
submitForm.addEventListener('submit', function (event) {
  console.log(selectedGender);
  event.preventDefault();

  let gender = '';

  for (let i = 0; i < selectedGender.length; i++) {
    if (selectedGender[i].checked) {
      gender = selectedGender[i].value;
      break;
    }
  }

  containerOutput.innerHTML = `
    <div>
      <h2>Current Time: ${new Date()}</h2>
      <p>
        Name: ${nameInput.value}
      </p>
      <p>
        Email: ${emailInput.value}
      </p>
      <p>
        Jenis Kelamin: ${gender}
      </p>
      <p>
        Pesan: ${messageInput.value}
      </p>
    </div>
  `;
});
