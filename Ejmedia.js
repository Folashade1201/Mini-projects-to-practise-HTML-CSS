function newParagraph() {

	// alert("this is to test my js file")
	var element = document.createElement("p");
	var divbass = document.getElementsByClassName("para4");
	console.log(divbass)
	 // divbass.appendchild(element);
	 var text = document.createTextNode("The earliest organisms that can be classified as fish were soft-bodied chordates that first appeared during the Cambrian period. Although they lacked a true spine, they possessed notochords which allowed them to be more agile than their invertebrate counterparts. Fish would continue to evolve through the Paleozoic era, diversifying into a wide variety of forms. Many fish of the Paleozoic developed external armor that protected them from predators. The first fish with jaws appeared in the Silurian period, after which many (such as sharks) became formidable marine predators rather than just the prey of arthropods.")
	 element.appendChild(text);
	 divbass.appendChild(element);
}

