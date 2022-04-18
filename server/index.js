import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})