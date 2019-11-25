function getData (url, callback){
    var request = new XMLHttpRequest
    request.onreadystatechange = function(event){
        this.readyState === 4 ? this.status === 200 ?
            callback(this.responseText) :
                console.warn("error") : null
    }
    request.open("GET",url)
    request.send()
}
function textMarcup (html){ 
    docoment.body.innerHTML += html
}

function getText (text){
    document.body.innerHTML += `<h3>${text}</h3>`
}

function showGallery (response){
    pictures = JSON.parse(response).forEach(
        picture =>
        document.body.appendChild(document.create("img")).src = picture.ref
    )
}

// getData("user.json",showGallery)
// getData("hello.txt", getText)
// getData("index.html".textMarcup)

getData("user_foto.json",showGallery)
