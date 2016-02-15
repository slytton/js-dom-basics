var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement)


var allListItems = document.getElementsByTagName('li');
for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}


var evenElements = document.getElementsByClassName('even');
console.log(evenElements)

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements)

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement)

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement)

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);


var anotherListElement = document.createElement('li');
anotherListElement.textContent = "Prepend";
var list = document.getElementsByTagName('ul')[0]
list.insertBefore(anotherListElement, list.firstChild)
