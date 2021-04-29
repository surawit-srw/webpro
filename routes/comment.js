const express = require("express");
const path = require("path");
const pool = require("../config");
const fs = require("fs");

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

// Get comment
router.get('/:blogId/comments', function (req, res, next) {
});

//create new ItemStore
router.post('/store', upload.array("productImage", 5), async function (req, res, next) {
    if (req.method == "POST") {
        const file = req.files[0].path.substring(6);
        console.log(file)
        if (!file) {
            return res.status(400).json({ message: "Please upload a file" });
        }
        const type = req.body.type
        const brand = req.body.brand
        const price = req.body.price
        const quantity = req.body.quantity

        const conn = await pool.getConnection();
        // Begin transaction
        await conn.beginTransaction();
        try {
            const [rows1, fields1] = await conn.query(
                'INSERT INTO `store` ( `type`, `name`, `price`, `quantity`, `url`) VALUES ( ?, ?, ?,?,?)', [type, brand, price, quantity, file]
            )
            const [rows2, fields2] = await conn.query(
                'SELECT * FROM `store` WHERE `id` = ?',
                [rows1.insertId]
            )
            await conn.commit()
            return res.json(rows2[0])
        } catch (err) {
            await conn.rollback();
            return res.status(400).json(err);
        } finally {
            console.log("finally");
            conn.release();
        }
    }



    // type = req.body.type
    // Name = req.body.name
    // price = req.body.price
    // url = req.body.url
    // quantity = req.body.quantity
    // const conn = await pool.getConnection()
    // // Begin transaction
    // await conn.beginTransaction();
    // try {
    //     const [rows1, fields1] = await conn.query(
    //         'INSERT INTO `store` ( `type`, `name`, `price`, `url`, `quantity`) VALUES ( ?, ?, ?,?,?)', [type, Name, price, url, quantity]
    //     )
    //     const [rows2, fields2] = await conn.query(
    //         'SELECT * FROM `store` WHERE `id` = ?',
    //         [rows1.insertId]
    //     )
    //     await conn.commit()
    //     return res.json(rows2[0])
    // } catch (err) {
    //     await conn.rollback();
    //     return res.status(500).json(err)
    // } finally {
    //     console.log('finally')
    //     conn.release();
    // }
});

// Create new comment
router.post('/:blogId/comments', async function (req, res, next) {
    comment = req.body.comment
    const conn = await pool.getConnection()
    // Begin transaction
    await conn.beginTransaction();
    try {
        const [rows1, fields1] = await conn.query(
            'INSERT INTO `comments` (`blog_id`, `comment`, `like`, `comment_date`) VALUES (?, ?, ?, CURRENT_TIMESTAMP)',
            [req.params.blogId, comment, 0]
        )
        const [rows2, fields2] = await conn.query(
            'SELECT * FROM `comments` WHERE `id` = ?',
            [rows1.insertId]
        )
        await conn.commit()
        return res.json(rows2[0])
    } catch (err) {
        await conn.rollback();
        return res.status(500).json(err)
    } finally {
        console.log('finally')
        conn.release();
    }
});

// Update comment
router.put('/comments/:commentId', function (req, res, next) {
    return
});

// Delete comment
router.delete('/comments/:commentId', function (req, res, next) {
    return
});

// Delete comment
router.put('/comments/addlike/:commentId', async function (req, res, next) {
    const conn = await pool.getConnection();
    // Begin transaction
    await conn.beginTransaction();

    try {
        let [
            rows,
            fields,
        ] = await conn.query("SELECT `like` FROM `comments` WHERE `id` = ?", [
            req.params.commentsId,
        ]);
        let like = rows[0].like + 1;

        await conn.query("UPDATE `comments` SET `like` = ? WHERE `id` = ?", [
            like,
            req.params.commentsId,
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


exports.router = router