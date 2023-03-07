const bcrypt=require('bcrypt');

// const hash=async(pw)=>{
//     const salt = await bcrypt.genSalt(12);
//     const hashPassword=await bcrypt.hash(pw,salt)
//     console.log(hashPassword);
// }
const hash=async(pw)=>{
    const hashPassword=await bcrypt.hash(pw,12)
    console.log(hashPassword);
}
const login = async(pw,hash)=>{
    const result = await bcrypt.compare(pw,hash)
    if(result){
        console.log('PASSWORD WAS CORRECT, u r login in')
    }else{
        console.log('WRONG password')
    }
}
hash ('monkey');
// login('monkey','$2b$12$Ip9Ve6AVpPlDjRYvhPZEIeGAOfAFLrrXndzTbAO2H1M/NPMbESfv2');