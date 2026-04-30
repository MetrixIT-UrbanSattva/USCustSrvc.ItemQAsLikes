/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

var config = require('config');
var mongoose = require('mongoose');
var {v4: uuidv4} = require('uuid');

mongoose.createConnection(config.mongoDBConnection, {useUnifiedTopology: true, useNewUrlParser: true});
const Schema = mongoose.Schema;

// --- Begin: Customers Item Questions and Answers Likes Schema --- //
const schema = new Schema({
  _id: {type: String, default: uuidv4()},
  ciqa: {type: String, required: true}, // ref: config.collCustsItemQAs
  vndrOrg: {type: String, required: true}, // ref: config.collVndrsOrgs: VNDR0001
  citd: {type: String, required: true}, // ref: config.collCustsItemDtls: Customers Item Details - Record ID
  voiCode: {type: String, required: true}, // Vendor Organizations Item Code

  lType: {type: String, required: true}, // Like Type: Liked, Disliked, Helpful
  lVal: {type: Boolean, required: false}, // Liked and Helpful = true, Disliked = false;

  delFlag: {type: Boolean, default: false}, // Deleted Flag
  cuRakam: {type: String, required: true}, // Created User Type
  cUser: {type: String, required: true, trim: true}, // Created Users._id
  cUserName: {type: String, required: true}, // Created Users.pName
  cDtStr: {type: String, required: true}, // Date & Time String - Format = YYYY-MM-DD HH:mm:ss
  cDtNum: {type: Number, required: true}, // Date & Time Number
  uuRakam: {type: String, required: true}, // Updated User Type
  uUser: {type: String, required: true, trim: true}, // Updated Users._id
  uUserName: {type: String, required: true}, // Updated Users.pName
  uDtStr: {type: String, required: true}, // Date & Time String - Format = YYYY-MM-DD HH:mm:ss
  uDtNum: {type: Number, required: true}, // Date & Time Number
});

schema.index({ciqa: 1, lType: 1, cUser: 1}, {unique: true});

module.exports = mongoose.model(config.collCustsItemQasLikes, schema);
// --- End: Customers Item Questions and Answers Likes Schema --- //
