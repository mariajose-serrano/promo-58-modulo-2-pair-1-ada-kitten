// QUERY SELECTOR

// 1. lo primero de todo poner use strict

// 2. le tenemos que poner una clase de js al boton para traernoslo a js.
// esa clase la tenemos que guardar en una constante

"use strict";
const jsList = document.querySelector(".js-list");
const jsnewform = document.querySelector(".js-new-form");
const addbutton = document.querySelector(".js-btn-add");
const inputDescription = document.querySelector(".js_in_search_desc");
const searchButton = document.querySelector(".js_button-search");
const btnCancel = document.querySelector(".js_btn-cancel");

const kittenSiamesDesc =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenSiamesBreed = "Siames";
let kittenSiamesName = "Anastacio";
const kittenSiamesNameUpper = kittenSiamesName.toUpperCase();

const kittenSiamesImg = "https://dev.adalab.es/gato-siames.webp";

const kittenSiames = `<li class="card">
          <article>
            <img class="card_img" src=${kittenSiamesImg} alt="siames-cat" />
            <h3 class="card_title">${kittenSiamesNameUpper}</h3>
            <h4 class="card_race">${kittenSiamesBreed}</h4>
            <p class="card_description">
              ${kittenSiamesDesc}
            </p>
          </article>
        </li>`;

const kittenSphynxBreed = "Sphynx";
let kittenSphynxName = "Fiona";
const kittenSphynxNameUpper = kittenSphynxName.toUpperCase();

const kittenSphynxImg = "https://dev.adalab.es/sphynx-gato.webp";
const kittenSphynxDesc =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenSphynx = `<li class="card">
          <img class="card_img" src=${kittenSphynxImg} alt="sphynx-cat" />
          <h3 class="card_title">${kittenSphynxNameUpper}</h3>
          <h4 class="card_race">${kittenSphynxBreed}</h4>
          <p class="card_description">
          ${kittenSphynxDesc}
          </p>
        </li>`;

const kittenMaineBreed = "Maine";

// VARIABLES-DATOS DE LA PÁGINA
let kittenMaineName = "Cielo";
const kittenMaineNameUpper = kittenMaineName.toUpperCase();

const kittenMaineDesc =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenMaineImg = "https://dev.adalab.es/maine-coon-cat.webp";

const kittenMaine = `
 <li class="card">
          <img class="card_img" src=${kittenMaineImg} alt="maine-coon-cat" />
          <h3 class="card_title">${kittenMaineNameUpper}</h3>
          <h4 class="card_race">${kittenMaineBreed}</h4>
          <p class="card_description">
          ${kittenMaineDesc}
          </p>
        </li>`;

jsList.innerHTML = kittenSiames + kittenSphynx + kittenMaine;

//1. SI PONEMOS LA CLASE COLLAPSED A NEW FORM EN HTML  SE QUITA Y SE PONE, PERO DE PRIMERAS CUANDO LE DEMOS CLICK AL BOTON DE + SE TIENE QUE QUITA, VA A EMPEZAR UN EVENTO,
//CUANDO HACEMOS CLICK EL FORMULARIO SE TIENE QUE MOSTRAR, EL BOTON ME LO TENGO QUE TRAER DE HTML A JAVASCRIPT CON UN QUERYSELECTOR

addbutton.addEventListener("click", (ev) => {
  jsnewform.classList.toggle("collapsed");
});

searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrSearchText = inputDescription.value;

  jsList = '';


  if (kittenSiamesDesc.includes(descrSearchText)) {
    jsList.innerHTML += kittenSiames;
  }

  if (kittenSphynxDesc.includes(descrSearchText)) {
    jsList.innerHTML += kittenSphynx;
  }

  if (kittenMaineDesc.includes(descrSearchText)) {
    jsList.innerHTML += kittenMaine;
  }
});

btnCancel.addEventListener("click", (ev) => {
  ev.preventDefault();
  jsnewform.classList.add("collapsed");
});
