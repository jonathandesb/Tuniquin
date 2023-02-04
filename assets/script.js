function clickAutomotivoMobile() {
  if (cardAutoMobile.style.display == "block"){
    cardAutoMobile.style.display = "flex"
  } else {
    cardAutoMobile.style.display = "flex"
    cardEletroMobile.style.display = "none"
  }
 }

 function clickEletricoMobile() {
  if (cardEletroMobile.style.display == "flex"){
    cardEletroMobile.style.display = "flex"
  } else {
    cardEletroMobile.style.display = "flex"
    cardAutoMobile.style.display = "none"
  }
 }



 function clickAutomotivoDesktop() {
  if (cardAutoDesktop.style.display == "block"){
    cardAutoDesktop.style.display = "flex"
  } else {
    cardAutoDesktop.style.display = "flex"
    cardEletroDesktop.style.display = "none"
  }
 }

 function clickEletricoDesktop() {
  if (cardEletroDesktop.style.display == "flex"){
    cardEletroDesktop.style.display = "flex"
  } else {
    cardEletroDesktop.style.display = "flex"
    cardAutoDesktop.style.display = "none"
  }
 }