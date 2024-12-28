const modalDestino = document.getElementById("modalDestino");

const fetchLocalJson = async () => {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    localStorage.setItem("data", JSON.stringify(data));
  } catch (error) {
    console.error('Error fetching local JSON:', error);
  }
}
fetchLocalJson();

const createModal = (destinationData) => {


  const modal = document.createElement("div");
  modal.innerHTML = `
    <div class="modal-container">
      <div class="modal">
        <div class="modal-info">
          <h2>${destinationData.destino}</h2>
          <p>${destinationData.description}</p>
          <button class="btn-modal">X</button>
        </div>
        <div class="modal-img">
          <div class="img-container">
            <img src="${destinationData.img1}" class="img-modal">
          </div>
          <div class="img-container">
            <img src="${destinationData.img2}" class="img-modal">
          </div>
        </div>
      </div>
    </div>
  `;

  modalDestino.appendChild(modal);


  const btnModal = modal.querySelector(".btn-modal");

  btnModal.addEventListener("click", () => {

    modal.style.display = "none";
  });
}

modalDestino.addEventListener('click', (event) => {

  if (event.target.tagName === 'IMG') {

    const destinationIndex = event.target.dataset.index;


    const data = JSON.parse(localStorage.getItem("data"));


    if (data && data[destinationIndex]) {

      createModal(data[destinationIndex]);
    } else {
      console.error('Invalid destination index:', destinationIndex);
    }
  }
});





// modal info contacto

document.addEventListener("DOMContentLoaded", function () {
  const showModalButtons = document.querySelectorAll(".contacto-modal");

  showModalButtons.forEach((button) => {
    button.addEventListener("click", function () {

      let modalContainer = document.getElementById("modalContainer");

      if (!modalContainer) {

        modalContainer = document.createElement("div");
        modalContainer.id = "modalContainer";
        modalContainer.className = "modal-container-contacto";
        modalContainer.innerHTML = `
          <div class="modal-contacto">
            <div class="modal-form">
              <h2 class="titulo">Contacta a un representante</h2>
              <p>Disfruta al máximo con las mejores opciones en <b>hoteles</b>, <b>excursiones</b> y <b>vehiculos</b> para tu viaje ideal.</p>
              
              <form action="" class="form" id="form">
                <input
                  class="input-modal"
                  type="text"
                  name=""
                  id="formName"
                  placeholder="Nombre"
                />
                <input
                  class="input-modal"
                  type="email"
                  name=""
                  id="formEmail"
                  placeholder="Email"
                />
                <textarea
                  class="input-modal"
                  name=""
                  id="formText"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                ></textarea>
                <button class="btn-modal" type="button">X</button>
                <button class="cta" type="submit">Enviar</button>
              </form>
            </div>
          </div>
        `;
        document.body.appendChild(modalContainer);


        const closeButton = modalContainer.querySelector(".btn-modal");
        closeButton.addEventListener("click", function (event) {
          event.preventDefault();
          modalContainer.style.display = "none";
        });

        const form = modalContainer.querySelector("#form");
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          let formName = document.getElementById('formName').value;
          let formEmail = document.getElementById('formEmail').value;
          let formText = document.getElementById('formText').value;
          console.log(formName, formEmail, formText);

          modalContainer.style.display = "none";

          form.reset();

          Swal.fire({
            icon: 'success',
            title: '¡Gracias!',
            text: 'Un representante se pondra en contacto',


          });

        });


      }


      modalContainer.style.display = "flex";
    });
  });
});

/* form */

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let formName = document.getElementById('formName').value;
  let formEmail = document.getElementById('formEmail').value;
  let formText = document.getElementById('formText').value;
  console.log(formName, formEmail, formText);

  form.reset();
});
