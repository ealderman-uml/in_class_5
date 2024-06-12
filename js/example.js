/* Ed Alderman
 * This JavaScript adds a node to the beginning of the list,
   another to the end of the list, 
   changes the class of all list elements to be 'cool',
   and adds a list item count to the title
 */

//var liNodeList = document.querySelectorAll('li');
var list = document.getElementsByTagName('ul')[0]; // only one in the doc

// ADD NEW ITEM TO END OF LIST
var listEnd = document.createElement('li');
listEnd.textContent = 'cream';
list.appendChild(listEnd);

// ADD NEW ITEM START OF LIST
var listBeginning = document.createElement('li');
listBeginning.textContent = 'kale';
list.prepend(listBeginning);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var liNodeList = document.querySelectorAll('li');
liNodeList.forEach(item => item.setAttribute('class', 'cool'));

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var title = document.getElementsByTagName('h2')[0]; // There must be a more efficient way to do this.
var numElements = document.createElement('span');
numElements.textContent = liNodeList.length;
title.appendChild(numElements);

