

//Renvoie le tableau de la catégorie choisie.
const choixCategorie = (id)=>{
    let themeChoisi;

    switch(id){
        case "Mots invariables" : themeChoisi = categories.motsInvariables;
            break;
        case "Prénoms Féminins" : themeChoisi = categories.prenomsFeminins;
            break;
        case "Prénoms Masculins" : themeChoisi = categories.prenomsMasculins;
            break;
        case "Fruits & légumes" : themeChoisi = categories.fruitsLegumes;
            break;
        case "Villes du monde" : themeChoisi = categories.villesDuMonde;
            break;        
    } 
        
    return themeChoisi;
};

//Tirage d'un mot au hasard. Chaque mot n'apparaît qu'une fois.
const tirageMot = (tabCategorie)=>{
    let rangMotTirage = Math.floor(Math.random()*tabCategorie.length);
    let motTirage =  tabCategorie[rangMotTirage];
    tabCategorie.splice(rangMotTirage, 1);
    return motTirage;
};

const manchePendu = (nb, tableauBool)=>{
    newTableau = tableauBool.map((element) => element = false);
    newTableau[nb-1] = true;
    return newTableau;     
}

const tabMotTirage = (mot)=>{
    let tabMot = mot.split("");
    return tabMot;
}


const afficherTraits = (mot)=>{     
    let arrayMot = tabMotTirage(mot);        
    for(let i = 0 ; i< arrayMot.length ; i++) {
        let div, subSpan;
            
        subSpan = document.createElement("span");
        div = document.createElement("div");

        div.appendChild(subSpan);

        if(arrayMot[i] === "-") {
            div.setAttribute("class", "nonTiret");
            subSpan.textContent = " — ";
            subSpan.setAttribute("class","apparent");
        }
        else if(arrayMot[i] === " ") {
            div.setAttribute("class", "nonTiret");
            subSpan.textContent ="         ";
        }
        else {
            subSpan.textContent = arrayMot[i];
            div.setAttribute("class","tiret");
            subSpan.setAttribute("class","transparent");       
        
        }affichageMot.appendChild(div);
    };
}

const effacerDivTiret = ()=>{
    let arrayDivTiret = document.querySelectorAll("#mot_a_deviner div");
    for(let i =0 ; i<arrayDivTiret.length ; i++)
        arrayDivTiret[i].remove();
}

const disparitionDessinPendu = ()=>{
    base.setAttribute("class", "transparent");
    poteau.setAttribute("class", "transparent");
    potence.setAttribute("class", "transparent");
    support.setAttribute("class", "transparent");
    corde.setAttribute("class", "transparent");
    tete.setAttribute("class", "transparent");
    corps.setAttribute("class", "transparent");
    bras_gauche.setAttribute("class", "transparent");
    bras_droit.setAttribute("class", "transparent");
    jambe_gauche.setAttribute("class", "transparent");
    jambe_droite.setAttribute("class", "transparent");
}

const disableToutesLesLettres = (affirmation)=>{
    if (affirmation){
        for (let i=0 ; i<btnLettres.length ; i++){
            btnLettres[i].setAttribute("class","used");
            btnLettres[i].disabled = true
        }
    }
}

const ableToutesLesLettres= (affirmation)=>{
    if (!affirmation){
        for (let i=0 ; i<btnLettres.length ; i++){
            btnLettres[i].classList.remove("used");
            btnLettres[i].disabled = false;
        }
    }
}

const morceauxPendus = (nb)=>{
    switch(nb){
        case 10 : base.removeAttribute("class");
            break;
        case 9 : poteau.removeAttribute("class");
            break;
        case 8 : potence.removeAttribute("class");
            break;
        case 7 : support.removeAttribute("class");
            break;
        case 6 : corde.removeAttribute("class");
            break;
        case 5 : tete.removeAttribute("class");
            break;
        case 4 : corps.removeAttribute("class");
            break;
        case 3 : bras_gauche.removeAttribute("class");
            break;
        case 2 : bras_droit.removeAttribute("class");
            break;
        case 1 : jambe_gauche.removeAttribute("class");
            break;
        case 0 : jambe_droite.removeAttribute("class");
            break
        default: return;
    }
};

const deroulementJeu = ()=>{   
    afficherTraits(mot = tirageMot(categories.fruitsLegumes), tabMotTirage);
    console.log(mot);
    let spanHiddenStart = document.querySelectorAll(".hidden");
    cliqueBoutonLettre(); 
    let spanHidden = document.querySelectorAll(".transparent");
    //let spanVisible = document.getElementsByClassName("apparent");
        for(let j=0 ; j<spanHidden.length ; j++){
                
            if (btn[i].id === spanHidden[j].textContent){           //Si l'id du bouton cliqué contient est le même que le textContent, alors on passe en classe visible.
                spanHidden[j].parentNode.removeAttribute("class");  //Le span parentNode de class "tiret" a sa classe supprimée.
                spanHidden[j].removeAttribute("class");
                spanHidden[j].setAttribute("class", "apparent");
            }      
        }
};

const cliqueBoutonLettre = ()=>{
    for(let i = 0 ; i< btnLettres.length ; i++){                           //Pour chaque bouton de lettre.
        btnLettres[i].addEventListener("click", function(){                         
        btnLettres[i].setAttribute("class", "used");                       //On donne au bouton la classe used (devient gris)
        btnLettres[i].setAttribute("disabled", "disabled"); 
        });  
    }
};


const effacerMot = (tab)=>{
    for(let i = 0 ; i<tab.length; i++){
        tab[i].parentNode.remove();
    }
}

//Efface le pendu.
const effacerDessin = ()=>{
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








