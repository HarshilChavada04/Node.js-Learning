function fetchData(){
    return new Promise((resolve, reject) => {
        let isTrue = true;
        setTimeout(() => {
        if(isTrue){
                resolve('Resolved Message');
            }
            else{
                reject('Rejected Message');
            }
        }, 1000);
    })
};

async function getData(){
    try{
        const data = await fetchData();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

getData();