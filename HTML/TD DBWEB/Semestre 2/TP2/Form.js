// JavaScript Document



function valeurpardefaut(){
    window.document.Form1.Nom.value="Vermès";
    window.document.Form1.Prenom.value="Mérové";
    window.document.Form1.Prenom.focus();
    window.document.Form1.Nom.focus();
}

function ajouteroption(){
    var a = document.getElementById('autre').value;
    var x = document.createElement("OPTION");
    x.setAttribute("value","Proffesion");
    var t = document.createTextNode(a);
    x.appendChild(t);
    document.getElementById("choixproffesion").appendChild(x);
}

function verifAge(){
    var age= document.getElementById("Age").value;
    var valider="non";
    if (age>0 ){
        if (age<200){
            valider="ok"; 
            alert("Tout est bon !")
        }
    } 
    else{
        valider="non"
    }
    if (valider=="non")
        alert("Verfier l'age")
    return valider;
}

function verifMail(){
}

function VerifSubmit(valider){
    verifAge()
    if (valider != "non") {
            document.getElementById("Form1").submit();
        }
    else {
       alert("Verifier les information ")
    }
}

                
                    
function SendEnter(){
    var x = event.which;
        if (x==13){
            document.getElementById("Form1").submit;
        }
    }
        

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onClick= function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onClick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onClick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}