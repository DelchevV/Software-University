function solve() {
  const addBtns=Array.from(document.querySelectorAll(".product-add > .add-product"))
  const checkoutBtn=document.getElementsByClassName('checkout')[0]
  const textArea=document.getElementsByTagName('textarea')[0]
  checkoutBtn.addEventListener('click', checkoutHandler)
  let cart=[];
  let total=0;

  addBtns.forEach(element=> element.addEventListener('click', addHandler))


  function addHandler(e){
   const product=e.target.parentElement.parentElement
   const productName=product.querySelector(".product-title").textContent
   const productPrice=Number(product.querySelector(".product-line-price").textContent)
   console.log(productPrice.toFixed(2));
   let string = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   textArea.value+=string;

   cart.push(productName);
   total+=productPrice;
  }

  function checkoutHandler(e){
   const uniqueProducts=[...new Set(cart)]
   textArea.value+=`You bought ${uniqueProducts.join(", ")} for ${total.toFixed(2)}.`
   addBtns.forEach(el=> el.disabled=true)

  }
}
