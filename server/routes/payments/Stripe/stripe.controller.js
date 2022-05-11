const stripe = require("stripe")(process.env.STRTIPE_KEY);
const createPayment = (req , res) =>{
    stripe.charges.create({
        source : req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (error, success)=>{
        if(error){
            res.status(500).json(error)
        }else{
            res.status(200).json(success)
        }
    }
    )
}

module.exports = {createPayment};