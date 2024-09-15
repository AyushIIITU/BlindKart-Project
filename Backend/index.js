import express from "express";
const app=express();
const port=3010;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/store.html');
});
app.listen(port,()=>{
    console.log("Server is running on port "+port);
})