// document.getElementById('sixteen-GB').addEventListener('click',function(){
//   const memoryCost = document.getElementById('memory-cost');
//   memoryCost.innerText = 200;
//   calculate();
// })
// document.getElementById('eight-GB').addEventListener('click',function(){
//   const memoryCost = document.getElementById('memory-cost');
//   memoryCost.innerText = 0;
//   calculate();
// })
// document.getElementById('ssd-1').addEventListener('click',function(){
//   const ssdCost = document.getElementById('storage-cost');
//   ssdCost.innerText = 0;
//   calculate();
// })
// document.getElementById('ssd-2').addEventListener('click',function(){
//   const ssdCost = document.getElementById('storage-cost');
//   ssdCost.innerText = 250;
//   calculate();
// })
// document.getElementById('ssd-3').addEventListener('click',function(){
//   const ssdCost = document.getElementById('storage-cost');
//   ssdCost.innerText = 320;
//   calculate();
// })
// document.getElementById('free-delivery').addEventListener('click',function(){
//   const deliveryCost = document.getElementById('delivery-cost');
//   deliveryCost.innerText = 0;
//   calculate();
// })
// document.getElementById('paid-delivery').addEventListener('click',function(){
//   const deliveryCost = document.getElementById('delivery-cost');
//   deliveryCost.innerText = 80;
//   calculate();
// })
function clickBtn(product,price){
    const productCost = document.getElementById(product);
    productCost.innerText = price;
    calculate();
}

function calculate(){
  const bestPrice = document.getElementById('best-price').innerText;
  const memoryCost = document.getElementById('memory-cost').innerText;
  const storageCost = document.getElementById('storage-cost').innerText;
  const deliveryCost = document.getElementById('delivery-cost').innerText;
  document.getElementById('total-price').innerText =parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
}


function cuponCode(){
  const fakeCode = 'february';
  const inputValue = document.getElementById('promo-input').value;
  if(inputValue === fakeCode){
    const totalPriceText = document.getElementById('total-price');
    let totalPrice = parseFloat(totalPriceText.innerText);
    const discount = totalPrice * 0.2;
    totalPriceText.innerText = totalPrice - discount;
  }else{
    alert('input valid cupon code');
  }
}