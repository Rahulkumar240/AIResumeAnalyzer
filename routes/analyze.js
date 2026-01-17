const express = require("express");
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const analyzeResume = require("../utils/analyzer");

const router = express.Router();

// Multer config
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    // ✅ CHECK FILE
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No resume file uploaded",
      });
    }

    // ✅ SAFE ROLE PARSING
    const roles = Array.isArray(req.body.roles)
      ? req.body.roles
      : JSON.parse(req.body.roles || "[]");

    // ✅ READ PDF
    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(dataBuffer);

    const result = analyzeResume(pdfData.text, roles);

    // ✅ CLEANUP
    fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("ANALYSIS ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
