module.exports = function(sql) {

    const express = require('express');
    const router = require('express').Router();

    router.get('/data', async (req, res) => {
        try {
            const data = await sql`select * from test`
            res.json(data);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: "Server error!" });
        }
    });
    return router;
}
