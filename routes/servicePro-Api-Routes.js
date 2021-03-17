const router = require("express").Router();
var db = require("../models");
const { Op } = require("sequelize");
const uploadController = require("../controllers/uploadController")
const upload = require('../middleware/multer');
var passport = require("../config/passport");

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

router.get("/users", (req, res) => {
  db.User
    .findAll({})
    .then((applications) => res.json(applications))
    .catch((err) => res.status(500).json(err));
});

router.get("/registerpros", (req, res) => {
  db.servicePro
    .findAll({})
    .then((applications) => res.json(applications))
    .catch((err) => res.status(500).json(err));
});

router.post("/registerpros", (req, res) => {
    console.log("Post Triggered", req.body);
    db.servicePro
      .create(req.body)
      .then(() =>
        res.json({
          success: true,
        })
      )
      .catch((err) => res.status(500).json(err));
  });

  router.post("/sign-up", (req, res) => {
    console.log("Post Triggered", req.body);
    db.User
      .create(req.body)
      .then(() =>
        res.json({
          success: true,
        })
      )
      .catch((err) => res.status(500).json(err));
  });

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  router.post("/searchpros", (req, res) => {
  switch (req.body.searchValue) {
    case "servicePro_firstName":
      db.servicePro
        .findAll({
          where: {
            servicePro_firstName: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "servicePro_lastName":
      db.servicePro
        .findAll({
          where: {
            servicePro_lastName: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "servicePro_category":
      db.servicePro
        .findAll({
          where: {
            servicePro_category: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "servicePro_city":
      db.servicePro
        .findAll({
          where: {
            ServicePro_city: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "servicePro_state":
      db.servicePro
        .findAll({
          where: {
            servicePro_state: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    case "servicePro_zipCode":
      db.servicePro
        .findAll({
          where: {
            servicePro_zipCode: {
              [Op.substring]: req.body.userInput,
            },
          },
        })
        .then((applications) => res.json(applications))
        .catch((err) => res.status(500).json(err));
      break;
    default:
      break;
  }
});

  

  module.exports = router;
  // Get route for returning posts of a specific category
  // app.get('/api/posts/category/:category', (req, res) => {
  //   db.Post.findAll({
  //     where: {
  //       category: req.params.category,
  //     },
  //   }).then((dbPost) => {
  //     res.json(dbPost);
  //   });
  // });

  // Get route for retrieving a single post
  // app.get('/api/posts/:id', (req, res) => {
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id,
  //     },
  //   }).then((dbPost) => res.json(dbPost));
  // });

  // POST route for saving a new post
  // app.post('/api/posts', (req, res) => {
  //   console.log(req.body);
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category,
  //   }).then((dbPost) => res.json(dbPost));
  // });

  // DELETE route for deleting posts
  // app.delete('/api/posts/:id', (req, res) => {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   }).then((dbPost) => res.json(dbPost));
  // });

  // PUT route for updating posts
  // app.put('/api/posts', (req, res) => {
  //   db.Post.update(req.body, {
  //     where: {
  //       id: req.body.id,
  //     },
  //   }).then((dbPost) => res.json(dbPost));
  // });
