let p = new Promise(function(res, rej) {
    res()
})

p.then((data)=> {
    console.log(data);
},(err)=> {
    console.log(err);
})