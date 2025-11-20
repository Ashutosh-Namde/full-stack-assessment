const app = require("./src/app");
const connectDB = require("./src/utils/db")

connectDB();

app.listen(8000,()=>{
    console.log("server is runn on port 3000");
    
})