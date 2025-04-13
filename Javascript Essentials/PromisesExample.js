let handlePromise = new Promise((resolve, reject) => {
    let isTrue = false;
    if(isTrue){
        resolve('Received data');
    }
    else{
        reject('Data Rejected');
    }
})

handlePromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})