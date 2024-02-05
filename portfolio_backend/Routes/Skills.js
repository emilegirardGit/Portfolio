module.exports = function(sql) {

    const express = require('express');
    const router = require('express').Router();

    router.get('/skills/:title', async (req, res) => {
        const { title } = req.params;
        try {
            const data = await sql`select * from Skills where title = ${title}`
            res.json(data);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: "Server error!" });
        }
    });
    return router;
}