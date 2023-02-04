function clickAutomotivo() {
  if (cardAuto.style.display == "block"){
    cardAuto.style.display = "flex"
  } else {
    cardAuto.style.display = "flex"
    cardEletro.style.display = "none"
  }
 }

 function clickEletrico() {
  if (cardEletro.style.display == "flex"){
    cardEletro.style.display = "flex"
  } else {
    cardEletro.style.display = "flex"
    cardAuto.style.display = "none"
  }
 }