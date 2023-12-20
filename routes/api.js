// import StudentController
const StudentController = require("../controllers/StudentController.js");

const express = require("express");
const router = express.Router();

/**
 * membuat routing
 * method get menerima 2 params
 * param 1 adalah endpoint
 * param 2 adalah callback
 * callback menerima object req dan res
 */
router.get("/", (req, res) => {
  res.send("Hello Express");
});

// routing students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export router
module.exports = router;
