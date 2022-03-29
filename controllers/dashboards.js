const express=require('express')
const router=express.Router()

router.get( '/', (req,res)=>{
    res.render('employers/index', {title:'Dash Board'})
})



module.exports=router