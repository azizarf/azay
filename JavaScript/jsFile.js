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
  var datashop = [
    { 
  name:'SANDALES À TALON MOYEN WITH MORS FOR WOMEN',
  taille:38,
  price:400,
  color:'black',
  description:'natural shoe, made of leather,cover half foot',
  type:'shoes',
  img:'../imgs/1.jpg',
  gender:'women',
  ref:1
  },
  {name: 'MOCASSINS GUCCI JORDAAN CUIR',
  taille:38,
  price:700,
  color:'black',
  description:'The classic spirit of this model is stimulated by the contrast between the architecture of the shoe and the thickness of a highly structured overhanging sole.',
  type:'shoes',
  img:'../imgs/2.jpg.webp',
  gender:'woman',
  ref:2
  },
  {name: 'RED T-SHIRT FOR MAN',
  taille:'xl',
  price:250,
  color:'red',
  description:'Plain Red 100% Cotton short Sleeve T Shirt · Fit Type: Regular Fit · 180GSM, 100% Premium Cotton (Bio-Washed & Pre-Shrunk for Minimum shrinkage)',
  type:'t-shirt',
  img:'../imgs/3.jpg',
  gender:'man',
  ref: 3
  },
  {name:'YELLOW-GREEN WITHOUT BAND',
  taille:'m',
  price:320,
  color:'yellow-green',
  description:'s Crew Neck full Sleeve Silhouette T-Shirt (Neon Yellow). SKU D0250P03500C. Shipping calculated at checkout.',
  type:'t-shirt',
  img:'../imgs/4.jpeg',
  gender:'woman',
  ref:4
  },
  {name:'MOCASSINS GUCCI JORDAAN LAIN',
  taille:38,
  price:190,
  color:'orange',
  description:'Vibrant yellow color that exudes energy and optimism ,High-quality construction for comfort and durability',
  type:'shoe',
  img:'../imgs/5.jpg',
  gender:'woman',
  ref:5
  },
  {name: 'BASKETT TIMBERLAND',
  taille:37,
  price:230,
  color:'black',
  description:'This footwear masterpiece effortlessly blends classic design with modern comfort',
  type:'shoe',
  img:'../imgs/6.webp',
  gender:'woman',
  ref: 6
  },
  {name:'WHITE DEBARDER',
  taille:'l-xl-xxl',
  price:12,
  color:'white',
  description:'white debarder for ',
  type:'t-shirt',
  img:'../imgs/7.jpg',
  gender:'man',
  ref:7
  },
  {name:'BLACK MOCCASINS FERRAGAMO',
  taille:42,
  price:400 ,
  color:'black',
  description:'high quality shoe for your class nights',
  type:'shoe',
  img:'../imgs/8.webp',
  gender:'man',
  ref:8
  },
  {name: 'CLASS SHOE FOR WOMAN',
  taille:38,
  price:290,
  color:'white',
  description:'class shoe for woman can wear it everyday',
  type:'shoe',
  img:'../imgs/9webp',
  gender:'woman',
  ref:9
  },
  {name: 'WHITE SHIRT FOR KID',
  taille:'s',
  price:320,
  color:'white',
  description:'just for happy kids ',
  type:'t-shirt',
  img:'../imgs/10.jpg',
  gender:'kids',
  ref:10
  },
  {name: 'COLORED VEST FOR KID',
  taille:'s-m',
  price:370,
  color:'green',
  description:'cool vest for your favorite children , for the coldest nights',
  type:'t-shirt',
  img:'../imgs/11.jpg',
  gender:'kids',
  ref: 11
  },
  {name: 'BLUE KENZO T-SHIRT',
  taille:'s',
  price:260,
  color:'blue',
  description:'only for you only for the best kid full sleeves',
  type:'t-shirt',
  img:'../imgs/12.jpg',
  gender:'kids',
  ref: 12
  },
  {name: 'RED KENZO T-SHIRT',
  taille:'s',
  price:290,
  color:'red',
  description:'red t-shirt with full sleeves and 100% cotton',
  type:'t-shirt',
  img:'../imgs/13.jpg',
  gender:'kids',
  ref: 13
  },
  {name: 'black class shoe',
  taille:42,
  price:'120',
  color:'black',
  description:'for your meets black high quality shoe',
  type:'shoe',
  img:'../imgs/14.jpg',
  gender:'man',
  ref:14
  },
  {name: 'baby shoe catterpillar',
  taille:18,
  price:120,
  color:'black',
  description:'for your lovely baby',
  type:'shoe',
  img:'../imgs/15.webp',
  gender:'kids',
  ref:15
  },
  {name:'lanvin debarder',
  taille:'m-l',
  price:220,
  color:'brown',
  description:'for your coldest nights get warm high quality t-shirt',
  type:'t-shirt',
  img:'../imgs/17.jpg',
  gender:'kids',
  ref: 16
  },
  {name:'warm white sweet',
  taille:'s-m-l',
  price:100,
  color:'white',
  description:'high quality t-shirt with full sleeves 100%',
  type:'t-shirt',
  img:'../imgs/18.jpg',
  gender:'woman',
  ref:17
  },
  {name: 'red  warm t-shirt',
  taille:'m-l-xl',
  price:70,
  color:'red',
  description:'full sleeves t-shirt 100%cotton medium quality',
  type:'t-shirt',
  img:'../imgs/19.jpg',
  gender:'man',
  ref:18
  },
  {name: 'white warm t-shirt',
  taille:'m-l-xl',
  price:89,
  color:'white',
  description:'full sleeves t-shirt 100%lain medium quality',
  type:'t-shirt',
  img:'../imgs/20.jpg',
  gender:'man',
  ref:19
  },
  {name: 'red warm t-shirt',
  taille:'m-l-xl',
  price:70,
  color:'red',
  description:'full sleeves t-shirt 100% cotton medium quality',
  type:'t-shirt',
  img:'../imgs/21.jpg',
  gender:'man',
  ref:20
  },
  {name: 'blue warm t-shirt',
  taille:'s-m-l',
  price:80,
  color:'blue',
  description:'full sleeves pull for woman 100% cotton made in vietnam',
  type:'t-shirt',
  img:'../imgs/22.jpg',
  gender:'woman',
  ref:21
  },
  {name: 'baby shoe',
  taille:20,
  price:90,
  color:'pink',
  description:'high quality shoe that covers all the foot ',
  type:'shoe',
  img:'../imgs/23.jpeg',
  gender:'kids',
  ref:22
  },
  ]
  
  // Filter search
  $(".search-btn").on("click",function(){
    var searchVal = $("#valsearch").val()
    console.log("this is val",searchVal )
  $("#allCards").empty()
  for(var i = 0; i < datashop.length ; i++){
      if( datashop[i].name === searchVal || datashop[i].color === searchVal || datashop[i].gender === searchVal || datashop[i].ref === searchVal || datashop[i].type === searchVal || datashop[i].taille === searchVal || datashop[i].price === searchVal ){
$("#allCards").append(`<div class="card">
  <img src=${datashop[i].img} alt=${datashop[i].type} style="width:100%">
  <h1>${datashop[i].name}</h1>
  <p class="price">${datashop[i].price}<p>"$"</p></p>
  <p>${datashop[i].description}</p>
  <input class="quantity" id="${datashop[i].ref}+quantity" type="text" placeholder="Quantity">
  <p><button class="addBtn" id="${datashop[i].ref}+add" onclick="add(${datashop[i].ref})"  >Add to Cart</button></p>
  <p><button class="showBtn" id="${datashop[i].ref}+show" onclick="show(${datashop[i].ref})"  >Show</button></p>
  </div>`)
    }  
 }
})

