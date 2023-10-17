const categories = document.querySelector('#categories');

const items = categories.children.length;

console.log('Number of categories: ' + items);
console.log();

[...categories.children].forEach(item => {
    console.log('Category: ' + item.firstElementChild.textContent);
    console.log('Elements: ' + item.lastElementChild.children.length);
    console.log();
});