var listItems = document.querySelector('#items');

// parentElement
console.log(listItems.parentElement);

// lastElementChild
console.log(listItems.lastElementChild);

// lastChild
console.log(listItems.lastChild);

// firstElementChild
console.log(listItems.firstElementChild);

// firstChild
console.log(listItems.firstChild);

// nextSibling
console.log(listItems.nextSibling);

// nextElementSibling
console.log(listItems.nextElementSibling);

// previousSibling
console.log(listItems.previousSibling);

// previousElementSibling
console.log(listItems.previousElementSibling);

// createElement
var newDiv = document.createElement('div');

// setAttribute
console.log(newDiv);
newDiv.setAttribute('title', 'hello world');
