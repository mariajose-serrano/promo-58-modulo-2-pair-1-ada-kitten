// QUERY SELECTOR

// 1. lo primero de todo poner use strict

// 2. le tenemos que poner una clase de js al boton para traernoslo a js.
// esa clase la tenemos que guardar en una constante

////////////////////////////////////////////////// Configurar Github Project y REPO con el Starter Kit
// elemento= document.querySelector(")
// elemento.addEventListener(" , (ev) => {})

//elemento.innerHTML = ";

//elemento.classList.add(");
//elemento.classList.remove(");
//elemento.classList.toggle(");

//elementotributo = ";

//elementoInput.value

//elementoImg.src;
//elementoEnlacce.href";

///////////////////////////////////////////////////////

"use strict";
const jsList = document.querySelector(".js-list");
const jsnewform = document.querySelector(".js-new-form");
const addbutton = document.querySelector(".js-btn-add");
const inputDescription = document.querySelector(".js_in_search_desc");
const searchButton = document.querySelector(".js_button-search");
const btnCancel = document.querySelector(".js_btn-cancel");

const inputURL = document.querySelector(".js-inputUrl");
const inputName = document.querySelector(".js-inputName");
const inputRace = document.querySelector(".js-inputRace");
const inputDesc = document.querySelector(".js-inputDesc");
const inputAdd = document.querySelector(".js-inputAdd");

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

function showNewCatForm() {
  jsnewform.classList.remove("collapsed");
}
function hideNewCatForm() {
  jsnewform.classList.add("collapsed");
}

// esta funcion tiene que pintarnos un elemento
function renderKitten(url, desc, name, race) {
  jsList.innerHTML += `
 <li class="card">
          <img class="card_img" src=${url} alt="maine-coon-cat" />
          <h3 class="card_title">${name}</h3>
          <h4 class="card_race">${race}</h4>
          <p class="card_description">
          ${desc}
          </p>
        </li>`;
}

addbutton.addEventListener("click", (ev) => {
  if (jsnewform.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
});

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

btnCancel.addEventListener("click", (ev) => {
  ev.preventDefault();

  hideNewCatForm();
});

// documentquery selector hecho arriba y ahora para acceder a lo que hay escrito en el input es con .value.
//hemos ceado un evento para cuando se pulse boton añadir se capture el valor de cada input.

inputAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log("Estoy entrando en el evento")
  //para capturar el valor de ese input es .value
  const valueUrl = inputURL.value;

  const valueName = inputName.value;

  const valueRace = inputRace.value;

  const  valueDesc = inputDesc.value;

  renderKitten(valueUrl, valueDesc, valueName, valueRace);
});
