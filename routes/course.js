// const express =require("express");
// const Router = express.Router;
const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase",function(req,res){
    res.json({
        message:"purchase endpoint"
    })
})

courseRouter.get("/preview",function(req,res){
    res.json({
        message:"preview endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}