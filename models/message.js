let connexion = require('../config/db');

class Message {

    static create(content, callback) {
        connexion.query(
            'INSERT INTO message SET content = ?, created_at = ?',
            [content, new Date()],
            (err, result) => {
                if (err) throw err;
                callback(result);
            }
        )
    }

}

module.exports = Message;