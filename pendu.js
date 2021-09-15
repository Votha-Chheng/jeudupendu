/*let categories = {
    motsInvariables:["DOUCEMENT", "GENTIMENT", "PARTICULIEREMENT", "FREQUEMMENT", "AILLEURS","BEAUCOUP",
        "DAVANTAGE", "DORENAVANT", "JUSQUE", "MAINTENANT", "PERSONNE", "TANT MIEUX", "VOLONTIERS",
        "TOUJOURS", "SOUDAIN", "POURQUOI", "PAR-DESSUS"],
    prenomsFeminins:["ARABELLA","ANNABELLE","THERESE","GIOVANNA","MELISSANDRE", "APOLLINE",
    "FRANCESCA","BLANDINE","CAROLINE","GWENAELLE","ABIGAELLE","BERANGERE","ANASTASIA","MATHILDE",
    "BENEDICTE"],
    prenomsMasculins:["ALEXANDRE","VALENTIN","CHRISTOPHE","THEOPHILE","MUSTAPHA", "ZACHARIE",
        "FRANCESCO","WILLIAM","RODRIGUE","CORENTIN","CONSTANTIN","AURELIEN","PATRICK","THIBAULT",
        "LEONARD"],
    viLlesDuMonde:["ADDIS-ABEBA","NEW-YORK","LE HAVRE","AMSTERDAM","LOS ANGELES", "AVIGNON",
            "STOCKHOLM","CALCUTTA","ZAGREB","SALAMANQUE","KUALA LUMPUR","BORDEAUX","EDINBOURGH","TOMBOUCTOU",
            "BUENOS AIRES"],
    fruitsLegumes:["MANGUE","POIREAU","PASTEQUE","TOPINAMBOUR","GROSEILLE","CAROTTE","FENOUIL",
                "POMME DE TERRE","AUBERGINE","LENTILLES","POIS CHICHE","CHAMPIGNON","OIGNON","NOIX DE COCO",
                "COURGETTE"]
}*/

//let categories=require("./categorieMots")

let affichageMot = document.querySelector("#mot");
const btn = document.querySelectorAll("#resultat button");
let btnNext = document.querySelector("#next")
let motsUtilises = [];
let motTirage;
let base = document.querySelector("#base"),
    poteau = document.querySelector("#poteau"),
    potence = document.querySelector("#potence"),
    support = document.querySelector("#support"),
    corde = document.querySelector("#corde"),
    tete = document.querySelector("#tete"),
    corps = document.querySelector("#corps"),
    brasGauche = document.querySelector("#bras_gauche"),
    brasDroit = document.querySelector("#bras_droit"),
    jambeGauche = document.querySelector("#jambe_gauche"),
    jambeDroite = document.querySelector("#jambe_droite");
let next = true;
let spanVisible = document.querySelectorAll(".visible");
let nbCoups=11; 


console.log(next);    
while (next){
    deroulementJeu();
    btnNext.addEventListener("click", ()=>{
        btnNext.removeAttribute("data-value");
        btnNext.setAttribute("data-value", "opacity_null");
        for (let i=0 ; i<btn.length ; i++){
            btn[i].removeAttribute("class");
            btn[i].removeAttribute("disabled");
        }
        spanVisible = document.querySelectorAll(".visible");
        effacerMot(spanVisible);
        effacerDessin();   
        deroulementJeu();
    });
}

function effacerMot(tab){
    for(let i = 0 ; i<tab.length; i++){
        tab[i].parentNode.remove();
    }
}

function effacerDessin(){
    base.setAttribute("id", "base");
    poteau.setAttribute("id", "poteau");
    potence.setAttribute("id", "potence");
    support.setAttribute("id", "support");
    corde.setAttribute("id", "corde");
    tete.setAttribute("id", "tete");
    corps.setAttribute("id", "corps");
    brasGauche.setAttribute("id", "bras_gauche");
    brasDroit.setAttribute("id", "bras_droit");
    jambeGauche.setAttribute("id", "jambe_gauche");
    jambeDroite.setAttribute("id", "jambe_droite");
}