// Filter men
$("#man").on("click",function(){
  $("#allCards").empty()
  for(var i = 0; i < datashop.length ; i++){
        if( datashop[i].gender === "man" ){
 $("#allCards").append(`<div class="card">
    <img src=${datashop[i].img} alt=${datashop[i].type} style="width:100%">
    <h1>${datashop[i].name}</h1>
    <p class="price">${datashop[i].price}<p>"$"</p></p>
    <p>${datashop[i].description}</p>
    <input class="quantity" id="${datashop[i].ref}"  type="number" placeholder="Quantity">
    <p><button class="addBtn" id="${datashop[i].ref}+add" onclick="add(${datashop[i].ref})"  >Add to Cart</button></p>
    <p><button class="showBtn" id="${datashop[i].ref}+show" onclick="show(${datashop[i].ref})"  >Show</button></p>
  </div>`)
      }  
   }
})

// Filter women
$("#woman").on("click",function(){
  $("#allCards").empty()
  for(var i = 0; i < datashop.length ; i++){
        if( datashop[i].gender === "woman" ){
 $("#allCards").append(`<div class="card">
    <img src=${datashop[i].img} alt=${datashop[i].type} style="width:100%">
    <h1>${datashop[i].name}</h1>
    <p class="price">${datashop[i].price}<p>"$"</p></p>
    <p>${datashop[i].description}</p>
    <input class="quantity" id="${datashop[i].ref}"  type="number" placeholder="Quantity">
    <p><button class="addBtn" id="${datashop[i].ref}+add" onclick="add(${datashop[i].ref})"  >Add to Cart</button></p>
    <p><button class="showBtn" id="${datashop[i].ref}+show" onclick="show(${datashop[i].ref})"  >Show</button></p>
  </div>`)
      }  
   }
})

