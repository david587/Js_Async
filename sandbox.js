const getTodos = (callback) =>{
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", ()=>{
       if(request.readyState ===4 && request.status===200){
        //takes the response text, passes it into js object
        const data =JSON.parse(request.responseText)
        callback(undefined, data);
       }
       else if(request.readyState ===4){
        callback("Could not fetch the data", undefined);
       }
    });
    
    request.open("GET",'todos.json');
    request.send();
};

//passing a callback function to getTodos
//this will start, and finish later, this will be the last one
getTodos((err, data)=>{
    console.log("callback fired");
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

