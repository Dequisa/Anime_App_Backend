const app = require("./app");
require("dotenv").config();
// const PORT = process.env.PORT
app.listen(process.env.PORT || 3001);
// app.listen(PORT, ()=>{
//     console.log('Listening on Port:', PORT)
// });
