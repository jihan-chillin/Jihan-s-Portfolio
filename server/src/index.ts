import express from 'express';
import db from './models';

// const app = new App().application;
const app = express();

app.get("/main", function(req, res){
  res.send("이곳은 main페이지")
})

db.sequelize.sync()
    .then(()=>{
        console.log("db연결 성공");
    })
    .catch(console.error);

app.listen(3060, () => {
  console.log('3060포트 express 연결');
});