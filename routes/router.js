const express = require("express");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const job = await prisma.jobs.findMany();
  res.json(job);
});
router.get("/users", (req, res) => {
  res.json([{ name: "Taro" }, { name: "Hanako" }]);
});
router.post('/job', async (req, res) => {
  const job = await prisma.jobs.create({ data: req.body });
  res.json(job);
});

module.exports = router;
