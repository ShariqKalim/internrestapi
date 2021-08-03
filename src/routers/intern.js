const express = require("express");
const router = new express.Router();

const internships = require("../models/internships");

//handling POST request
router.post("/interns", async (req, res) => {
  try {
    const addInternRecords = new internships(req.body);
    console.log(req.body);
    const insertInterns = await addInternRecords.save();
    res.status(201).send(insertInterns);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling GET request
router.get("/interns", async (req, res) => {
  try {
    const getInterns = await internships.find({});
    res.send(getInterns);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handle get request of individual
router.get("/interns/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getInterns = await internships.findById({ _id });
    res.send(getInterns);
  } catch (e) {
    res.status(400).send(e);
  }
});

//handling PATCH request
router.patch("/interns/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getInterns = await internships.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getInterns);
  } catch (e) {
    res.status(500).send(e);
  }
});

//handlingn Delete Request
router.delete("/interns/:id", async (req, res) => {
  try {
    const getInterns = await internships.findByIdAndDelete(req.params.id);

    res.send(getInterns);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
