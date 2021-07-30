let imagesAndScripts = [];
/*
let currentSource = document.images[0];
let scripts = document.links;
let scriptsArr = Array.from(scripts);
for (let i = 0; i < scriptsArr.length; i++) {
  if (scriptsArr[i].href.includes("facebook")) {
    console.log(scriptsArr[i].href);
  }
}
let cont = document.querySelector(".container");

let h1 = document.createTextNode("Hey There supp");
let aTag = document.createElement("a");
aTag.setAttribute("href", "codeWithHarry");
aTag.textContent = "heuy";

cont.append(h1);
cont.append(aTag);

//LOCAL STORAGE

//ADDS A KEY VALUE PAIR INSIDE LOCAL STORAGE

localStorage.setItem("name", "shahim");
console.log(localStorage.getItem("name"));

//CLEARS THE WHOLE LOCAL STORAGE:

localStorage.clear();

//Remove a specific item

localStorage.removeItem("blablabla");

//Add an array as a key value pair:

let impArr = ["nanu", "chipkali", "nakkali"];

localStorage.setItem("amisha", JSON.stringify(impArr));

console.log(JSON.parse(localStorage.getItem("amisha")));
*/

//Exercise

/*

Notes:

1 - Difference between innerText and innerHTML?

ans - In innerHTML, you can use html elements like <b><div> etc.

2- To convert and HTML Collection to an array:

ans - Array.from(Element)

3- LOCAL STORAGE : While working with local Storage, always save the data in the local storage first and then manipulate it accordingly!





*/
let firstBtn = document.querySelector("#first-btn");
let appendedDiv = document.querySelector("#my-row");
let myPara = document.querySelector(".my-para");
let mainCont = document.querySelector(".my-cont-2");
let search = document.querySelector("#search1");
let txtArea = document.getElementById("my-txt-area");
let titleArea = document.getElementById("title-txt-area");

showNotes();

firstBtn.addEventListener("click", function (e) {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }
  notesArr.push(txtArea.value);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  console.log(notesArr);

  let addedNote = document.createElement("div");
  addedNote.classList.add("my-cont-2");
  showNotes();
  txtArea.value = "";
  titleArea.value = "";
});

//Showing Notes

function showNotes() {
  let value = titleArea.value;
  console.log(value);
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }

  let html = "";
  notesArr.forEach((element, index) => {
    html += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${value}</h5>
    <p class="card-text">${element}</p>
    <button id = "${index}" onclick = "deleteNote(this.id)"class="btn btn-primary">Delete Note</button>  
  </div>
</div>`;
  });

  if (notesArr.length != 0) {
    appendedDiv.innerHTML = html;
  } else {
    appendedDiv.innerHTML = `Nothing to show! Use "Add a Note" section to add notes..`;
  }
}

//Deleting Notes

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }
  notesArr.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  showNotes();
}

//Searching functionality:

search.addEventListener("input", function (e) {
  let inputVal = search.value;
  console.log(inputVal);
  let cards = document.querySelectorAll(".card");
  Array.from(cards).forEach((el) => {
    let cardTxt = el.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
  // localStorage.setItem("notes", JSON.stringify(notesArr));
  // showNotes();
});
