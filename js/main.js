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

// Tenemos que crear objetos con los gatitos;
// Este es el primer objeto:

const kittenSiamesData = {
  desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente",
  breed: "Siames",
  name: "Anastacio",
  image: "https://dev.adalab.es/gato-siames.webp",
};

kittenSiamesData.nameUpper = kittenSiamesData.name.toUpperCase();

const kittenSphynxData = {
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  breed: "Sphynx",
  name: "Fiona",
  image: "https://dev.adalab.es/sphynx-gato.webp",
};

kittenSphynxData.nameUpper = kittenSphynxData.name.toUpperCase();

const kittenMaineData = {
  desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  breed: "Maine",
  name: "Cielo",
  image: "https://dev.adalab.es/maine-coon-cat.webp",
};

kittenMaineData.nameUpper = kittenMaineData.name.toUpperCase();

const kittenDataList = [kittenSiamesData, kittenSphynxData, kittenMaineData];

const kittenSiames = `<li class="card">
          <article>
            <img class="card_img" src=${kittenDataList[0].image} alt="siames-cat" />
            <h3 class="card_title">${kittenDataList[0].nameUpper}</h3>
            <h4 class="card_race">${kittenDataList[0].breed}</h4>
            <p class="card_description">
              ${kittenDataList[0].desc}
            </p>
          </article>
        </li>`;

const kittenSphynx = `<li class="card">
          <img class="card_img" src=${kittenDataList[1].image} alt="sphynx-cat" />
          <h3 class="card_title">${kittenDataList[1].nameUpper}</h3>
          <h4 class="card_race">${kittenDataList[1].breed}</h4>
          <p class="card_description">
          ${kittenDataList[1].desc}
          </p>
        </li>`;

// VARIABLES-DATOS DE LA PÁGINA

const kittenMaine = `

 <li class="card">
          <img class="card_img" src=${kittenDataList[2].image} alt="maine-coon-cat" />
          <h3 class="card_title">${kittenDataList[2].nameUpper}</h3>
          <h4 class="card_race">${kittenDataList[2].breed}</h4>
          <p class="card_description">
          ${kittenDataList[2].desc}
          </p>
        </li>`;

// llamamos a la funcion

renderKittenList(kittenDataList);

// CREAMOS LA CONSTANTE DEL ARRAY

//La variable tiene que estar definida antes de donde la vas a usar porque si no no te la coge

//sustituimos en ${kittenDataList[2]} por ejm.

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

//creamos nueva funcion:

function renderKittenList(kittenDataList) {
  jsList.innerHTML = ""; //lo vaciamos
  //Iteramos sobre el listado de gatitos
  for (const oneKitten of kittenDataList) {
    //Y por cada iteración pintamos un gatito.
    renderKitten(
      oneKitten.image,
      oneKitten.desc,
      oneKitten.nameUpper,
      oneKitten.breed
    );
  }
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

  //variable para almacenar cada gato de la lista
  jsList.innerHTML = "";
  for (const kittenItem of kittenDataList) {
    //Comprueba si cada gatito contiene la descripción

    if (kittenItem.desc.includes(descrSearchText)) {
      jsList.innerHTML = kittenItem;
    }
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
  console.log("Estoy entrando en el evento");
  //para capturar el valor de ese input es .value
  const valueUrl = inputURL.value;

  const valueName = inputName.value;

  const valueRace = inputRace.value;

  const valueDesc = inputDesc.value;

  renderKitten(valueUrl, valueDesc, valueName, valueRace);
});
