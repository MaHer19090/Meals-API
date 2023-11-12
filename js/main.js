
//? API ----------------------------------------------------------------------------------
//? AJAX =>Async js and xml(built in object)
//? xmlhttp request

// let data = [];
// let myHttps = new XMLHttpRequest(); //-1
//? GET => get data from server
//? POST => send data to server
//? PUT => update server data
//? DELETE => delete data from server
//? establish connection  ----------https method => url
// myHttps.open(`GET`,`https://jsonplaceholder.typicode.com/comments`) //-2 link between front end and back end server
// myHttps.send() //-3
//? myHttps.readyState = 0 // Not connection
//? myHttps.readyState = 1 // establish connection
//? myHttps.readyState = 2 // send request
//? myHttps.readyState = 3 // request recieved
//? myHttps.readyState = 4 // request finish and ready

// myHttps.addEventListener(`readystatechange`,function(){ //-4
//     if(myHttps.readyState == 4 ){
//         data= JSON.parse(myHttps.response);
//         dispalyData();
//     }
// })

// function dispalyData(){
//     let cols = ``;
//     for(let i =0 ; i < data.length ; i++){
//         cols +=`
//         <div class="col-md-4">
//         <div class="card">
//             <div class="card-body text-center">
//                 <h3>${data[i].id}</h3>
//                 <h4 class="card-title">Name:${data[i].name}</h4>
//                 <p class="card-text">Body:${data[i].body}</p>
//             </div>
//         </div>
//     </div>`
//     }
//     document.getElementById(`colsdata`).innerHTML = cols;
// }


//? Example API ----------------------------------------------------------------------------
let links = document.querySelectorAll(`.home .nav-link`);

for(let i = 0 ;i < links.length; i++){
    links[i].addEventListener(`click`,function(e){
        let myLink=e.target.innerHTML;
        getApiData(myLink);
    })
}
let data = [];
getApiData(`pizza`);
function getApiData(meal){
    let myHttps = new XMLHttpRequest(); //-1
    myHttps.open(`GET`,`https://forkify-api.herokuapp.com/api/search?q=${meal}`) //-2 link between front end and back end server
    myHttps.send() //-3
    myHttps.addEventListener(`readystatechange`,function(){
            if(myHttps.readyState == 4 ){
                data= JSON.parse(myHttps.response).recipes;
                dispalyData();
            }
        })
    
}


    function dispalyData(){
        let cols = ``;
        for(let i =0 ; i < data.length; i++){
            cols +=`
           <div class="col-md-4">
           <div class="card">
           <img class="card-img-top maher" src="${data[i].image_url}">
           <div class="card-body">
             <h4 class="card-title">${data[i].title}</h4>
             <a target="_blanck" class="btn btn-primary" href="${data[i].source_url}">Source</a>
           </div>
           </div>
           
           
           
           </div>
            `
        }
    document.getElementById(`colsdata`).innerHTML = cols;

    }


















