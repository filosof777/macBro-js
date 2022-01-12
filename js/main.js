let elProductContentList = document.querySelector('.product__content-list');
let elProductList = document.querySelector('.product__list');
let sum = 0;


// elImage.forEach(item => {
  
// })

// macBook.gold.forEach(item => {
//   let count = 0;
//   elProductContentList.innerHTML = `
//     <li class="product__content-item">
//       <img class="product__big-image" id="product__img" src="${item}" alt="img">
//     </li>
//     `
// })
let count = 0;
macBook.gold.forEach(item => {
  count++;
  if (sum == 0) {
    // elProductContentList.innerHTML = `
    // <li class="product__content-item">
    //   <img class="product__big-image" id="product__img" src="${item}" alt="img">
    // </li>
    // `
    elProductList.innerHTML += `
    <li class="product__item product__item--active" value='${count}'>
      <button class="product__btn">
        <img class="product__img" src="${item}" alt="img">
      </button>
    </li>
    `
    sum++
  } else {
    elProductList.innerHTML += `
    <li class="product__item" value='${count}'>
      <button class="product__btn">
        <img class="product__img" src="${item}" alt="img">
      </button>
    </li>
    `
  }
})

let elItemProduct = document.querySelectorAll('.product__item');

// elItemProduct.forEach(item => {
//   item.addEventListener('click', () => {
//     elItemProduct.forEach(items => {
//       items.classList.remove('product__item--active')
//     })
//     item.classList.add('product__item--active')
//   })
// })

// elItemProduct.forEach(item => {
//   item.addEventListener('click', (e) => {
//     let imgLink = e.target.querySelector('img');
//     document.querySelector('#product__img').src = imgLink.src
//   })
// })


let elList = document.querySelector('.product__content-list');
let width = 500;

for(let item of elItemProduct){
  console.log(elItemProduct);
  item.addEventListener('click',()=>{
    removeClass();
    item.classList.add('product__item--active');
    elList.style.transform = `translate(${width - item.value * width}px)`;
  })
}

function removeClass(){
  for(let item of elItemProduct){
    item.classList.remove('product__item--active')
  }
}

function createImage(color){
  for(let item of macBook[color]){
    elList.innerHTML += `
    <li class="product__content-item">
      <img class="product__big-image" id="product__img" src="${item}" alt="img">
    </li>
    `
  }
}

createImage('gold')

