function clickAutomotivo() {
  if (cardAutoMobile.style.display == "block"){
    cardAutoMobile.style.display = "flex"
  } else {
    cardAutoMobile.style.display = "flex"
    cardEletroMobile.style.display = "none"
  }
 }

 function clickEletrico() {
  if (cardEletroMobile.style.display == "flex"){
    cardEletroMobile.style.display = "flex"
  } else {
    cardEletroMobile.style.display = "flex"
    cardAutoMobile.style.display = "none"
  }
 }