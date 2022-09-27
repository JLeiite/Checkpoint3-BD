function toastClose() {
    var c = document.getElementById("toastTrigger");
    if (c.style.display === "block") {
      c.style.display = "none";
    } else {
      c.style.display = "block";
    }
  }

function toastID() {
    var x = document.getElementById("toastTrigger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function spanText1() {
    let txt = "Novo cliente adicionado.";
    document.getElementById("demo").innerHTML = txt;
    }

function spanText2() {
    let txt = "Nova categoria adicionada.";
    document.getElementById("demo").innerHTML = txt;
    }
function spanText3() {
    let txt = "Novo produto adicionado.";
    document.getElementById("demo").innerHTML = txt;
    }
function spanText4() {
    let txt = "Novo pedido adicionado.";
    document.getElementById("demo").innerHTML = txt;
    }
function spanText5() {
    let txt = "Horário de pedido selecionado.";
    document.getElementById("demo").innerHTML = txt;
    }
function spanText6() {
    let txt = "Endereço do cliente atualizado.";
    document.getElementById("demo").innerHTML = txt;
    }
function spanText7() {
    let txt = "Quantidade de produtos em combos selecionado.";
    document.getElementById("demo").innerHTML = txt;
    }
function spanText8() {
    let txt = "Valores totais de vendas por cliente selecionado.";
    document.getElementById("demo").innerHTML = txt;
    }