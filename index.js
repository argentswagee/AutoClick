var fld = document.getElementById('fldroite');
var flg = document.getElementById('flgauche');
var page = 1;
document.getElementById('rep2').style.display = 'none';
document.getElementById('som').style.display = 'block';
document.getElementById('webdesigner').style.display = 'none';
document.getElementById('shuman').style.display = 'none';
document.getElementById('mac').style.display = 'none';


fld.addEventListener('click', function(){
    if (page === 1){
document.getElementById('f3').style.backgroundColor = '#73736D';
document.getElementById('f2').style.backgroundColor = '#94958B';
document.getElementById('f1').style.backgroundColor = '#73736D';
document.getElementById('body1').style.backgroundColor = '#B7B6C1';
document.getElementById('pr').style.backgroundColor = '#5C5C59';
document.getElementById('pr1').style.backgroundColor = '#4C4C4B';
document.getElementById('pr2').style.backgroundColor = '#4C4C4B';

document.getElementById('sommaire').style.display = 'none';
document.getElementById('Titre').textContent = "Présentation de l'entreprise";
document.getElementById('rep2').style.display = 'block';
document.getElementById('som').style.display = 'none';
document.getElementById('rep2').textContent = "emmanuel.auchet@prestatoo.com";
document.getElementById('rep3').textContent = "Gabriel toreilles (Backend), Emmanuel Auchet (Frontend)     https://torreilles-construction.fr";
document.getElementById('rep4').textContent = "Prestatoo devient LAKS ! A partir du 1er janvier 2023 l'entreprise individuel Emmanuel Auchet anciennement sous le nom commercial 'Prestatoo' devient 'LAKS'.";
document.getElementById('rep4').style.display = 'block';
document.getElementById('rep3').style.display = 'block';
page = 2;
  
} else if (page === 2){
    document.getElementById('som').style.display = 'block';

document.getElementById('f3').style.backgroundColor = '#EB6774';
document.getElementById('f2').style.backgroundColor = '#E37782';
document.getElementById('f1').style.backgroundColor = '#FF8591';
document.getElementById('body1').style.backgroundColor = '#FF9BA5';
document.getElementById('pr').style.backgroundColor = '#EB838D';
document.getElementById('pr1').style.backgroundColor = '#EDB7BC';
document.getElementById('pr2').style.backgroundColor = '#EDB7BC';
document.getElementById('som').textContent = 'Exemple de jeudi';
document.getElementById('Titre').textContent = "Une journée type au sein de l'entreprise";
document.getElementById('rep2').textContent = "9h-10h, Création de logo sur l'outil Adobe Illustrator.";
document.getElementById('rep3').textContent = "10h-12h, Création d'un site à l'aide de l'outil WordPress.";
document.getElementById('rep4').textContent = "14h-16h, début de la création d'un site en le codant moi-même grâce à l'outil Visual Studio Code.";
document.getElementById('rep3').style.display = 'block';
document.getElementById('rep4').style.display = 'block';
page = 3;
} else if (page === 3){
    document.getElementById('f3').style.backgroundColor = '#43CB7C';
document.getElementById('f2').style.backgroundColor = '#43CB7C';
document.getElementById('f1').style.backgroundColor = '#12D061';
document.getElementById('body1').style.backgroundColor = '#75FCAD';
document.getElementById('pr').style.backgroundColor = '#2ecc71';
document.getElementById('pr1').style.backgroundColor = '#43CB7C';
document.getElementById('pr2').style.backgroundColor = '#43CB7C';
document.getElementById('som').style.display = 'none';
document.getElementById('Titre').textContent = "Mon ressenti sur cette expérience.";
document.getElementById('rep3').style.display = 'none';
document.getElementById('rep4').style.display = 'none';
document.getElementById('webdesigner').style.display = 'block';
document.getElementById('webdesigner').style.width = '60%';
document.getElementById('webdesigner').style.left = '20%';

document.getElementById('shuman').style.display = 'none';

document.getElementById('rep2').style.display = 'none';

page = 4;
}else if (page === 4){
    document.getElementById('f3').style.backgroundColor = '#FFC815';
document.getElementById('f2').style.backgroundColor = '#EBB502';
document.getElementById('f1').style.backgroundColor = '#FFC815';
document.getElementById('body1').style.backgroundColor = '#F7DB7E';
document.getElementById('pr').style.backgroundColor = '#FFD13C';
document.getElementById('pr1').style.backgroundColor = '#d4af37';
document.getElementById('pr2').style.backgroundColor = '#d4af37';
document.getElementById('som').textContent = 'Exemple de jeudi';
document.getElementById('Titre').textContent = "Idée pour mon orientation professionnel";
document.getElementById('rep3').style.display = 'none';
document.getElementById('rep4').style.display = 'none';
document.getElementById('rep2').textContent = "";
document.getElementById('shuman').style.display = 'block';
document.getElementById('webdesigner').style.width = '35%';
document.getElementById('webdesigner').style.left = '12%';
document.getElementById('webdesigner').style.display = 'block';
document.getElementById('mac').style.display = 'none';

page = 5;
}else if (page === 5){
    document.getElementById('f3').style.backgroundColor = '#5F3D33';
document.getElementById('f2').style.backgroundColor = '#53352C';
document.getElementById('f1').style.backgroundColor = '#5F3D33';
document.getElementById('body1').style.backgroundColor = '#7F655D';
document.getElementById('pr').style.backgroundColor = '#4a2d23';
document.getElementById('pr1').style.backgroundColor = '#352824';
document.getElementById('pr2').style.backgroundColor = '#352824';
document.getElementById('som').textContent = 'Exemple de jeudi';
document.getElementById('Titre').textContent = "Un objet me faisant penser a mon stage";
document.getElementById('rep2').textContent = "Comme objet me faisant penser à mon stage, je choisis l'ordinateur, car c'est cet objet qui permet de pratiquer les métiers que j'ai découverts. Sans lui, il serait impossible de les pratiquer. Il s'agit aussi de l'objet que j'ai utilisé tout au long de mon stage en utilisant des applications, notamment Visual Studio Code ou Adobe Illustrator.";
document.getElementById('rep3').style.display = 'none';
document.getElementById('rep4').style.display = 'none';
document.getElementById('webdesigner').style.display = 'none';
document.getElementById('shuman').style.display = 'none';
document.getElementById('mac').style.display = 'block';

page = 6;
}else {
    alert("Nothing next !!!");
}})


