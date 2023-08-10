function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
var data = [
  { 
name:'SANDALES À TALON MOYEN WITH MORS FOR WOMEN',
taille: 38,
price: 400,
color:'black',
description: 'natural shoe, made of leather,cover half foot',
type:'shoes',
img:'../1.jpg',
gender:'women',
ref: 001
},
{name: 'MOCASSINS GUCCI JORDAAN CUIR',
taille: 38,
price: 700,
color:'black',
description:'The classic spirit of this model is stimulated by the contrast between the architecture of the shoe and the thickness of a highly structured overhanging sole.',
type:'shoes',
img:'../2.jpg.webp',
gender:'women',
ref: 002
},
{name: 'RED T-SHIRT FOR MAN',
taille:'xl',
price: 250,
color:'red',
description:'Plain Red 100% Cotton short Sleeve T Shirt · Fit Type: Regular Fit · 180GSM, 100% Premium Cotton (Bio-Washed & Pre-Shrunk for Minimum shrinkage)',
type:'t-shirt',
img:'../3.jpg',
gender:'man',
ref: 003
},
{name: 'YELLOW-GREEN WITHOUT BAND',
taille:'m',
price: 320,
color:'yellow-green',
description:'s Crew Neck full Sleeve Silhouette T-Shirt (Neon Yellow). SKU D0250P03500C. Shipping calculated at checkout.',
type:'t-shirt',
img:'../4.jpeg',
gender:'woman',
ref: 004
},
{name: 'MOCASSINS GUCCI JORDAAN LAIN',
taille:38,
price:190,
color: 'orange',
description:'Vibrant yellow color that exudes energy and optimism ,High-quality construction for comfort and durability',
type:'shoe',
img:'../5.jpg',
gender:'woman',
ref: 005
},
{name: 'BASKETT TIMBERLAND',
taille:37,
price:230,
color:'black',
description:'This footwear masterpiece effortlessly blends classic design with modern comfort',
type:'shoe',
img:'../6.webp',
gender:'women',
ref: 006
},
{name: 'WHITE DEBARDER',
taille:'l-xl-xxl',
price:12,
color:'white',
description:'white debarder for ',
type:'t-shirt',
img:'../7.jpg',
gender:'man',
ref: 007
},
{name: 'BLACK MOCCASINS FERRAGAMO',
taille:42,
price:400 ,
color:'black',
description:'high quality shoe for your class nights',
type:'shoe',
img:'../8.webp',
gender:'man',
ref: 008
},
{name: 'CLASS SHOE FOR WOMAN',
taille:38,
price:290,
color:'white',
description:'class shoe for woman can wear it everyday',
type:'shoe',
img:'../9webp',
gender:'woman',
ref: 009
},
{name: 'WHITE SHIRT FOR KID',
taille:'s',
price:320,
color:'white',
description:'just for happy kids ',
type:'t-shirt',
img:'../10.jpg',
gender:'kids',
ref: 010
},
{name: 'COLORED VEST FOR KID',
taille:'s-m',
price:370,
color:'green',
description:'cool vest for your favorite children , for the coldest nights',
type:'t-shirt',
img:'../11.jpg',
gender:'man',
ref: 0011
},
{name: 'BLUE KENZO T-SHIRT',
taille:'s',
price:260,
color:'blue',
description:'only for you only for the best kid full sleeves',
type:'t-shirt',
img:'../12.jpg',
gender:'man',
ref: 012
},
{name: 'RED KENZO T-SHIRT',
taille:'s',
price:290,
color:'red',
description:'red t-shirt with full sleeves and 100% cotton',
type:'t-shirt',
img:'../13.jpg',
gender:'man',
ref: 013
},
{name: 'black class shoe',
taille:42,
price:'120',
color:'black',
description:'for your meets black high quality shoe',
type:'shoe',
img:'../14.jpg',
gender:'man',
ref: 014
},
{name: 'baby shoe catterpillar',
taille:18,
price:120,
color:'black',
description:'for your lovely baby',
type:'shoe',
img:'../15.webp',
gender:'kids',
ref: 015
},
{name: 'lanvin debarder',
taille:'m-l',
price:220,
color:'brown',
description:'for your coldest nights get warm high quality t-shirt',
type:'t-shirt',
img:'../17.jpg',
gender:'man',
ref: 016
},
{name: 'warm white sweet',
taille:'s-m-l',
price:100,
color:'white',
description:'high quality t-shirt with full sleeves 100%',
type:'t-shirt',
img:'../18.jpg',
gender:'woman',
ref: 017
},
{name: 'red  warm t-shirt',
taille:'m-l-xl',
price:70,
color:'red',
description:'full sleeves t-shirt 100%cotton medium quality',
type:'t-shirt',
img:'../19.jpg',
gender:'man',
ref: 018
},
{name: 'white warm t-shirt',
taille:'m-l-xl',
price:89,
color:'white',
description:'full sleeves t-shirt 100%lain medium quality',
type:'t-shirt',
img:'../20.jpg',
gender:'man',
ref: 019
},
{name: 'red warm t-shirt',
taille:'m-l-xl',
price:70,
color:'red',
description:'full sleeves t-shirt 100% cotton medium quality',
type:'t-shirt',
img:'../21.jpg',
gender:'man',
ref: 020
},
{name: 'blue warm t-shirt',
taille:'s-m-l',
price:80,
color:'blue',
description:'full sleeves pull for woman 100% cotton made in vietnam',
type:'t-shirt',
img:'../22.jpg',
gender:'woman',
ref: 021
},
{name: 'baby shoe',
taille:20,
price:90,
color:'pink',
description:'high quality shoe that covers all the foot ',
type:'shoe',
img:'../23.jpg',
gender:'kids',
ref: 022
},
]
var users = []

