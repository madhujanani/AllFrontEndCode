let success =true;
function getData(){
    return new Promise((resolve ,reject)=>{// here resolve and reject are not arguments they are call backs  in js
        setTimeout(()=>{
            if(success){
                resolve([
                    {
                        url:'https://gorest.co.in/public/v2/users',
                        dataType:'json',
                        type:'GET',
                        data:{
                            key:'value'
                        }
                    },

                ])
            }
            else{
                reject('Failed to get user List')
            }
        },3000)
        
    })
}
/*function onResolved(users){
    console.log(users);
}
function onRejected(error){
    console.log(error);
}*/
const prom =getData();
console.log(prom);
prom.then(data=>console.log(data))
.catch(error=>console.log(error))