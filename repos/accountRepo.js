var db = require('../fn/db');

// exports.login = user => {
//     var sql = `select * form membership_users where memberID = '${user.username}' and passMD5 = '${user.password}'`;
//     db.load(sql);
// }

exports.login = user => {
    var sql = `select * from membership_users where memberID = '${user.username}' and passMD5 = '${user.password}'`;
    return db.load(sql);
}