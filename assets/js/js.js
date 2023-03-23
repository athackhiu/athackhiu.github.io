var menu = document.querySelector('.menu');
var nav = document.querySelector('.nav');

menu.addEventListener('click', () => {

    if(menu.className == 'menu')
    {
        nav.classList.add('navAfter')
        menu.classList.add('menuAfter');
    }else{
        menu.classList.remove('menuAfter')
        nav.classList.remove('navAfter');
    }
});

const titre1 = document.querySelector(".titre1");
const titre2 = document.querySelector(".titre2");

const contexte = document.querySelector(".contexte");
const detail = document.querySelector(".detail");
const contenu1 = document.querySelector(".contenu1");
const contenu2 = document.querySelector(".contenu2");
const contenu3 = document.querySelector(".contenu3");

const imagePlus = document.querySelector(".imagePlus");
const sary = document.querySelector(".sary");
const slogan = document.querySelector(".slogan");
const miniInformation = document.querySelector(".miniInformation");


const titre4 = document.querySelector(".titre4");

const titre4H1 = document.querySelector(".titre4H1");
const titre4p = document.querySelector(".titre4P");

var footer = document.querySelector('footer');
var section4Right = document.querySelector('.section4Right');
var absolute = document.querySelector('.absolute');

var section4_2 = document.querySelectorAll('.section4_2');
var section5_1 = document.querySelector('.section5_1');

var titre1_6 = document.querySelector('.titre1_6');
var titre2_6 = document.querySelector('.titre2_6');
var titre3_6 = document.querySelector('.titre3_6');
var ligne6 = document.querySelector('.ligne6');
var theme6 = document.querySelector('.theme6');


window.addEventListener('scroll',move)

function move()
{
    const declechementBas = window.innerHeight / 5 * 4 ;
    const heightTitre1 = titre1.getBoundingClientRect().top;
    const heightTitre2 = titre2.getBoundingClientRect().top;
    const heightContexte = contexte.getBoundingClientRect().top;
    const heightimagePlus = imagePlus.getBoundingClientRect().top;
    const heightminiInformation = miniInformation.getBoundingClientRect().top;
    const heighttitre4 = titre4.getBoundingClientRect().top;
    const heightfooter = footer.getBoundingClientRect().top;
    const heightsection4Right = section4Right.getBoundingClientRect().top;
    const heightsection5_1 = section5_1.getBoundingClientRect().top;
    const heighttitre1_6 = titre1_6.getBoundingClientRect().top;


    for (let i = 0; i < section4_2.length; i++) 
    {
        const heightsection4_2 = section4_2[i].getBoundingClientRect().top;

        if(heightsection4_2 < declechementBas)
        {
            section4_2[i].classList.add('section4_2After');
        }else{
            section4_2[i].classList.remove('section4_2After');
        }
    }


// ---------------------Titre1-------------------------------
    if(heightTitre1 < declechementBas)
    {
        titre1.classList.add('titre1After');
    }else{
        titre1.classList.remove('titre1After')
    }
// ----------------------Titre2------------------------------
    if(heightTitre2 < declechementBas)
    {
        titre2.classList.add('titre2After');
    }else{
        titre2.classList.remove('titre2After')
    }
// ----------------------Contexte------------------------------
    if(heightContexte < declechementBas)
    {
        contenu1.classList.add('conteu1After');
        contenu2.classList.add('conteu2After');
        contenu3.classList.add('conteu3After');
        contexte.classList.add('contexteAfter');
        detail.classList.add('titre2After');
    }else{
        contenu1.classList.remove('conteu1After');
        contenu2.classList.remove('conteu2After');
        contenu3.classList.remove('conteu3After');
        contexte.classList.remove('contexteAfter');
        detail.classList.remove('titre2After');
    }
// ----------------------ImagePlus------------------------------
    if(heightimagePlus < declechementBas)
    {
        sary.classList.add('saryAfter');
        imagePlus.classList.add('imagePlusAfter');
        slogan.classList.add('sloganAfter');
    }else{
        sary.classList.remove('saryAfter');
        imagePlus.classList.remove('imagePlusAfter');
        slogan.classList.remove('sloganAfter');
    }

// ----------------------miniInformation------------------------------

    if(heightminiInformation < declechementBas)
    {
        miniInformation.classList.add('miniInformationAfter');
    }else{
        miniInformation.classList.remove('miniInformationAfter');
    }
//=-------------------------------------------------------------
    if(heighttitre4 < declechementBas)
    {
        titre4p.classList.add('titre4PAfter');
        titre4H1.classList.add('titre4H1After');
    }else{
        titre4p.classList.remove('titre4PAfter');
        titre4H1.classList.remove('titre4H1After');
    }
//-------------footer-----------------------------------
    if(heightfooter < declechementBas)
    {
        footer.classList.add('footerAfter');
        document.addEventListener('mousemove',function (event) {
           var x = event.clientX;
           var y = event.clientY;

           if(x-50 > 0 && x-50 < 1200)
           {
               left = absolute.style.left = x-50 +"px";
           }
        //    absolute.style.height = y + "px";

           console.log("x = "  + absolute.style.left);
           console.log("y = "  + absolute.style.height );
        });
    }else{
        footer.classList.remove('footerAfter');
    }
//-------------------------------------------------------------
    if(heightsection4Right < declechementBas)
    {
        section4Right.classList.add('section4RightAfter');
    }else{
        section4Right.classList.remove('section4RightAfter');
    }
    
//--------------------------------------------------------------
    if(heightsection5_1 < declechementBas)
    {
        section5_1.classList.add('section5_1After');
    }else{
        section5_1.classList.remove('section5_1After');
    }
//--------------------------------------------------------------
if(heighttitre1_6 < declechementBas)
{
    titre1_6.classList.add('titre1_6After');
    titre2_6.classList.add('titre2_6After');
    titre3_6.classList.add('titre2_6After');
    ligne6.classList.add('ligne6After');
    theme6.classList.add('theme6After');
}else{
    titre1_6.classList.remove('titre1_6After');
    titre2_6.classList.remove('titre2_6After');
    titre3_6.classList.remove('titre2_6After');
    ligne6.classList.remove('ligne6After');
    theme6.classList.remove('theme6After');
}
}