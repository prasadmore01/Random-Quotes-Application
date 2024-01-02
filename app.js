

let getQuote = ()=>{
    fetch("https://type.fit/api/quotes").then((data)=>{
        return data.json();
    }).then((data)=>{
        let qut = document.getElementById('quote')
        let aut = document.getElementById('author')
    
        let random = Math.floor(Math.random()*data.length)
    
        qut.innerText = data[random].text
        aut.innerText = data[random].author
    
    })
    

}

getQuote()