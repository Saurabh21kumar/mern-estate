import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
// router.get('/temp',(req, res)=>{
//     res.send('asklasl')
// })
// router.post('/create', createListing);
router.post('/create', verifyToken, createListing);

export default router;