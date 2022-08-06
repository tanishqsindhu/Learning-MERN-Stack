// axios
//     .get("https://swapi.dev/api/people/1/")
//     .then((res)=>{
//         console.log("Response",res)
//     })
//     .catch((e)=>{
//         console.log("ERROR!",e);
//     });

const getStarWArsPerson = async(id)=>{
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }catch(e){
        console.log("ERROR!",e);
    }
};
getStarWArsPerson(5);
getStarWArsPerson(6);