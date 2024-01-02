fetch("https://type.fit/api/quotes").then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data)
})


