const inputKurir = document.querySelector('select#inputKurir');
const inputResi = document.querySelector('input#inputResi');
const form = document.querySelector('form');
const containerResult = document.getElementsByClassName('container-result');
const submitButton = document.querySelector('button');

function validateForm(event) {
  event.preventDefault();
  let inputKurirVal = inputKurir.value;
  let inputResiVal = inputResi.value;

  if(inputKurirVal === "unselected") {
    alert("Pilih kurir yang tersedia!");
  }

  
  // window.location.href(`result.html?kurir=${inputKurirVal}&resi=${inputResiVal}`);
  // fetch(`https://api.binderbyte.com/v1/track?api_key=0f1c95cf3162af31ca587c22af06b9f14a45a690e026c4b653aae93f2b4f52ab&courier=${inputKurirVal}&awb=${inputResiVal}`)
  //   .then(response => response.text())
  //   .then(response => document.querySelector('.content').innerHTML = response);
}