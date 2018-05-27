'use strict';


/**
 * api-summary
 * swagger-example
 *
 * user_name String spec for user_name
 * mcRequestToken String 
 * offest Integer offset for pagination (optional)
 * user User_1  (optional)
 * returns user
 **/
exports.userUser_namePOST = function(user_name, user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}