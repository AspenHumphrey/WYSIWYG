// famous person array
let famousPeople=[
	{
	  title: "The Man in Black",
	  name: "Johnny Cash",
	  bio: "Johnny Cash, the Man in Black, was a singer, guitarist and songwriter whose music innovatively mixed country, rock, blues and gospel influences.",
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


// function buildCard(){
//     let card = document.createElement("div");
//     card.setAttribute("id", "cardwrapper");
//     card.innerHTML = input.value + "<br>";
//     container.appendChild(card);
    
//     let deleteBtn = document.createElement("button");
//     deleteBtn.setAttribute("class", "removeCard");
//     deleteBtn.innerHTML = "removeCard"

//     card.appendChild(deleteBtn);
//     container.appendChild(card);


//     deleteBtn.addEventListener("click", function(){
//         container.removeChild(card);
//     })
// };


// create card creates elements
// header name/title
// section bio/img
// footer lifespan

function createCard(people){
	let card = document.createElement("person");
	card.className = "card";


	let header = document.createElement("header");
	header.innerHTML = people.name, people.title;
	card.appendChild(header);
	console.log(famousPeople[0].name, famousPeople[0].title);


	let section = document.createElement("section");
	section.innerHTML = people.bio, people.img;
	card.appendChild(section);
	console.log(famousPeople[0].bio );

	let footer = document.createElement("footer");
	footer.innerHTML = people.lifespan;
	card.appendChild(footer);
	console.log(famousPeople[0].lifespan);

	return createCard
}
createCard(famousPeople[0]);

// populate dom put into dom
let populateCard = document.getElementById("container");

function populateDom(){
for (var i = 0; i < famousPeople[i]; i++)
	console.log(famousPeople );
}

// figure out odd or even
