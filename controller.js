let turno = 1;
let fichas = ["O", "X"];
let puestas = 0;
let partidaAcabada = false;
let textoVictoria = 
	document.getElementById("textoVictoria");

var boton1 = document.getElementById("button1");
var boton2 = document.getElementById("button2");
var boton3 = document.getElementById("button3");
var boton4 = document.getElementById("button4");
var boton5 = document.getElementById("button5");
var boton6 = document.getElementById("button6");
var boton7 = document.getElementById("button7");
var boton8 = document.getElementById("button8");
var boton9 = document.getElementById("button9");

boton1.addEventListener("click", ponerFicha);
boton2.addEventListener("click", ponerFicha);
boton3.addEventListener("click", ponerFicha);
boton4.addEventListener("click", ponerFicha);
boton5.addEventListener("click", ponerFicha);
boton6.addEventListener("click", ponerFicha);
boton7.addEventListener("click", ponerFicha);
boton8.addEventListener("click", ponerFicha);
boton9.addEventListener("click", ponerFicha);

function ponerFicha(event){
	let botonPulsado = event.target;
	if(!partidaAcabada && botonPulsado.innerHTML == ""){
		//botonPulsado.innerHTML = fichas[turno];
		botonPulsado.innerHTML = '<img src="cara_carolina.png" />';
		puestas += 1;
		
		let estadoPartida = estado();
		if(estadoPartida == 0){
			cambiarTurno();
			if(puestas < 9){
				ia();
				estadoPartida = estado();
				puestas += 1;
				cambiarTurno();	
			}	
		}
		
		if(estadoPartida == 1){
			textoVictoria.style.visibility = "visible";
			partidaAcabada = true;
		}
		else if(estadoPartida == -1){
			textoVictoria.innerHTML = "Has perdido ;("
			partidaAcabada = true;
			textoVictoria.style.visibility = "visible";
		}
	}	
}

function cambiarTurno(){
	if(turno==1){
		turno = 0;
	}
	else{
		turno = 1;
	}
	/*
		Otra forma de hacerlo:
		turno += 1;
		turno %= 2;
	*/
}

function sonIguales(...args){
		valores = args.map(x=>x.innerHTML);
		if(valores[0] != "" && valores.every((x, i, arr) => x===arr[0])){
			args.forEach(x => x.style.backgroundColor = "Green")
			return true;
		}
		else{
			return false;
		}
	}

function estado(){
	posicionVictoria = 0;
	nEstado = 0;

	//Comprobamos si hay alguna linea
	if(sonIguales(boton1, boton2, boton3)){
		posicionVictoria = 1;
	}

	else if(sonIguales(boton4, boton5, boton6)){
		posicionVictoria = 2;
	}

	else if(sonIguales(boton7, boton8, boton9)){
		posicionVictoria = 3;
	}

	else if(sonIguales(boton1, boton4, boton7)){
		posicionVictoria = 4;
	}

	else if(sonIguales(boton2, boton5, boton8)){
		posicionVictoria = 5;
	}

	else if(sonIguales(boton3, boton6, boton9)){
		posicionVictoria = 6;
	}

	else if(sonIguales(boton1, boton5, boton9)){
		posicionVictoria = 7;
	}

	else if(sonIguales(boton3, boton5, boton7)){
		posicionVictoria = 8;
	}

	//Comprobamos quien ha ganado
	if(posicionVictoria > 0){
		if(turno == 1){
			nEstado = 1;
		}
		else{
			nEstado = -1;
		}
	}

	return nEstado;
}

function aleatorio(min, max) {
  		return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ia(){

	let pos = -1;
	var jugadaRealizada = false;

	do{
		let n = aleatorio(0, 8);
		
		if(n == 0 && boton1.innerHTML==""){
			//botones[pos].innerHTML = "O";
			boton1.innerHTML = '<img src="cara_flor.png" />';
			jugadaRealizada = true;
		}
		
		if(n == 1 && boton2.innerHTML==""){
			//botones[pos].innerHTML = "O";
			boton2.innerHTML = '<img src="cara_flor.png" />';
			jugadaRealizada = true;
		}
		
		if(n == 2 && boton3.innerHTML==""){
			//botones[pos].innerHTML = "O";
			boton3.innerHTML = '<img src="cara_flor.png" />';
			jugadaRealizada = true;
		}
		
		if(n == 3 && boton4.innerHTML==""){
			//botones[pos].innerHTML = "O";
			boton4.innerHTML = '<img src="cara_flor.png" />';
			jugadaRealizada = true;
		}
		
		if(n == 4 && boton5.innerHTML==""){
			//botones[pos].innerHTML = "O";
			boton5.innerHTML = '<img src="cara_flor.png" />';
			jugadaRealizada = true;
		}
		
		if(n == 5 && boton6.innerHTML==""){
			//botones[pos].innerHTML = "O";
			boton6.innerHTML = '<img src="cara_flor.png" />';
			jugadaRealizada = true;
		}
		
		if(n == 6 && boton7.innerHTML==""){
			//botones[pos].innerHTML = "O";
			boton7.innerHTML = '<img src="cara_flor.png" />';
			jugadaRealizada = true;
		}
		
		if(n == 7 && boton8.innerHTML==""){
			//botones[pos].innerHTML = "O";
			boton8.innerHTML = '<img src="cara_flor.png" />';
			jugadaRealizada = true;
		}
		
		if(n == 8 && boton9.innerHTML==""){
			//botones[pos].innerHTML = "O";
			boton9.innerHTML = '<img src="cara_flor.png" />';
			jugadaRealizada = true;
		}
			
	} while (jugadaRealizada == false);
	
	
}
