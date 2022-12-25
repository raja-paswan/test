const express=require("express")
const router=express.Router();


const { createCustomer, getCustomer, DeleteCustomer  }=require("../controller/customerController")

const { createCard , get }=require("../controller/cardController")


router.post("/createCustomer", createCustomer)
router.get("/getCostomer/:customerID", getCustomer)
router.delete("/DeleteCustomer/:customerID", DeleteCustomer)


router.post("/createCard/:customerID",createCard)
router.get("/get",get)



module.exports=router