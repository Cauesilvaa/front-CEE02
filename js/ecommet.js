window.addEventListener('load', () => {

	//Pega todos os cards pelo classname
	let cards = document.querySelectorAll(".card");

	// for(let i = 0; i < cards.length; i++){
	// 	console.log(cards[i]);	
	// }

	cards.forEach(function(card){
		//Vou pegar o card-body que esta dentro do card
		let cardBody = card.querySelector(".card-body");

		card.addEventListener('click', function(){

			cardBody.classList.toggle("show");
		});
	});
	
});