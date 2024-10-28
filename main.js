const myModal =new bootstrap.Modal(document.getElementById('exampleModal'))
const myModal2 =new bootstrap.Modal(document.getElementById('errorModal'))
const myModal3 =new bootstrap.Modal(document.getElementById('NotFound'))
var nav = document.querySelector("nav")
var toTop = document.querySelector(".toTop")
const showCart = document.querySelector(".showCart")
var cart = document.querySelector(".cart")
var closeCart = document.querySelector(".cart .fa-circle-xmark")
var add_cart=document.querySelectorAll('.add_to_cart')
var menu_toggller = document.querySelector(".menu_toggler")
var nav_links = document.querySelector("nav .down_nav .list_links")
var cards=document.querySelectorAll('.card')
var counter =document.querySelector('.counter')
let total=document.querySelector('.totall').children[1]
let logout = document.querySelector('.logout')
let reg = document.querySelector('.reg')
console.log(logout);
let data=JSON.parse(localStorage.getItem('user'))
let logins=JSON.parse(localStorage.getItem('logins'))

console.log(data);
console.log(logins);

myModal.show()





let count=0;
window.addEventListener( "scroll" , function(){

    if( this.window.scrollY > 0 ){
        nav.style.borderBottom = "2px solid var(---main-color)"
        }else{
            nav.style.borderBottom = " 2px solid #ccc"
    }


    if(this.window.scrollY > 600 ){
        toTop.style.display = "flex"
        }else{
        toTop.style.display = "none"
    }

} )
toTop.addEventListener("click" , function(){
    window.scrollTo({
        top:0 , 
        // behavior:"smooth"
    })
})

showCart.addEventListener('click',function(){
 cart.classList.toggle("open")    
})


closeCart.addEventListener("click" , function(){
    cart.classList.remove("open")
})


menu_toggller.addEventListener("click" , function(){
    this.classList.toggle("open")
    nav_links.classList.toggle("open")
})






let totall=0.00
add_cart.forEach((add,key)=>{
    add.addEventListener("click" , function(){
    let src=cards[key].children[0].src;
    let name=cards[key].children[1].children[0].textContent;
    let price = cards[key].children[1].children[2].textContent;
    let product =document.createElement('div')
    product.classList.add('product');
    product.innerHTML=`
    <img src=${src} alt="">
    <b>${name}</b>
    <b>${price}</b>
    <button class="btn btn-danger p-0 w-25" >REMOVE</button>
    `
    count++;
    var btn=product.querySelector('button')
    cart.appendChild(product)
    counter.innerHTML=count
    let newPrice=parseFloat(price.slice(1));
    totall+=newPrice
    total.innerHTML= `$ ${totall} `;
    btn.addEventListener('click',()=>{
        product.remove()
        totall-=newPrice;
        total.innerHTML= `$ ${totall} `;
        count--;
        counter.innerHTML=count
    })
console.log(cart);

})

})





/////////////////////////////////////    login   ///////////////////////////////





let userData
if( localStorage.getItem('logins') ){
  userData = JSON.parse( localStorage.getItem("logins") )
    console.log(true);
}else{
  userData = []
    console.log(false);
}
let login = false;
document.getElementById('form-groups').addEventListener('submit',function(event){

    event.preventDefault();
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

        for(var i = 0 ;i<data.length; i++){
      
          if(email===data[i].email && password===data[i].password)
          {
            login=true;
           myModal.hide()
          }
          else{
          //  myModal2.show()
          }
       
        }
         if(login=true){
          userLogin = {
            email:email,
            password:password
          }
          userData.push(userLogin)
          localStorage.setItem("logins" , JSON.stringify( userData ) )
        }
  })


let user
if( localStorage.getItem('user') ){
    user = JSON.parse( localStorage.getItem("user") )
    console.log(true);
}else{
    user = []
    console.log(false);
}

document.getElementById('form-groups2').addEventListener('submit',function(event){
  event.preventDefault();
  const fName = document.querySelector('.firstname2').value;
  const sName = document.querySelector('.secondname2').value;
  const email = document.querySelector('.email2').value;
  const password = document.querySelector('.password2').value;
 console.log(fName,sName,email,password);
 var data ={
  firstName:fName,
  secondName:sName,
  email:email,
  password:password
 }
 user.push(data);
 localStorage.setItem("user" , JSON.stringify( user ) )
 console.log(data);
})
console.log(login);
reg.addEventListener('click',function(){
    window.location.reload()
})

logout.addEventListener('click',function (){
    window.location.reload()
    localStorage.clear()
})