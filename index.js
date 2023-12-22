const app = require('./app.js');
const mongoose = require('mongoose');

const mongoDB = async () => {
    await mongoose.connect("mongodb+srv://ramitgzp56:uQ9Z9riDDbsW7Px0@cluster0.3wpkrlc.mongodb.net/")
}
mongoDB().then(()=>{
    console.log("mongodb connected......")
}).catch(()=>{
    console.log("mongodb disconnected........")
})

app.listen(3001, () => {
    console.log("server listening........")
})