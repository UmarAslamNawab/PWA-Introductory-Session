window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(() => {
                console.log('service worker register')
            })
    }
})


fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => {

console.log(json)

for(var i=0 ; i<json.length; i++){

var todo=document.getElementById("todo")
var div= document.createElement("div")
var h2=document.createElement("h2")
h2.setAttribute('class','todos')
h2.innerHTML=json[i].title
div.appendChild(h2)
todo.appendChild(div)

}

}



)