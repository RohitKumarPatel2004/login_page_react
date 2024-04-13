const express=require('express')
const route=express.Router()
const useRouting=require('./useRouting')

route.use('/',useRouting)

module.exports=route