//drawIcons(riferimentoContainerHTML, ArrayIcons) si oppuca di fare append delle caselle su DOM
//riferimentoContainerHTML --> stringa contenente id su cui effettuare append
// ArrayIcone --> Array di oggetti descriventi le icone
function drawIcons(riferimentoContainerHTML, ArrayIcone){

    let box = "";
    ArrayIcone.forEach(oggettoIcona =>{

        box += `<div class="box">
                    <i style="color:${oggettoIcona.color};" class="${oggettoIcona.family} ${oggettoIcona.prefix}${oggettoIcona.name}"></i>
                    <div class="text">${oggettoIcona.name}</div>
                </div>`;

    });

    const iconsContainer = document.getElementById(riferimentoContainerHTML);
    iconsContainer.innerHTML = box;

};



//filtraggioIcone si occupa di effettuare il filtraggio delle icone 
//in base al valore di select selezionato dall'utente
function filtraggioIcone(){

    const valoreSelezionato = this.value;
    let newIcone;

	if(valoreSelezionato == "tutti"){
		newIcone = icone;
	}else if(valoreSelezionato == "animal" || valoreSelezionato == "user" || valoreSelezionato == "vegetable"){
		newIcone =  icone.filter(oggettoIcona => {

			if(valoreSelezionato == oggettoIcona.type){
				return true;
			}
			return false;
	
		});

	}else{
		alert("Errore critico! Contattare l'assistenza!!!");
	}

	drawIcons("icons_container", newIcone);

};



//randomColor() si occupa di generare dei colori esadecimali random
//il valore di ritorno è string
function randomColor(){
   
    //ricordando Math.floor(Math.random() * (max - min + 1) + min); segue che 

    let ritorno = "#";
    for(let i=0; i<6; i++){
    
        const random = Math.round(Math.random()); //numero random tra 0 e 1

        if(random == 1){
            const numero = Math.floor(Math.random() * 10); //numero random tra 0 e 9
            ritorno += numero;
        }else{
            const numeroLettera = Math.floor(Math.random() * 6 + 65); //numero compreso tra 65 e 70, codice ascii corrispondente da A a F
            const lettera = String.fromCharCode(numeroLettera);
            ritorno += lettera;
        }

    }

    return ritorno;
};




//select() popola dinamicamente il select nel DOM 
function select(icons){

    let typeArray = [];
    for (let i=0; i<icons.length; i++){
        if(!typeArray.includes(icons[i].type)){
            typeArray[i] = icons[i].type;
        }
    }

    const newTypeArray =  typeArray.filter(type => {

        if(type != undefined){
            return true;
        }
        return false;

    });

    let option = `<option value="tutti">Tutti</option>`;
    for(let i=0; i<newTypeArray.length; i++){
        option +=   `
                        <option value="${newTypeArray[i]}">${newTypeArray[i]}</option>
                    `;
    }

    const select = document.getElementById("filtro");
    select.innerHTML = option;

};

 



const animalColor = randomColor();
const vegetableColor = randomColor();
const userColor = randomColor();

const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalColor
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalColor
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalColor
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalColor
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalColor
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalColor
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalColor
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalColor
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: vegetableColor
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: vegetableColor
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: vegetableColor
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: vegetableColor
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: userColor
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: userColor
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: userColor
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: userColor
	}
];





//-------------------------------------------------------------------------------------------------------------------------------

 


drawIcons("icons_container", icone);

//popolo le options dinamicamente
select(icone);


//filtraggio delle icone visualizzate tramite select dall'utente
const filtro = document.getElementById("filtro");
filtro.addEventListener("change", filtraggioIcone);