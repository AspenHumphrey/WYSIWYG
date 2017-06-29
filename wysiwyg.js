// famous person array
let famousPeople=[
	{
	  title: "The Man in Black",
	  name: "Johnny Cash",
	  bio: "Johnny Cash, was a singer, guitarist and songwriter whose music innovatively mixed country, rock, blues and gospel influences.",
	  image: "johnnyCashKitten.jpg",
	  lifespan: {
	    birth: 1932,
	    death: 2003
	 	}
	},
	{
	  title: "Coco Chanel",
	  name: "Gabrielle Bonheur",
	  bio: "Coco Chanel was a leading French modernist designer, whose patterns of simplicity and style revolutionised women’s clothing. She was the only designer to be listed in the Time 100 most influential people of the Twentieth Century.",
	  image: "cocoChanel.jpg",
	  lifespan: {
	    birth: 1883,
	    death: 1971
	  }
	},
	{
	  title: "Queen of Country",
	  name: "Dolly Parton",
	  bio: "Singer and musician Dolly Parton is a beloved cultural icon whose powerful voice, songwriting and personality have won the hearts of country and pop music fans for decades. She has also appeared in an array of screen projects.",
	  image: "dolly-parton.jpg",
	  lifespan: {
	    birth: 1946,
	    death: "living"
	  }
	 } 
];

// create card creates elements
	// header name/title
	// section bio/img
	// footer lifespan

function createCard(person){
	console.log("person", person);
	let card = document.createElement("person");
	card.classList.add("card");


	let header = document.createElement("header");
	header.classList.add("personHeader");
	header.innerHTML = person.name + " " + person.title;
	card.appendChild(header);
	console.log(person.name, person.title);


	let section = document.createElement("section");
	section.classList.add("personSection");
	section.innerHTML = person.bio + " " + person.img;
	card.appendChild(section);
	console.log(famousPeople[0].bio );

	let footer = document.createElement("footer");
	footer.classList.add("personFooter");
	footer.innerHTML = person.lifespan;
	card.appendChild(footer);
	console.log(famousPeople[0].lifespan);

	return card
	console.log(card);
}

// populate dom put into dom
let populateCard = document.getElementById("container");

function populateDom(){
	for (var i = 0; i < famousPeople.length; i++){
		console.log("famous person", famousPeople[i]);
		var create = createCard(famousPeople[i]);
		console.log("populateDom create", create );
		populateCard.appendChild(create);
		// off or even with background color style
		if (i %2 == 0 ){
			create.classList.toggle("yellow");
		} else {
			create.classList.toggle("blue");
		}
	}
}
populateDom();

// event listener (function will be needed inside)
// dotted black border on click of card

var currentCard = document.getElementsByClassName("card");
	console.log("card", currentCard);

	for(var i = 0; i < currentCard.length; i++){
		currentCard[i].addEventListener("click", function(){
			event.currentTarget.classList.toggle("border")
			var input = document.getElementById("input");
			input.focus();
			console.log("current", event.currentTarget);
 
 			inputEvent(event.currentTarget);
			// console.log("card", currentCard.querySelector(".personSection"));

	})
};

// make own function then call in card func- use querySElector on current card in card func
input = document.getElementById("input");

function inputEvent(currentCard){
  
 	input.addEventListener("keypress", function(event){
 		if(event.key === "Enter"){
 			let inputText = input.value;
 			clearTextBox(inputText);
 			// mirrorText();
 		}
 		console.log("event", input.value);
 		console.log("inputEvent", currentCard.querySelector(".personSection"));
 	})
 };
 
 function clearTextBox(event, inputText){
 	if (inputText !== ""){
 		input.value = "";
 	}
 };
 
 // function mirrorText(mirror){
 // 	famousPeople = mirror;
	// console.log("mirrorText?", mirror);
 // }; 

