const  btn=document.querySelectorAll(".cal");
var contenu=document.getElementById("resultat");
var content_resultat=document.getElementById("azzer");
 // active input
contenu.disabled=false;
console.log( contenu.ariaDisabled)
 for(let i=0;i<btn.length;i++){
  

    if(i==0 ){
        btn[i].addEventListener("click",function(){
            let  tmp=contenu.value                    
            contenu.value=tmp.substring(0,tmp.length-1);
        });
    }

    if(i==9 ){
        btn[i].addEventListener("click",function(){
            let valeur=contenu.value;
          let str=valeur.substring(valeur.length-1,valeur.length);
            
            if(str!="+" && str!="-" && str!="*" && str!="/" && str!="")
            contenu.value=valeur+"*(";
            else 
            contenu.value=valeur+event.target.innerText;
        })
        
    }
    if(i==17 ){
        btn[i].addEventListener("click",function(){
          let tmp=contenu.value;
          let tmp1=content_resultat.innerHTML;
          //console.log("tmp1 = "+tmp1);
         console.log("i = "+i );
          if(tmp[tmp.length-1]!="!" && tmp1==false){
           contenu.value=tmp+"!";
           content_resultat.innerHTML=fact(tmp);
          }
        }); 
    }

    if(i==1){
        btn[i].addEventListener("click",function(){
        contenu.value="";
        content_resultat.innerHTML="";
        });
    }
    else if(i!=9 && i!=0 && i!=17 && i!=1){
btn[i].addEventListener("click",function(){
let tmp;console.log("i = "+i);
 tmp=contenu.value;
 if(tmp.length<18)
    contenu.value=tmp+
    event.target.innerText;
const a= contenu.value;

if( a.substring(a.length-2,a.length)=="++" || a.substring(a.length-2,a.length)=="--" || a.substring(a.length-2,a.length)=="//" || a.substring(a.length-2,a.length)=="**") 
contenu.value=a.substring(0,a.length-1);
if(a.substring(a.length-2,a.length)=="+-" || a.substring(a.length-2,a.length)=="-+")           
contenu.value=a.substring(0,a.length-2)+"-";  

//pour ignorer l'affichage de " = "
if(btn[i].innerText == "=" ) 
       contenu.value=tmp.substring(0,tmp.length);
else if(content_resultat.innerHTML!=false && btn[i].innerHTML!="+" && btn[i].innerHTML!="-" && btn[i].innerHTML!="/" && btn[i].innerHTML!="*"){
contenu.value=event.target.innerText;
content_resultat.innerHTML="";
}
});
                        }
if(btn[i].innerText=="="){
    btn[i].addEventListener("click",function(){
        let tmp=contenu.value;
        content_resultat.innerHTML=Math.round(eval(tmp)*10000000000)/10000000000;
        })
    }
//Si on a le resultat et on veut le additionner ou (- |/|*) on le transfert au ecran d'operation  
btn[i].addEventListener("click",function(){
let res=content_resultat.innerHTML;

if(res != false && (  btn[i].innerHTML=="+" || btn[i].innerHTML=="-" || btn[i].innerHTML=="*" || btn[i].innerHTML=="/" || btn[i].innerHTML=="(")){

if(btn[i].innerHTML=="-")
contenu.value=res+"-";
if(btn[i].innerHTML=="+")
contenu.value=res+"+";
if(btn[i].innerHTML=="*")
contenu.value=res+"*";
if(btn[i].innerHTML=="/")
contenu.value=res+"/";
if(btn[i].innerHTML=="(")
contenu.value=res+"*(";

content_resultat.innerHTML="";
}
});
 }

function fact(nbr){
var i, nbr, f = 1;
for(i = 1; i <= nbr; i++)  
{
f = f * i;   // ou f *= i;
}  
return f;
}

