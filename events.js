window.addEventListener("load", ()=>{
    pageMenu.setAttribute("class", "visible");
    pageAffichageJeu.setAttribute("class", "hidden");
    pageThemes.setAttribute("class", "hidden");
    finJeu.setAttribute("class", "hidden") ;
    });


btnChangeTheme.addEventListener("click", ()=>{
    pageMenu.setAttribute("class", "hidden");
    pageAffichageJeu.setAttribute("class", "hidden");
    pageThemes.setAttribute("class", "visible");
    pressBtnTheme=true;
    console.log(pressBtnTheme);
    choixBoutonTheme();
});

retourMenuInThemes.addEventListener("click", ()=>{
    pageMenu.setAttribute("class", "visible");
    pageAffichageJeu.setAttribute("class", "hidden");
    pageThemes.setAttribute("class", "hidden");
    
});

retourMenuInAffichageJeu.addEventListener("click", ()=>{
    if(confirm("Êtes-vous sûr de vouloir abandonner?")) window.location.reload();
});

retourMenuInAffichageJeu.addEventListener("mousedown", ()=>{
    btnHome.setAttribute("fill", "purple");
    
});

retourMenuInAffichageJeu.addEventListener("mouseup", ()=>{
    btnHome.setAttribute("fill", "black");
});

retourMenuInFin.addEventListener("click", ()=>{
    window.location.reload();
});

retourMenuInFin.addEventListener("click", ()=>{
    btnHomeFin.setAttribute("fill", "purple");
});

retourMenuInFin.addEventListener("click", ()=>{
    btnHomeFin.setAttribute("fill", "purple");
});

const choixBoutonTheme = ()=>{
    for (let i=0 ; i<btnTheme.length ; i++){
        btnTheme[i].addEventListener("click",(event)=>{    
            btnThemeSelected.removeAttribute("class");
            event.target.setAttribute("class", "selected");
            btnThemeSelected = event.target;

            
        });    
    } 
}




(function () {
    class DataJeu {
        constructor(tabCategorie, selectedCategorie, nbCoups, manche){
            this.tabCategorie = tabCategorie;
            this.selectedCategorie = selectedCategorie;
            this.nbCoups = nbCoups;
            this.manche = manche;    
        }
    }
        
    let listeManche = [false, false, false, false, false, false, false, false, false, false]
    let pressNext = 1;
    let pressBtnTheme = false;

    //if(pressBtnTheme){
        
        btnStart.addEventListener("click",()=>{  
            let themeChoisi = document.querySelector("#choix_theme .selected");
            console.log(themeChoisi);
            dataManche = new DataJeu(themeChoisi.id, choixCategorie(themeChoisi.id), 11, 1);
            pageMenu.setAttribute("class", "hidden");
            pageAffichageJeu.setAttribute("class", "visible");
            pageThemes.setAttribute("class", "hidden");
            disparitionDessinPendu();
            affichageCategorieChoisi.innerHTML = dataManche.tabCategorie;
            if(manchePendu(pressNext, listeManche)[0]){
                manche(dataManche, dataManche.manche);
            } else return ;
            
        });        
        btnNext.addEventListener("click", ()=>{            
            pressNext++;
            effacerDivTiret();
            affichageMotADeviner.style.backgroundColor = "salmon"
            disparitionDessinPendu();
            ableToutesLesLettres();
            btnNext.classList.toggle("transparent");   
            if (pressNext===2){
                if (manchePendu(pressNext, listeManche)[1] && !manchePendu(pressNext, listeManche)[0]){
                    dataManche2 = new DataJeu(dataManche.tabCategorie,dataManche.selectedCategorie,11,pressNext);
                    manche(dataManche2, dataManche2.manche);
                } else return ;

            } else if (pressNext===3){
                if (manchePendu(pressNext, listeManche)[2] && !manchePendu(pressNext, listeManche)[1]) {
                    dataManche3 = new DataJeu(dataManche2.tabCategorie,dataManche2.selectedCategorie,11,pressNext);
                    manche(dataManche3, dataManche3.manche);
                } else return ;

            } else if (pressNext===4){
                if(manchePendu(pressNext, listeManche)[3] && !manchePendu(pressNext, listeManche)[2]){
                    dataManche4 = new DataJeu(dataManche3.tabCategorie,dataManche3.selectedCategorie,11,pressNext);
                    manche(dataManche4, dataManche4.manche);
                } else return ;
            } else if (pressNext===5){
                if (manchePendu(pressNext, listeManche)[4] && !manchePendu(pressNext, listeManche)[3]){
                    dataManche5 = new DataJeu(dataManche4.tabCategorie,dataManche4.selectedCategorie,11,pressNext);
                    manche(dataManche5, dataManche5.manche);
                } else return ;
            }
            else if (pressNext===6){
                if (manchePendu(pressNext, listeManche)[5] && !manchePendu(pressNext, listeManche)[4]) {
                    dataManche6 = new DataJeu(dataManche5.tabCategorie,dataManche5.selectedCategorie,11,pressNext);
                    manche(dataManche6, dataManche6.manche);
                } else return ;

            } else if (pressNext===7){
                if(manchePendu(pressNext, listeManche)[6] && !manchePendu(pressNext, listeManche)[5]){
                    dataManche7 = new DataJeu(dataManche6.tabCategorie,dataManche6.selectedCategorie,11,pressNext);
                    manche(dataManche7, dataManche7.manche);
                } else return ;
            } else if (pressNext===8){
                if (manchePendu(pressNext, listeManche)[7] && !manchePendu(pressNext, listeManche)[6]){
                    dataManche8 = new DataJeu(dataManche7.tabCategorie,dataManche7.selectedCategorie,11,pressNext);
                    manche(dataManche8, dataManche8.manche);
                } else return ;
            }
            else if (pressNext===9){
                if(manchePendu(pressNext, listeManche)[8] && !manchePendu(pressNext, listeManche)[7]){
                    dataManche9 = new DataJeu(dataManche8.tabCategorie,dataManche8.selectedCategorie,11,pressNext);
                    manche(dataManche9, dataManche9.manche);
                } else return ;
            } else if (pressNext===10){
                btnNext.innerHTML = "<button>Cliquez ici</button>"
                if (manchePendu(pressNext, listeManche)[9] && !manchePendu(pressNext, listeManche)[8]){
                    dataManche10 = new DataJeu(dataManche9.tabCategorie,dataManche9.selectedCategorie,11,pressNext);
                    manche(dataManche10, dataManche10.manche);
                } else return ;
            } if (pressNext===10){
                btnNext.addEventListener("click", ()=>{
                    let tabMotsTrouves = document.querySelectorAll("#marks .cercle .miss.hidden");//nombre mots trouvés
                    console.log(tabMotsTrouves);
                    let nbMotsTrouves = tabMotsTrouves.length;
                    pageAffichageJeu.removeAttribute("class");
                    pageAffichageJeu.setAttribute("class", "hidden");
                    finJeu.removeAttribute("class");
                    finJeu.setAttribute("class", "visible"); 
                    messageFin.textContent = `Vous avez deviné ${nbMotsTrouves} mots sur 10.`;
                })
                
            }
        });    
   // }
})();

