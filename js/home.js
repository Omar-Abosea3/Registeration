var yourMessage=document.getElementById("yourMessage");
var logOut=document.getElementById("logOut");
var pizza=document.getElementById("pizza");
var fish=document.getElementById("fish");
var beef=document.getElementById("beef");
var chocolate=document.getElementById("chocolate");
var pasta=document.getElementById("pasta");
var steak=document.getElementById("steak");
var peach=document.getElementById("peach");
var popcorn=document.getElementById("popcorn");
var salad=document.getElementById("salad");
var cherry=document.getElementById("cherry");
var bean=document.getElementById("bean");
var tomato=document.getElementById("tomato");
var orange=document.getElementById("orange");
var watermelon=document.getElementById("watermelon");
var cake=document.getElementById("cake");
var kebab=document.getElementById("kebab");
var row=document.querySelector(".row");
var endMenu=document.getElementById("endMenu");

var myName;
if(localStorage.getItem("allUsersName")!=""){
    myName =JSON.parse(localStorage.getItem("allUsersName"));
    yourMessage.innerHTML="Welcome "+myName;
}else{
    var baseURL="/";
    location.replace(("../"+ location.hostname)+"index.html")
}
logOut.addEventListener('click',function(){
    myName="";
    localStorage.setItem("allUsersName",myName);

})

function endOfMenu(){
    endMenu.innerHTML="End Menu"
}


function getPizza(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
pizza.addEventListener('click',function(){
    getPizza().then(endOfMenu);
})



function getfish(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=fish');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
fish.addEventListener('click',function(){
    getfish().then(endOfMenu);
})



function getbeef(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=beef');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
beef.addEventListener('click',function(){
    getbeef().then(endOfMenu);
})



function getchocolate(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=chocolate');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
chocolate.addEventListener('click',function(){
    getchocolate().then(endOfMenu);
})


function getpasta(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
pasta.addEventListener('click',function(){
    getpasta().then(endOfMenu);
})



function getsteak(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=steak');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
steak.addEventListener('click',function(){
    getsteak().then(endOfMenu);
})


function getpopcorn(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=popcorn');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
popcorn.addEventListener('click',function(){
    getpopcorn().then(endOfMenu);
})



function getsalad(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=salad');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
salad.addEventListener('click',function(){
    getsalad().then(endOfMenu);
})


function getcherry(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=cherry');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
cherry.addEventListener('click',function(){
    getcherry().then(endOfMenu);
})


function getbean(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=bean');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
bean.addEventListener('click',function(){
    getbean().then(endOfMenu);
})


function gettomato(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=tomato');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
tomato.addEventListener('click',function(){
    gettomato().then(endOfMenu);
})


function getorange(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=orange');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
orange.addEventListener('click',function(){
    getorange().then(endOfMenu);
})


function getwatermelon(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=watermelon');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
watermelon.addEventListener('click',function(){
    getwatermelon().then(endOfMenu);
})


function getcake(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=cake');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
cake.addEventListener('click',function(){
    getcake().then(endOfMenu);
})


function getkebab(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=kebab');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
kebab.addEventListener('click',function(){
    getkebab().then(endOfMenu);
})

function getpeach(){
    return new Promise(function(callback1){
        var req = new XMLHttpRequest();
        req.open('get','https://forkify-api.herokuapp.com/api/v2/recipes?search=peach');
        req.send();
        req.addEventListener('loadend',function(){
            if(req.status==200){
                var x = JSON.parse(req.response);
                var arr= x.data.recipes;
                var cartoona="";
                for(var i = 0;i<arr.length;i++){
                    cartoona+=`<div class="col-12 col-sm-12 col-md-6 col-lg-3 p-3">
                    <div>
                        <img src="${arr[i].image_url}" alt="${arr[i].publisher}" class="w-100 hight">
                        <div class="p-3">
                            <h3 class="mb-3 text-info fs-2">${arr[i].publisher}</h3>
                            <p class="text-white fs-4">${arr[i].title}</p>
                        </div>
                    </div>
                </div>`
                }
                row.innerHTML=cartoona;
                callback1();
            }
        })
    })
}
peach.addEventListener('click',function(){
    getpeach().then(endOfMenu);
})