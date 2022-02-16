var express = require('express');
var router = express.Router();
var rvHelper = require('../helpers/rv-helper')


router.get('/test', (req,res)=>{
  res.json({
    status: 1,
    time: "test",
    date: "done"
  })
})

router.post('/addExpense', (req,res)=>{
  
  let ts = Date.now();
  let date_ob = new Date(ts);
  let month = date_ob.getMonth() + 1 
  let time = date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds()
  let dateF = date_ob.getFullYear() + "-" + month + "-" + date_ob.getDate()
  req.body.dt = dateF
  req.body.ti = time
  req.body.ed = 0

  rvHelper.addExpense(req.body).then((responce) =>
  {
    if (responce)
    {
      console.log(responce)
      res.json({
        status: 1,
        time: time,
        date: dateF,
        id: responce.toString()
      })
    }
    else
    {
      res.json({
        status: 0,
        time: time,
        date: dateF,
        id: ""
      })
    }
  })
})

 



module.exports = router;
