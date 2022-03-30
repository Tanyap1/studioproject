const express=require('express')
const router=express.Router()

router.get( '/', (req,res)=>{
    res.render('dashboards/index', {title:'Dash Board'})
})



module.exports=router