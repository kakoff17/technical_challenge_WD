const allPhones = require("../data/phones.json")
const router = require("express").Router();

//GET "/phones" => Send all phones list

router.get("/", (req, res, next) =>{
    res.json(allPhones);
});

// GET "/phones/:phoneId" => Send a specific phone to the front

router.get("/:phoneId", (req, res, next) => {
    const foundPhone = allPhones.filter((eachPhone) => {      
      return eachPhone.id === req.params.phoneId
    })
    res.json(foundPhone)
  })

module.exports = router;