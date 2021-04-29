const express = require("express");
const path = require("path");
const pool = require("../config");
const fs = require("fs");
const Joi = require('joi')
const bcrypt = require('bcrypt')

router = express.Router();

// Require multer for file upload
const multer = require("multer");
// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./static/uploads");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

const passwordValidator = (value, helpers) => {
  if (value.length < 8) {
    throw new Joi.ValidationError('Password must contain at least 8 characters')
  }
  if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
    throw new Joi.ValidationError('Password must be harder')
  }
  return value
}


const usernameValidator = async (value, helpers) => {
  const [rows, _] = await pool.query(
    "SELECT username FROM profile WHERE username = ?",
    [value]
  )
  if (rows.length > 0) {
    const message = 'This user is already taken'
    throw new Joi.ValidationError(message, { message })
  }
  return value
}

const signupSchema = Joi.object({
  email: Joi.string().required().email(),
  mobile: Joi.string().required().pattern(/0[0-9]{9}/),
  firstname: Joi.string().required().max(150),
  lastname: Joi.string().required().max(150),
  password: Joi.string().required().custom(passwordValidator),
  ConPass: Joi.string().required().valid(Joi.ref('password')), // ต้องเหมือนกับ password
  username: Joi.string().required().min(5).external(usernameValidator),
})

// Like blog that id = blogId
router.put("/blogs/addlike/:blogId", async function (req, res, next) {
  const conn = await pool.getConnection();
  // Begin transaction
  await conn.beginTransaction();

  try {
    let [
      rows,
      fields,
    ] = await conn.query("SELECT `like` FROM `blogs` WHERE `id` = ?", [
      req.params.blogId,
    ]);
    let like = rows[0].like + 1;

    await conn.query("UPDATE `blogs` SET `like` = ? WHERE `id` = ?", [
      like,
      req.params.blogId,
    ]);

    await conn.commit();
    res.json({ like: like });
  } catch (err) {
    await conn.rollback();
    return res.status(500).json(err);
  } finally {
    console.log("finally");
    conn.release();
  }
});


router.post('/register', upload.array("myImage", 5), async function (req, res, next) {
  if (req.method == "POST") {
    const file = ""
    if (req.files[0] === undefined) {
      this.file = ""
    } else {
      this.file = req.files[0].path.substring(6);
    }
    try {
      await signupSchema.validateAsync(req.body, { abortEarly: false })
    } catch (err) {
      console.log(err)
      return res.status(400).json(err)
    }
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const telephone = req.body.mobile
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const conn = await pool.getConnection();
    // Begin transaction
    await conn.beginTransaction();
    try {
      let results = await conn.query(
        "INSERT INTO `profile`(`firstname`, `lastname`, `mobile`, `username`, `password`, `email`,`picture`) VALUES(?,  ?, ?, ?, ?, ?,?);",
        [firstname, lastname, telephone, username, password, email, file]
      );

      await conn.commit();
      res.send("success!");
    } catch (err) {
      await conn.rollback();
      return res.status(400).json(err);
    } finally {
      console.log("finally");
      conn.release();
    }
  }

});
// Blog detail
router.get("/blogs/:id", function (req, res, next) {
  // Query data from 3 tables
  const promise1 = pool.query("SELECT * FROM blogs WHERE id=?", [
    req.params.id,
  ]);
  const promise2 = pool.query("SELECT * FROM comments WHERE blog_id=?", [
    req.params.id,
  ]);
  const promise3 = pool.query("SELECT * FROM images WHERE blog_id=?", [
    req.params.id,
  ]);

  // Use Promise.all() to make sure that all queries are successful
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      const [blogs, blogFields] = results[0];
      const [comments, commentFields] = results[1];
      const [images, imageFields] = results[2];
      res.json({
        blog: blogs[0],
        images: images,
        comments: comments,
        error: undefined,
      });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});

router.put("/blogs/:id", function (req, res) {
  // Your code here
  return;
});

router.delete("/product/:blogId", async function (req, res, next) {
  // Your code here
  const conn = await pool.getConnection();
  // Begin transaction
  await conn.beginTransaction();

  try {
    // Delete the selected blog
    const [
      rows2,
      fields2,
    ] = await conn.query("DELETE FROM `store` WHERE `id` = ?", [
      req.params.blogId,
    ]);

    if (rows2.affectedRows === 1) {
      await conn.commit();
      res.status(204).send();
    } else {
      throw "Cannot delete the selected blog";
    }
  } catch (err) {
    console.log(err)
    await conn.rollback();
    return res.status(500).json(err);
  } finally {
    conn.release();
  }
});

exports.router = router;
