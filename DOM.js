
const btnStart = document.querySelector("#start");
const btnChangeTheme = document.querySelector("#choix_themes")
const btnLettres = document.querySelectorAll("#bouton_lettres button");
const retourMenuInThemes = document.querySelector("#changer_themes .retour button");
const retourMenuInAffichageJeu = document.querySelector("#retour_menu");
const retourMenuInFin = document.querySelector("#retour_menu_fin");
const btnTheme = document.querySelectorAll("#choix_theme button");
const btnHome = document.querySelector("#retour_menu svg path");
let btnThemeSelected = document.querySelector("#choix_theme .selected");
const btnNext = document.querySelector("#next");
const affichageMotADeviner = document.querySelector('#mot_a_deviner');
const btnHomeFin = document.querySelector("#retour_menu_fin svg path");


const messageFin = document.querySelector("#message_fin");
const footer = document.querySelector("footer");
let win = document.querySelectorAll(".win");
let miss = document.querySelectorAll(".miss");



const base = document.querySelector("#base");
const corps = document.querySelector("#corps");
const support = document.querySelector("#support");
const poteau = document.querySelector("#poteau");
const tete = document.querySelector("#tete");
const corde = document.querySelector("#corde");
const bras_gauche = document.querySelector("#bras_gauche");
const bras_droit = document.querySelector("#bras_droit");
const jambe_droite = document.querySelector("#jambe_droite");
const jambe_gauche = document.querySelector("#jambe_gauche");
const potence = document.querySelector("#potence");


let pageMenu = document.querySelector("#menu");
let finJeu = document.querySelector("#fin_jeu");
let pageAffichageJeu = document.querySelector("#container_affichage_jeu");
let pageThemes = document.querySelector("#page_themes");
let affichageCategorieChoisi = document.querySelector("#nom_theme h2");
let affichageMot = document.querySelector("#mot_a_deviner");


console.log(finJeu);