const router = require("express").Router();
var db = require("../models");
const { Op } = require("sequelize");

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
