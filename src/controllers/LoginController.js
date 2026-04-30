/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

const logger = require('../lib/logger');
const util = require('../lib/util');
const LoginService = require('../services/LoginService');

const apiServerStatus = (req, res) => {
  const resObj = {httpStatus: 200, status: '200', resData: {message: 'Kaia Mart Vendor Customers - API server is running'}};
  util.sendApiResponse(res, resObj);
}

// ---------------------- BEGIN: Mobile Login APIs ---------------------- //
const kmMobSendLoginOtp = (req, res) => {
  if(req.body.userId) {
    LoginService.kmMobSendLoginOtp(req.body, res, (resObj) => {
      util.sendApiResponse(res, resObj);
    });
  } else {
    logger.error('controllers/LoginController.js - kmMobSendLoginOtp: User Id is required');
    const bResObj = {httpStatus: 400, status: '197', resData: {message: 'User Id is required'}};
    util.sendApiResponse(res, bResObj);
  }
}

const kmMobUserLogin = (req, res) => {
  const resObj = {httpStatus: 200, status: '200', resData: {message: 'Kaia Mart Vendor Customers - API server is running'}};
  util.sendApiResponse(res, resObj);
}
// ---------------------- END: Mobile Login APIs ---------------------- //


// ---------------------- BEGIN: Web Login APIs ---------------------- //
const kmWebUserLogin = (req, res) => {
  const resObj = {httpStatus: 200, status: '200', resData: {message: 'Kaia Mart Vendor Customers - API server is running'}};
  util.sendApiResponse(res, resObj);
}
// ---------------------- END: Web Login APIs ---------------------- //


module.exports = {
  apiServerStatus,
  kmMobSendLoginOtp,
  kmMobUserLogin,

  kmWebUserLogin
}
