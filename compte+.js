
input_t1 = document.getElementById("t1") 
input_t2 = document.getElementById("t2") 
draw = document.getElementById("draw")
draw2 = document.getElementById("draw2")
draw3 = document.getElementById("draw3")
draw4 = document.getElementById("draw4")
var tex = "";


const button = document.getElementById('button');

button.addEventListener('click', event => {
	
	t1 = input_t1.value
	t2 = input_t2.value	
	
	// tp1
	// afficher : 
	//   			text1 espace text2 
	tex = tex + t1 + " " + t2
	draw.innerHTML=tex
	
	// tp2
	// afficher : 
	//   			text1 espace taille du text1  	
	//   			text2 espace taille du text2 
 	
	tex = t1 + " " + t1.length + "<br>" 
	tex = tex + t2 + " " + t2.length 
	
	draw2.innerHTML=tex
	
	// tp3 
	// afficher : 	
	// 				la permiere case de texte1 puis texte2
	// 				la deuxieme case de texte1 puis texte2
	// 				ainsi de sute
	// 				la derniere case de texte1 puis texte2	
	tex = ""
	
	for (n=0;n<t1.length ; n++) {
		
		tex = tex + t1[n] +t2 + "<br>"
	}
		
	draw3.innerHTML=tex
	
	// tp4
	// afficher : 	
	// 				la permiere case de texte1 puis la permiere case de texte2
	// 				la permiere case de texte1 puis la deuxieme case de texte2	
	// 				ainsi de sute	
	// 				la permiere case de texte1 puis la derniere case de texte2		
	// 				la deuxieme case de texte1 puis la permiere case de texte2
	// 				la deuxieme case de texte1 puis la deuxieme case de texte2	
	// 				ainsi de sute
	// 				la derniere case de texte1 puis la derniere case de texte2	
	
	tex = ""
	for (m=0;m<t1.length ; m++) {
		for (n=0;n<t2.length ; n++) {
			
			tex = tex + t1[m] +t2[n] + "<br>"
			
		}
	}
		
	draw4.innerHTML=tex	
	
	// -------------------------------------
	
	tex="";
	t1 = parseInt(input_t1.value)
	t2 = parseInt(input_t2.value)

for (n=t1;n<=t2;n++) {
 

tex = tex + n + "\n" 



}	
	
	
	
	
	draw.innerHTML=tex
	
	
});
