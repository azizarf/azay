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
//   var data = [
//     {
//         name: "name",
//         taille: "taille",
//         price: 45$,
//         color: "color",
//         description: "description",
//         type: "type",
//         img: "img",
//         gender: "gender"
//     }
//   ]
var users = []
var countId = 0
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

countId++
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
  // var searchVal = $("#search").val()
  // $("#btnSearch").on("click",function(){
  // $("#image").empty()
  // var filtred = filter(data,function(element){
  //       element.name === searchVal
  // each(filtred,function(e){
  //   $("#image").append(`<img src=${e.img}`)
  //     })         
  //   })
  // })
  
  
  
  var searchVal = $("#search").val()
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
    <p><button class="addBtn" >Add to Cart</button></p>
  </div>`)
      })         
    })
  })

$("#basket").on("click",function(){
  element.classList.toggle(".basket-elements");
})

$(".addBtn").on("click",function(){
  $("#myDropdown").empty()
  $(".basket-elements").append(`<p>${}</p> <input id="quantity" type="text" placeholder="Quantity"> <p>${}</p> <p>${}</p> `)
})

 






