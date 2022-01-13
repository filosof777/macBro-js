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

})


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



function removeClass(elItemProduct){
  for(let item of elItemProduct)item.classList.remove('product__item--active')
}

function createImage(color){
  elList.innerHTML ='';
  elProductList.innerHTML = '';
  elList.style.transform = `translate(${0}px)`;
  count = 0;
  sum = 0;
  for(let item of macBook[color]){
    elList.innerHTML += `
    <li class="product__content-item">
      <img class="product__big-image" id="product__img" src="${item}" alt="img">
    </li>
    `
    count++;
    if (sum == 0) {
      elProductList.innerHTML += `
      <li class="product__item product__item--active" value='${count}'>
        <button class="product__btn">
          <img class="product__img" src="${item}" alt="img">
        </button>
      </li>
      `
      sum = 1;
    } else {
      elProductList.innerHTML += `
      <li class="product__item" value='${count}'>
        <button class="product__btn">
          <img class="product__img" src="${item}" alt="img">
        </button>
      </li>
      `
    }
  }
  slider();
}

createImage('gold');

let elColorProduct = document.querySelectorAll('.color');

elColorProduct.forEach(item => {
  item.addEventListener('change', () => {
    createImage(item.value);
  })
})

function slider(){
  let elItemProduct = document.querySelectorAll('.product__item');

  for(let item of elItemProduct){
    item.addEventListener('click',()=>{
      removeClass(elItemProduct);
      item.classList.add('product__item--active');
      elList.style.transform = `translate(${width - item.value * width}px)`;
    })
  }
  
}
function changeActive(arr, cls) {
  arr.forEach(item => {
    item.addEventListener('change', () => {
      cls.textContent = item.value;
      cls.style.textTransform = 'capitalize';
    })
  })
}

changeActive(document.querySelectorAll('.ram'), document.querySelector('.main__ram'))
changeActive(document.querySelectorAll('.memory'), document.querySelector('.main__memory'))
changeActive(document.querySelectorAll('.color'), document.querySelector('.main__color'))


let elForm = document.querySelector('.form__content');

elForm.addEventListener('submit', (e) => {
  e.preventDefault();
})

let elRangePrice = document.querySelector('.range-price');
let productCount = 1;
let elPrice = document.querySelector('.price');
// let sumVal = elPrice.textContent.replace(/ /g, "");
// sumVal = Number(sumVal)
// console.log(sumVal);


// console.log(summ);

elRangePrice.addEventListener('click', (e) => {
  let elPorductCount = document.querySelector('.count');
  if (e.target.value == '+') {

    let summ = elPrice.textContent.split('');
    summ = summ.join('');
    summ = +summ;
    console.log(summ);
    let minSum = 11550000;
    console.log(minSum);

    elPrice.textContent = '';
    elPrice.textContent += summ + minSum;
    // elPrice.textContent = ''

    console.log(elPrice.textContent.length);
    productCount++;
    elPorductCount.value = productCount;

  } else if (e.target.value == '-' && elPorductCount.value > 1) {
    productCount--;
    elPorductCount.value = productCount;
  }
})

