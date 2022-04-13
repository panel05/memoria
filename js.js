window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}

function $(elem) {
  return document.querySelector(elem);
}

function ß(elem) {
  return document.querySelectorAll(elem);
}

const kepekTomb = [
  "kepek/kep1.jpg",
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
  "kepek/kep4.jpg",
];
const hatterKep = "kepek/hatter.jpg";
let txt = "";
function init() {
  // for (let index = 0; index < kepekTomb.length; index++) {
  //     txt += "<div>"+"<img src="+hatterKep+">"+"</div>"

  // }
  // ID("kepek").innerHTML = txt;
  //     kepekTomb.forEach(function feltolt(){
  //     txt+= "<div><img src="+hatterKep+"></div>"
  // })
  //     ID("kepek").innerHTML= txt;
  let txt = "";
  kepekTomb.forEach(function (elem, index) {
    txt += `<div><img id="${index}" src="${hatterKep}" alt="szorny"></div>`;
  });
  $("article").innerHTML = txt;
  const kepElemTomb = ß("article div img");
  kepElemTomb.forEach(function (elem) {
    elem.addEventListener("click", megfordit);
  });

  const kivalasztottTomb = [];
  function megfordit() {
    const hatter = "kepek/hatter.jpg";
    console.log(event.target.id);
    let aktualisElem = event.target.id;
    event.target.src = kepekTomb[aktualisElem];
  }
}
