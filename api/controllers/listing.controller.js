import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
    try {
        // let newListing = new Listing(req.body);

        // const listing = await newListing.save();
        const listing = await Listing.create(req.body);
        // console.log("debug try")
        return res.status(201).json(listing);
        
    } catch (error) {
        // console.log("debug error")
        next(error);

    }

};