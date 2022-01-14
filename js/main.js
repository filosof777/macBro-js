let elProductContentList = document.querySelector('.product__content-list');
let elProductList = document.querySelector('.product__list');

let sum = 0;

let count = 0;

let elList = document.querySelector('.product__content-list');
let width = 500;

function removeClass(elItemProduct){
  elItemProduct.forEach(item => {
    item.classList.remove('product__item--active')
  })
}

function createImage(color){
  elList.innerHTML ='';
  elProductList.innerHTML = '';
  elList.style.transform = `translate(${0}px)`;
  count = 0;
  sum = 0;
  macBook[color].forEach(item => {
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
  })
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

  elItemProduct.forEach(item => {
    item.addEventListener('click',()=>{
      removeClass(elItemProduct);
      item.classList.add('product__item--active');
      elList.style.transform = `translate(${width - item.value * width}px)`;
    })
  })
}

function changeActive(arr, cls) {
  arr.forEach(item => {
    item.addEventListener('change', () => {
      cls.textContent = item.value;
      cls.style.textTransform = 'capitalize';
    })
  })
}

let elFormRam = document.querySelector('.form__ram');
let elMaxMemory = document.querySelector('.memory-label');

elMaxMemory.innerHTML = '';

elFormRam.addEventListener('change', (e) => {
  
  if (e.target.value == 8) {
    ram = 8
    memory = 512
    changePrice(memory, ram)
    elMaxMemory.innerHTML = '';
    // showPrice1150000)
  } else if (e.target.value == 16) {
    ram = 16
    memory = 1
    changePrice(memory, ram)
    // showPrc(000000)
    elMaxMemory.innerHTML = `
      <input class="form__radio-btn memory" id="memory-1tb" type="radio" name="memory" value="1">
      <span class="ram__span">1TB</span>
    `
  }
})

changeActive(document.querySelectorAll('.ram'), document.querySelector('.main__ram'))
changeActive(document.querySelectorAll('.memory'), document.querySelector('.main__memory'))
changeActive(document.querySelectorAll('.color'), document.querySelector('.main__color'))

function showPrice() {

  let elRangePrice = document.querySelector('.range-price');
  let productCount = 1;
  let elPrice = document.querySelector('.price');

  elRangePrice.addEventListener('click', (e) => {
    let summ = elPrice.textContent.split('');
    summ = summ.join('');
    summ = +summ;
    // console.log();
    let elPorductCount = document.querySelector('.count');
    let minSum = summ;
    if (e.target.value == '+') {

      productCount++;
      elPorductCount.value = productCount;
      elPrice.textContent = ''
      elPrice.textContent += +oldSumVal * productCount;

    } else if (e.target.value == '-' && elPorductCount.value > 1) {
      productCount--;
      elPorductCount.value = productCount;
      elPrice.textContent = '';
      elPrice.textContent = +elPrice.textContent - +oldSumVal;
    }
  })
}

showPrice()

let memory = 256;
let memoryRam = 8;
let sumVal = '';

let elPrice = document.querySelector('.price');

let oldSumVal = '11400000';
let sumCount = +elPrice.textContent;
changePrice(256,8)

function changePrice(mem,ram){
  sumCount = 1;
  elPrice.textContent = 1;
  if(ram == 8 && mem == 256){
      oldSumVal = '11550000';
      elPrice.textContent = oldSumVal;
  }else if(ram == 8 && mem == 512){
      oldSumVal = '14190000';
      elPrice.textContent = oldSumVal;
  }else if(ram == 16 && mem == 256){
      oldSumVal = '16280000';
      elPrice.textContent = oldSumVal;
  }else if(ram == 16 && mem == 512){
      oldSumVal = '18150000';
      elPrice.textContent = oldSumVal;
  }else if(ram == 16 && mem == 1){
      oldSumVal = '21450000';
      elPrice.textContent = oldSumVal;
  }
  sumVal = oldSumVal.replace(/ /g, "");
}

changePrice(256, 8)