// Filter kids
$("#kids").on("click",function(){
  $("#allCards").empty()
  for(var i = 0; i < datashop.length ; i++){
        if( datashop[i].gender === "kids" ){
 $("#allCards").append(`<div class="card">
    <img src=${datashop[i].img} alt=${datashop[i].type} style="width:100%">
    <h1>${datashop[i].name}</h1>
    <p class="price">${datashop[i].price}<p>"$"</p></p>
    <p>${datashop[i].description}</p>
    <input class="quantity" id="${datashop[i].ref}"  type="number" placeholder="Quantity">
    <p><button class="addBtn" id="${datashop[i].ref}+add" onclick="add(${datashop[i].ref})"  >Add to Cart</button></p>
    <p><button class="showBtn" id="${datashop[i].ref}+show" onclick="show(${datashop[i].ref})"  >Show</button></p>
  </div>`)
  // console.log(datashop[i],datashop[i].price)
      }  
   }
})


var index = 0
var qVal = $(".quantityof").val()
var arrPrice = []
var arrQuantity = []
var sumqp=[]
var thequantity = arrQuantity[index]
var acc = 0
   

function add(id){
  var val= $(`#${id}`).val()
  console.log("this is val",val)
  console.log(qVal,arrPrice,arrQuantity)
var purchase =filter(datashop,function(e){
  return id === e.ref
})

index++

for (var i = 0 ; i<purchase.length ; i++){ 
  var ref = $(`#${datashop[i].ref}`).val()
  acc += val * purchase[i].price 
  $("#myDropdown").append(`<p>${purchase[i].name}</p>
    <p>${purchase[i].price}</p> <p>"$" </p>
    <p >${$(`#${id}`).val()} </p> `)
    $("#totalprice").text("Total: "+acc)
   acc += val * purchase[i].price
    arrPrice.push(purchase[i].price)
    arrQuantity.push(val)
    console.log(arrPrice,arrQuantity)
    // for(var q = 0 ; q<arrQuantity.length;q++){
    //   for(var p = 0 ; p<arrPrice.length;p++){
    //     sumqp.push(arrQuantity[q]*arrPrice[p])
    //     $("#myDropdown").append(`<p>${sumqp[0]}</p>`)  
    //     $(".quantityof").empty() 
      }
    }
   $("#cancel").on("click",function(){
    $("#myDropdown").empty()
   })
// }
// }

function show(id){
  $("#showinfo").empty()
  var showInfo = filter (datashop,function(e){
    return id === e.ref
  })
  for (var i = 0 ; i<showInfo.length ; i++){
    $("#showinfo").append(`<div class="card">
    <img src=${showInfo[i].img} alt=${showInfo[i].type} style="width:100%">
    <h1>${showInfo[i].name}</h1>
    <p class="price">${showInfo[i].price}<p>"$"</p></p>
    <p>${showInfo[i].description}</p>
    <button id="btncomm" >Send</button>
  <input id="writecomm" type="text">
  <button id="closeshow" >X</button>
    <input class="quantity" id="${datashop[i].ref}"  type="number" placeholder="Quantity">
    <p><button class="addBtn" id="${showInfo[i].ref}+add" onclick="add(${showInfo[i].ref})"  >Add to Cart</button></p>
  </div>`)
  var commVal = $("#writecomm").val()
  $("#closeshow").on("click",function(){
    $("#showinfo").append(`<p class="mycomm" >${$("#writecomm").val()}</p>`)
    $("#closeshow").on("click",function(){
      $("#showinfo").empty()
    })
  })
  }
}









/////////////////////////////////////////////////////////////////////////////////////////////



