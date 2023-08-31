const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const addBtn = document.getElementById("add-btn");
const addFrontBtn = document.getElementById("add-front-btn");
const removeLastBtn = document.getElementById("remove-last-btn");
const removeFirstBtn = document.getElementById("remove-first-btn");
const bookList = document.getElementById("book-list");
addBtn.addEventListener("click", addBook);
addFrontBtn.addEventListener("click", addBookToFront);
removeLastBtn.addEventListener("click", removeLastBook);
removeFirstBtn.addEventListener("click", removeFirstBook);
function addBook() {
const title = titleInput.value;
const author = authorInput.value;
const year = yearInput.value;
if (title.trim() === "" || author.trim() === "") {
alert("Please enter valid title and author.");
return;
}
const bookItem = document.createElement("li");
bookItem.innerHTML = `
<span>${title} by ${author} on
${year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"/>read
</span>
`;
bookList.appendChild(bookItem);
titleInput.value = "";
authorInput.value = "";
}
function addBookToFront() {
const title = titleInput.value;
const author = authorInput.value;
if (title.trim() === "" || author.trim() === "") {
alert("Please enter valid title and author.");
return;
}
const bookItem = document.createElement("li");
bookItem.innerHTML = `
<span>${title} by ${author}</span>
<button class="remove-btn">Remove</button>
`;
const removeBtn = bookItem.querySelector(".remove-btn");
removeBtn.addEventListener("click", () => {
bookList.removeChild(bookItem);
});
bookList.insertBefore(bookItem, bookList.firstChild);
titleInput.value = "";
authorInput.value = "";
}
function removeLastBook() {
const lastBook = bookList.lastChild;
if (lastBook) {
bookList.removeChild(lastBook);
}
}
function removeFirstBook() {
const firstBook = bookList.firstChild;
if (firstBook) {
bookList.removeChild(firstBook);
}
}
