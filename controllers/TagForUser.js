'use strict';

var utils = require('../utils/writer.js');
var TagForUser = require('../service/TagForUserService');

module.exports.userUser_namePOST = function userUser_namePOST (req, res, next) {
  var user_name = req.swagger.params['user_name'].value;
  var mcRequestToken = req.swagger.params['mc-request-token'].value;
  var offest = req.swagger.params['offest'].value;
  var user = req.swagger.params['user'].value;
  
  TagForUser.userUser_namePOST(user_name,mcRequestToken,offest,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
