const express=require('express')

const router=express.Router()

const useController=require('../controller/useController')


router.post('/signup', useController.userData)
router.post('/signin', useController.loginData)



module.exports=router;