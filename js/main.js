"use strict";
const jsList = document.querySelector(".js-list");

const kittenSiames = `<li class="card">
          <article>
            <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
            <h3 class="card_title">Anastacio</h3>
            <h4 class="card_race">Siamés</h4>
            <p class="card_description">
              Porte elegante, su patrón de color tan característico y sus ojos
              de un azul intenso, pero su historia se remonta a Asía al menos
              hace 500 años, donde tuvo su origen muy posiblemente.
            </p>
          </article>
        </li>`;

const kittenSphynx = `<li class="card">
          <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
          <h3 class="card_title">Fiona</h3>
          <h4 class="card_race">Sphynx</h4>
          <p class="card_description">
            Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
            hasta con pinta de alienígena han llegado a definir a esta raza
            gatuna que se caracteriza por la «ausencia» de pelo.
          </p>
        </li>`;

const kittenMaine = `
 <li class="card">
          <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
          <h3 class="card_title">Cielo</h3>
          <h4 class="card_race">Maine Coon</h4>
          <p class="card_description">
            Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
            bella mirada se ha convertido en una de sus señas de identidad.
            Sus ojos son grandes y las orejas resultan largas y en punta.
          </p>
        </li>`;

const kittenSiamesDesc =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenSphynxDesc =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenMaineDesc =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

jsList.innerHTML = kittenSiames + kittenSphynx + kittenMaine;

const jsnewform = document.querySelector(".js-new-form");
const addbutton = document.querySelector(".js-btn-add");
addbutton.addEventListener("click", (ev) => {
  jsnewform.classList.toggle("collapsed");
});

const inputDescription = document.querySelector(".js_in_search_desc");
const searchButton = document.querySelector(".js_button-search");
searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrSearchText = inputDescription.value;

  if (kittenSiamesDesc.includes(descrSearchText)) {
    jsList.innerHTML = kittenSiames;
  }

  if (kittenSphynxDesc.includes(descrSearchText)) {
    jsList.innerHTML = kittenSphynx;
  }

  if (kittenMaineDesc.includes(descrSearchText)) {
    jsList.innerHTML = kittenMaine;
  }
});

const btnCancel = document.querySelector(".js_btn-cancel");

btnCancel.addEventListener("click", (ev) => {
  ev.preventDefault();
  jsnewform.classList.add("collapsed");
});
