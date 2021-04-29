const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    let promotions = 'SELECT * FROM promotions;'
    let profile = 'SELECT * FROM profile;'
    let normal_day = 'SELECT * FROM normal_day;'
    let normal_night = 'SELECT * FROM normal_night;'
    let weekend_night = 'SELECT * FROM weekend_night;'
    let weekend_day = 'SELECT * FROM weekend_day;'
    let store = 'SELECT * FROM store;'

    const [rows1] = await pool.query(promotions);
    const [rows2] = await pool.query(profile);
    const [rows3] = await pool.query(normal_day);
    const [rows4] = await pool.query(normal_night);
    const [rows5] = await pool.query(weekend_day);
    const [rows6] = await pool.query(weekend_night);
    const [rows7] = await pool.query(store);
    return res.json({ promotions: rows1, profile: rows2, normal_day: rows3, normal_night: rows4, weekend_day: rows5, weekend_night: rows6, store: rows7 });
  } catch (err) {
    return res.status(500).json(err)
  }
});

exports.router = router;
