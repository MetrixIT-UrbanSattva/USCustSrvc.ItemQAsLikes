/**
 * Copyright (C) Skill Works IT - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT <contact@skillworksit.com>, Jan 2023
 */

const LoginController = require('../../controllers/LoginController');

module.exports.controller = (app, passport) => {

  app.get('/', LoginController.apiServerStatus);

  app.post('/kmmcm/mob/login/send/otp', LoginController.kmMobSendLoginOtp);
  app.post('/kmmcm/mob/login/verify/otp', LoginController.kmMobUserLogin);

  app.post('/kmcm/login/send/otp', LoginController.kmWebUserLogin);
  app.post('/kmcm/login/verify/otp', LoginController.kmWebUserLogin);

}
