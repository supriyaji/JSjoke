const joke = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');
//BY PROMISES-----
// const generatejoke = ()=>{

    // const setHeader = {
    //     headers: {
    //         Accept: "application/json"
    //     }
    // }
//     fetch('https:icanhazdadjoke.com', setHeader)
//     .then((res)=> res.json()
//     )
//     .then((data)=>{
//         joke.innerHTML= data.joke;
//     })
//     .catch((error) => {
//     console.log(error);
//     })
// }

const generatejoke = async ()=>{
    try{
        const setHeader ={
            headers:{
                Accept:"application/json"
            }
        }
        const res = await fetch('https:icanhazdadjoke.com',setHeader)
        const data = await res.json();
        joke.innerHTML = data.joke;
    }catch(err){
        console.log(`the error is ${err}`)
    }
}
jokebtn.addEventListener('click',generatejoke)
generatejoke();