let connexion = require('../config/db');

class Message {

    static create(content, cb) {
        connexion.query(
            'INSERT INTO message SET content = ?, created_at = ?',
            [content, new Date()],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        )
    }

    static all(cb) {
        connexion.query('SELECT * FROM message', (err, rows) => {
            if (err) throw err;
            cb(rows);
        });
    }

}

module.exports = Message;