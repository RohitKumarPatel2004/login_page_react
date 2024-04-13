const postData  = require("../services/useServices");



const userData=(async(req,res)=>{
    try {
        const data=await postData.user(req,res);
        res.json(data);
        console.log(data);
    } catch (error) {
        return res.status(500).json(); 
    }
})

const loginData=(async(req,res)=>{
    try {
        const data1=await postData.user1(req,res);
        res.json(data1);
    } catch (error) {
        return res.status(500).json(); 
    }
})


module.exports={userData,loginData}