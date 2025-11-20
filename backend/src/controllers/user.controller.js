const registerController = (req,res)=>{
    try {
        console.log("controller");
        res.send("controller")
        
    } catch (error) {
          return res.status(400).json({ message: "error in registration", error });
        
    }
}


module.exports = registerController;