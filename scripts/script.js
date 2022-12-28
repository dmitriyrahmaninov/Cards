const formElem = document.querySelector('#products_form');
const bodyElem = document.querySelector('body');

const label_titleElem = document.createElement('label');
const input_titleElem = document.createElement('input');
const label_priceElem = document.createElement('label');
const input_priceElem = document.createElement('input');
const btnElem = document.createElement('button');
const container_productsElem = document.createElement('div');
const product_cardElem = document.createElement('div');
const attribute_productsElem = document.createElement('div');
const container_btnElem = document.createElement('div');

input_titleElem.setAttribute('placeholder', 'Название');
input_titleElem.setAttribute('name', 'title');
input_priceElem.setAttribute('placeholder', 'Цена');
input_priceElem.setAttribute('name', 'price');

container_productsElem.classList.add('products_container');
attribute_productsElem.classList.add('products_attribute');
input_titleElem.classList.add('products_title');
input_priceElem.classList.add('products_price');
container_btnElem.classList.add('products_btn');
btnElem.classList.add('btn');
btnElem.innerText = 'Добавить';

label_titleElem.append(input_titleElem);
label_priceElem.append(input_priceElem);
attribute_productsElem.append(label_titleElem, label_priceElem);
container_btnElem.append(btnElem);
bodyElem.append(container_productsElem);
formElem.append(attribute_productsElem, container_btnElem);


const products = [];

function render() {
    const container = document.querySelector('.products_container');
    container.innerText = '';
    products.forEach(({ title, price }) => {
        const product = document.createElement('div');
        const product_title = document.createElement('p');
        const product_price = document.createElement('p');
            
        product_title.innerText = title;
        product_price.innerText = price;
        
        product.classList.add('product_card');    
        product_title.classList.add('block_title');
        product_price.classList.add('block_price');

        product.append(product_title, product_price);
        container.append(product);
    });
};

formElem.addEventListener('submit', event => {
    event.preventDefault();
    const { title, price } = event.target;
    products.push({
        title: title.value,
        price: price.value
    })
    title.value = '';
    price.value = '';
    render();
});
