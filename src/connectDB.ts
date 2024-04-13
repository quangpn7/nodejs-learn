import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/hello_mongo");

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

export { Schema as AppSchema, ObjectId };