//---------------------------------------------------------------------



function manche(dataObjet, manche){
    finManche=false;
    let mot = tirageMot(dataObjet.selectedCategorie);
    console.log(mot);
    afficherTraits(mot);
    cliqueBoutonLettre();
    let tabSpanTransparent = document.querySelectorAll(".tiret .transparent");
    let tabSpanApparent =[];
    for(let i = 0 ; i< btnLettres.length ; i++){ //Pour chaque bouton de lettre.     
        
        btnLettres[i].addEventListener("click", ()=>{
            if (tabSpanApparent){
                for(let j=0 ; j<tabSpanTransparent.length ; j++){
                         
                    if (btnLettres[i].id === tabSpanTransparent[j].textContent){          //Si l'id du bouton cliqué contient est le même que le textContent, alors on passe en classe visible.
                        tabSpanTransparent[j].parentNode.removeAttribute("class");        //Le span parentNode de class "tiret" a sa classe supprimée.
                        tabSpanTransparent[j].parentNode.setAttribute("class", "nonTiret")  
                        tabSpanTransparent[j].removeAttribute("class");
                        tabSpanTransparent[j].setAttribute("class", "apparent");
                        tabSpanApparent.push(tabSpanTransparent[j]);
                        console.log(tabSpanApparent);
                    
                    } 
                    
                    
                }
                if( tabSpanApparent.length === tabSpanTransparent.length){
                    win[manche-1].classList.toggle("hidden");
                    affichageMotADeviner.style.backgroundColor = "green";
                    finManche=true ;

                }   
            
                if(!mot.includes(btnLettres[i].id)){ 
                    dataObjet.nbCoups--;
                    console.log(dataObjet.nbCoups);                
                    morceauxPendus(dataObjet.nbCoups);
            }
                if(dataObjet.nbCoups===0){
                    console.log("Je suis le bug");
                    miss[manche - 1].classList.toggle("hidden");
                    affichageMotADeviner.style.backgroundColor = "red"
                    finManche=true
                    
                    }
                if(finManche===true) {
                    console.log("FinManche a marché.");
                    btnNext.classList.toggle("transparent");
                    disableToutesLesLettres(finManche);
                    dataObjet.nbCoups = null;
                    tabSpanApparent=null;
                } console.log(finManche) 
            }
 
            


        });
        
        
        
    }
} 