flg.addEventListener('click', function(){
    if (page === 2){
    document.getElementById('f3').style.backgroundColor = '#4f6d7acb';
    document.getElementById('f2').style.backgroundColor = '#4f6d7acb';
    document.getElementById('f1').style.backgroundColor = '#4f6d7acb';
    document.getElementById('body1').style.backgroundColor = '#C0C5FF';
    document.getElementById('pr').style.backgroundColor = '#6486b9';
document.getElementById('pr1').style.backgroundColor = '#4475be';
document.getElementById('pr2').style.backgroundColor = '#4475be';

document.getElementById('sommaire').style.display = 'block';
document.getElementById('rep2').style.display = 'none';
document.getElementById('som').style.display = 'block';
document.getElementById('Titre').textContent = "Présentation stage de 3éme";
document.getElementById('rep3').style.display = 'none';
document.getElementById('rep4').style.display = 'none';
document.getElementById('som').textContent = 'SOMMAIRE';


    page  = 1;


   }else if (page === 3){
    document.getElementById('f3').style.backgroundColor = '#73736D';
document.getElementById('f2').style.backgroundColor = '#94958B';
document.getElementById('f1').style.backgroundColor = '#73736D';
document.getElementById('body1').style.backgroundColor = '#B7B6C1';
document.getElementById('pr').style.backgroundColor = '#5C5C59';
document.getElementById('pr1').style.backgroundColor = '#4C4C4B';
document.getElementById('pr2').style.backgroundColor = '#4C4C4B';
document.getElementById('rep2').style.display = 'block';
document.getElementById('sommaire').style.display = 'no';
document.getElementById('som').style.display = 'none';
document.getElementById('Titre').textContent = "Présentation de l'entreprise";
document.getElementById('rep2').textContent = "emmanuel.auchet@prestatoo.com";
document.getElementById('rep3').textContent = "Gabriel toreilles (Backend), Emmanuel Auchet (Frontend)     https://torreilles-construction.fr";
document.getElementById('rep4').textContent = "Prestatoo devient LAKS ! A partir du 1er janvier 2023 l'entreprise individuel Emmanuel Auchet anciennement sous le nom commercial 'Prestatoo' devient 'LAKS'.";


page = 2;
   } else if (page === 4){
    document.getElementById('som').style.display = 'block';

document.getElementById('f3').style.backgroundColor = '#EB6774';
document.getElementById('f2').style.backgroundColor = '#E37782';
document.getElementById('f1').style.backgroundColor = '#FF8591';
document.getElementById('body1').style.backgroundColor = '#FF9BA5';
document.getElementById('pr').style.backgroundColor = '#EB838D';
document.getElementById('pr1').style.backgroundColor = '#EDB7BC';
document.getElementById('pr2').style.backgroundColor = '#EDB7BC';
document.getElementById('som').textContent = 'Exemple de jeudi';
document.getElementById('Titre').textContent = "Une journée type au sein de l'entreprise";
document.getElementById('rep2').textContent = "9h-10h, Création de logo sur l'outil Adobe illustrator";
document.getElementById('rep3').textContent = "10h-12h, Création d'un site à l'aide de l'outils Wordpress";
document.getElementById('rep4').textContent = "14h-16h, début de la création d'un site en le codant moi même grâce a l'outils visual studio code ";
document.getElementById('rep3').style.display = 'block';
document.getElementById('rep4').style.display = 'block';
document.getElementById('rep2').style.display = 'block';

page = 3;
document.getElementById('shuman').style.display = 'none';

document.getElementById('webdesigner').style.display = 'none';

}else if (page === 5){
    document.getElementById('f3').style.backgroundColor = '#43CB7C';
document.getElementById('f2').style.backgroundColor = '#43CB7C';
document.getElementById('f1').style.backgroundColor = '#12D061';
document.getElementById('body1').style.backgroundColor = '#75FCAD';
document.getElementById('pr').style.backgroundColor = '#2ecc71';
document.getElementById('pr1').style.backgroundColor = '#43CB7C';
document.getElementById('pr2').style.backgroundColor = '#43CB7C';
document.getElementById('som').style.display = 'none';
document.getElementById('Titre').textContent = "Mon ressenti sur cette éxpérience";
document.getElementById('rep2').textContent = "Je suis content d'avoir pus éxpérimenter ce stage car grace à cette semaine de découverte, j'aie eu l'occasion de découvrir un métier qui m'intéresse et me passionne, j'aie eu l'occasion d'apprendre de nouvelle chose me premettant de m'orienter pour mon avenir professionel.";
document.getElementById('rep3').style.display = 'none';
document.getElementById('rep4').style.display = 'none';
document.getElementById('webdesigner').style.display = 'block';
document.getElementById('shuman').style.display = 'none';
document.getElementById('webdesigner').style.width = '60%';
document.getElementById('webdesigner').style.left = '20%'

page = 4;
}else if (page === 6){
    document.getElementById('f3').style.backgroundColor = '#FFC815';
document.getElementById('f2').style.backgroundColor = '#EBB502';
document.getElementById('f1').style.backgroundColor = '#FFC815';
document.getElementById('body1').style.backgroundColor = '#F7DB7E';
document.getElementById('pr').style.backgroundColor = '#FFD13C';
document.getElementById('pr1').style.backgroundColor = '#d4af37';
document.getElementById('pr2').style.backgroundColor = '#d4af37';
document.getElementById('som').textContent = 'Exemple de jeudi';
document.getElementById('Titre').textContent = "Idée pour mon orientation professionnel";
document.getElementById('rep2').textContent = "Je pense peut être m'orienter vers des milieu informatique tout particuliérement dans le milieu du codage et de la programmation, je pense toute fois tenter de découvrir d'autres milieu  étant donner que je ne veut pas me bloquer tout les accés au autres profession.";
document.getElementById('rep3').style.display = 'none';
document.getElementById('rep4').style.display = 'none';
document.getElementById('webdesigner').style.display = 'block';
document.getElementById('shuman').style.display = 'block';
document.getElementById('webdesigner').style.width = '35%';
document.getElementById('webdesigner').style.left = '12%'
document.getElementById('mac').style.display = 'none';

page = 5;
} })


   

