//search
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function(){
    search.classList.toggle('active2');
}

//cart
const cart1 = document.querySelector('.cart');
const containe = document.querySelector('.containe');
cart1.onclick = function(){
    containe.classList.toggle('active3');
}



const product = [
    {
        id: 0,
        image: 'images/seller1.png',
        title: 'Alocasia polly',
        price: 45.15,
    },
    {
        id: 1,
        image: 'images/seller2.png',
        title: 'Peace lily',
        price: 45.15,
    },
    {
        id: 2,
        image: 'images/seller3.png',
        title: 'Camille Lily',
        price: 45.15,
    } 
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('seller__items').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            //отображение товара на странице
            `<div class="seller__item">
                 <img src=${image} alt="image" class="seller__item-img"></img>
                 <h4 class="seller__item-title">${title}</h4>
                 <p class="seller__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                 <div class="seller__item-button">
                       <div class="seller__item-price">$ ${price}</div>`+
                        "<button class='seller__item-btn' onclick='addtocart("+ (i++) +")'>Add to cart</button>"+
                  `</div>
            </div>`
        )
    }).join('')

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    //удаление товара из корзины при нажатии на трмусорное ведро
    function delElement(a) {
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(a){
        let j = 0, total=0;
        //количество товара в корзине
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "$ "+0+" ";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "$ "+total+" ";
                return(
                    //отображение товара во всплывающем окошке
                      `<div class='cart-item'>
                            <div class='row-img'>
                                <img class='rowimg' src=${image}>
                            </div>
                            <p style='font-size:2.4rem;'>${title}</p>
                            <h2 style='font-size:3rem;'>$ ${price}</h2>`+
                            "<img class='trash' src='images/trash.png' onclick='delElement("+ (j++) +")'></img>"+
                        `</div>`      
                );
            }).join('');
        }
    }




//LOG IN
const user = document.getElementById('user');
const clear = document.getElementById('clear');
const clear2 = document.getElementById('clear2');
const forms = document.getElementById('forms');

user.addEventListener('click', function(e){
  e.preventDefault();
  forms.classList.add('active4');
})

clear.addEventListener('click', () => {
    forms.classList.remove('active4');
  }) 

clear2.addEventListener('click', () => {
  forms.classList.remove('active4');
})    




const containe2 = document.getElementById("registration"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),     
      signUp = document.getElementById("signup-link"),     
      login = document.getElementById("login-link");     

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", ( )=>{
            pwFields.forEach(pwField =>{
               
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
    });
    // js code to appear signup and login form

    signUp.onclick = function(){
        containe2.classList.remove('active5');
    };
    login.onclick = function(){
        containe2.classList.add('active5');
    };
