//setting express project✅

// const express=require('express');
// const app=express();
// app.get("/",function(req,res){
//     res.send("this is govinda here");
// });
// app.listen(3000);


//middleware✅ 
// const express=require('express');
// const app=express();


//middleware
// app.use(function(req,res,next){
//     console.log("middleware chala");
//     next();
// });
// app.use(function(req,res,next){
//     console.log("middleware phir se chala");
//     next();
// });


// app.get("/",function(req,res){
//     res.send("i am here");
// });
// app.get("/men",function(req,res){
//     res.send("this is men");
// });
// app.listen(3000);


//error handler✅ 
// const express=require('express');
// const app=express();
// app.get("/",function(req,res,next){
//     return next(new Error("not found"));  //this will display in console
// });


//error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')   //this will display in frontend
//   })

// app.listen(3000);