function afficherNext(nbCoups,spanVisible, spanHiddenStart){
    if (nbCoups === 0 || spanVisible.length === spanHiddenStart.length){
        btnNext.setAttribute("data-value", "opacity_max");        
    } 
}

function nombreCoups(nb){
    return nb === 11
}

function deroulementJeu(){
   // nombreCoups(nbCoups);    
    next = false;
    afficherTraits(mot = tirageMot(categories.fruitsLegumes), tabMotTirage);
    console.log(mot);
    let spanHiddenStart = document.querySelectorAll(".hidden");
    for(let i = 0 ; i< btn.length ; i++){                           //Pour chaque bouton de lettre.
        btn[i].addEventListener("click", function(){        
                
        btn[i].setAttribute("class", "used");                       //On donne au bouton la classe used (devient gris)
        btn[i].setAttribute("disabled", "disabled");                                
        
        
        
        let spanHidden = document.querySelectorAll(".hidden");
        let spanVisible = document.getElementsByClassName("visible");
            for(let j=0 ; j<spanHidden.length ; j++){
                
                if (btn[i].id === spanHidden[j].textContent){           //Si l'id du bouton cliqué contient est le même que le textContent, alors on passe en classe visible.
                    spanHidden[j].parentNode.removeAttribute("class");  //Le span parentNode de class "tiret" a sa classe supprimée.
                    spanHidden[j].removeAttribute("class");
                    spanHidden[j].setAttribute("class", "visible");
                }      
            }
        if(!mot.includes(btn[i].id)) {
            nbCoups--;
            console.log(nbCoups);
            morceauxPendus(nbCoups);
            }
        afficherNext(nbCoups,spanVisible,spanHiddenStart);
        nombreCoups(nbCoups);
        
        }); 
    } 

};


function morceauxPendus(nb){
    switch(nb){
        case 10 : base.removeAttribute("id");
            break;
        case 9 : poteau.removeAttribute("id");
            break;
        case 8 : potence.removeAttribute("id");
            break;
        case 7 : support.removeAttribute("id");
            break;
        case 6 : corde.removeAttribute("id");
            break;
        case 5 : tete.removeAttribute("id");
            break;
        case 4 : corps.removeAttribute("id");
            break;
        case 3 : brasGauche.removeAttribute("id");
            break;
        case 2 : brasDroit.removeAttribute("id");
            break;
        case 1 : jambeGauche.removeAttribute("id");
            break;
        case 0 : jambeDroite.removeAttribute("id");
            break
        default: return;
    }
};

function tirageMot(categorie){ //Tirage d'un mot au hasard. Chaque mot n'apparaît qu'une fois.
    rangMotTirage = Math.floor(Math.random()*categorie.length);
    motTirage =  categorie[rangMotTirage];
    categorie.splice(rangMotTirage, 1)
    return motTirage;
}

function tabMotTirage(mot){
    let tabMot = mot.split("");
    return tabMot;
}



// Afficher le nombre de traits du mot.
function afficherTraits(mot, callback2){
        
    let arrayMot = callback2(mot);
    
    for(let i = 0 ; i< arrayMot.length ; i++) {
        let span, subSpan;
        
        subSpan = document.createElement("span");
        span = document.createElement("span");
        subSpan.textContent = arrayMot[i];
        span.appendChild(subSpan);
        if(arrayMot[i] === "-") {
            span.setAttribute("class", "signe");
            span.innerHTML = " — ";
        }
        else if(arrayMot[i] === " ") {
            span.setAttribute("data-value", "opacity_null");
            span.innerHTML = "-------";
        }
        else {
            span.setAttribute("class", "tiret");
            subSpan.setAttribute("class", "hidden");
        }
        
        affichageMot.appendChild(span);
    } return mot
}

/*        
// Tant qu'il reste un mot dans le tableau on continue.  
function tirageContinue(tableau){
    do {
        console.log(tirageMot(motsInvariables));     
        } while(tableau.length>1);
    console.log(tirageMot(tableau));
    }*/