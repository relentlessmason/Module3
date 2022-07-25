// add pageTitle
let allItemsIncomplete = true;
const pageTitle = 'My Shopping List';

// add groceries
const groceries = [
  { id: 1, name: 'eggs', completed: false },
  { id: 2, name: 'milk', completed: false },
  { id: 3, name: 'sugar', completed: false },
  { id: 4, name: 'strawberries', completed: false },
  { id: 5, name: 'flour', completed: false },
  { id: 6, name: 'snackies', completed: false },
  { id: 7, name: 'biscuits', completed: false },
  { id: 8, name: 'sour cream', completed: false },
  { id: 9, name: 'cereal', completed: false },
  { id: 10, name: 'Tea', completed: false }
];

/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  const title = document.getElementById('title');
  title.innerText = pageTitle;
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
 function displayGroceries() {
  const ul = document.querySelector('ul');
  groceries.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item.name;
    const checkCircle = document.createElement('i');
    checkCircle.setAttribute('class', 'far fa-check-circle');
    li.appendChild(checkCircle);
    ul.appendChild(li);
  });

}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  const items = document.querySelectorAll('#groceries > li');
  items.forEach((item) => {
    item.classList.add('completed');
  });
}

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
