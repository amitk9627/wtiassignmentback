const app = require('./app.js');
const mongoose = require('mongoose');

const mongoDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/wti")
}
mongoDB().then(()=>{
    console.log("mongodb connected......")
}).catch(()=>{
    console.log("mongodb disconnected........")
})

app.listen(3001, () => {
    console.log("server listening........")
})