function MakeAccount(){
    var newAccount = {}
    newAccount.id = countId
    newAccount.userName = ""
    newAccount.pw = ""
    newAccount.user = user
    newAccount.password = pass
    users.push(newAccount)
    return newAccount
}
var user = function(userNamee){
this.userName = userNamee
}
var pass = function(passWe){
    this.pw = passWe
    }

var userValue = $("#userEmail").val()
var passValue = $("#psw").val()


$("#userEmail").change(function(e){
    userValue = e.target.value
})
$("#psw").change(function(e){
    passValue = e.target.value
})

$("#sign").on("click",function(){

    $("#userEmail").change(function(e){
console.log(e.target.value)
    })


var user1 = MakeAccount()
user1.user(userValue)
user1.password(passValue)
alert("you account was made with succes")

})

$("#log").on("click",function(){
    for(var i = 0; i < users.length ; i++){
        if(users[i].userName === userValue && users[i].pw === passValue){
    return  alert(`account found the name is ${users[i].userName}`)
        }
    }
   alert("account not found")
    
    
})
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  // search 
  
  var searchVal = $("#valsearch").val()
  $("#btnSearch").on("click",function(){
  $("#allCards").empty()
  var filtred = filter(data,function(element){
        element.name === searchVal
  each(filtred,function(e){
    $("#allCards").append(`<div class="card">
    <img src=${e.img} alt=${e.type} style="width:100%">
    <h1>${e.name}</h1>
    <p class="price">${e.price}</p>
    <p>${e.description}</p>
    <p><button class="addBtn" value="${e.ref}" onclick="add(e)" >Add to Cart</button></p>
  </div>`)
      })         
    })
  })





$(".addBtn").on("click",add)
 
function add(e){
  $("#myDropdown").empty()
  $("#myDropdown").append(`<p>${e.name}</p> <input id="quantity" type="text" placeholder="Quantity"> <p>${e.price}</p> <p>${"$"} `)
}
/////////////////////////////////////////////////////////////////////////////////////////////



