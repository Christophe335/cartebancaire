const logoM = document.getElementById('logo1');
const logoV = document.getElementById('logo2');
const logoB = document.getElementById('logo3');
const ajoutNom = document.getElementById('input_nom');
const ajouter1 = document.getElementById('number_one');
const ajouter2 = document.getElementById('number_two');
const ajouter3 = document.getElementById('number_three');
const ajouter4 = document.getElementById('number_four');
const rotation2 = document.getElementById('saisie');
const afficheM = document.getElementById('mois');
const afficheA = document.getElementById('annee');
const rotation = document.getElementById('cvc');
const interior = document.getElementById('cartei');

// changement logo de type paiement
logoM.addEventListener('click', function(){
    document.getElementById('affLog1').src="images/Logo_MasterCard.svg";
    document.getElementById('affLog2').src="images/Logo_MasterCard.svg";
});
logoV.addEventListener('click', function(){
    document.getElementById('affLog1').src="images/Logo_Visa.svg";
    document.getElementById('affLog2').src="images/Logo_Visa.svg";
});
logoB.addEventListener('click', function(){
    document.getElementById('affLog1').src="images/Logo_Carte_Bleue.svg";
    document.getElementById('affLog2').src="images/Logo_Carte_Bleue.svg";
});

// affiche du nom et mise en majuscules et passage cellule suivante
ajoutNom.addEventListener('keyup', function(){
    interior.style.transform = 'rotateY(0deg)';
    document.getElementById('case_nom').innerHTML = document.getElementById('input_nom').value.toUpperCase();
});
ajoutNom.addEventListener('keypress', function(e){
    if (e.key === "Enter"){
        document.code['number_one'].focus();
    };
});

// affichage du code 4 fois 4 chiffres
ajouter1.addEventListener('keyup', function(){
    interior.style.transform = 'rotateY(0deg)';
    document.getElementById('part1').innerHTML = document.getElementById('number_one').value;
    case_nom.style.background = "none";
    if (this.value.length == 4){
        document.code['number_two'].focus();
    }
});

ajouter2.addEventListener('keyup', function(){
    interior.style.transform = 'rotateY(0deg)';
    document.getElementById('part2').innerHTML = document.getElementById('number_two').value;
    part1.style.background = "none";
    if (this.value.length == 4){
        document.code['number_three'].focus();
    }
});

ajouter3.addEventListener('keyup', function(){
    interior.style.transform = 'rotateY(0deg)';
    document.getElementById('part3').innerHTML = document.getElementById('number_three').value;
    part2.style.background = "none";
    if (this.value.length == 4){
        document.code['number_four'].focus();
    }
});

ajouter4.addEventListener('keyup', function(){
    interior.style.transform = 'rotateY(0deg)';
    document.getElementById('part4').innerHTML = document.getElementById('number_four').value;
    part3.style.background = "none";
    if (this.value.length == 4){
        document.code['mois'].focus();
        part4.style.background = "none";
    }
});


// afficher mois 
afficheM.addEventListener('mouseout', function(){
    interior.style.transform = 'rotateY(0deg)';
    document.getElementById('affichemois').innerHTML = document.getElementById('mois').value;
    document.code['annee'].focus();
    affichemois.style.background = "none";
});
// afficher date 
afficheA.addEventListener('mouseout', function(){
    document.getElementById('afficheannee').innerHTML = document.getElementById('annee').value;
    document.code['cvc'].focus();
    afficheannee.style.background="none";
});

// effacement du fond année quand on arrive sur cvc
document.getElementById('cvc').addEventListener('mouseenter', function(){
}) ;


// rotation de la carte quand la souris est dans la case CVC
cvc.addEventListener('focus', function(){
    interior.style.transform = 'rotateY(180deg)';
    document.getElementById('cvc').value="";
});
cvc.addEventListener('keyup', function(){
    document.getElementById('affichecode').innerHTML = document.getElementById('cvc').value;
    if (this.value.length == 4){
        document.code['bouton_payer'].focus();
        
    }
});

// rotation après le CVC - clic n'importe ou sur la page
// permet aussi de s'assurer d'être sur la bonne face quand on click nom, numéro et date
rotation2.addEventListener('click', function(){
    interior.style.transform = 'rotateY(0deg)';
});

// effacement des données 1 seconde après avoir cliqué payer et message merci
document.getElementById('bouton_payer').addEventListener('click', function(){
    setTimeout(efface, 2000)
    let div = document.createElement('div');
    div.innerText="Merci";
    div.style.color = "#661600";
    div.style.fontSize ="24px";
    div.style.textAlign ="center";
    div.style.marginTop ="-50px";
    document.body.appendChild(div);
});
function efface() {
    location.reload();
}; 
