/**
 * This function as it is only allows logged in users, or admins to create,update or delete documents
 * @param newDoc
 * @param oldDoc
 * @param userCtx
 * @param secObj
 */

function validate (newDoc, oldDoc, userCtx, secObj) {
    var ddoc = this;

    secObj.admins = secObj.admins || {};
    secObj.admins.names = secObj.admins.names || [];
    secObj.admins.roles = secObj.admins.roles || [];

    var IS_DB_ADMIN = false;
    if(~ userCtx.roles.indexOf('_admin')) {
        IS_DB_ADMIN = true;
    }
    if(~ secObj.admins.names.indexOf(userCtx.name)) {
        IS_DB_ADMIN = true;
    }
    for(var i = 0; i < userCtx.roles; i++) {
        if(~ secObj.admins.roles.indexOf(userCtx.roles[i])) {
            IS_DB_ADMIN = true;
        }
    }

    var IS_LOGGED_IN_USER = false;
    if (userCtx.name !== null) {
        IS_LOGGED_IN_USER = true;
    }
    /* lifted from guide.couchdb.org/draft/validation.html */
    function require(beTrue, message) {
      if (!beTrue) throw({forbidden: message});
    }

    var now = new Date();
    newDoc.date = [ now.getYear(), now.getMonth(), now.getDay() ];

}
