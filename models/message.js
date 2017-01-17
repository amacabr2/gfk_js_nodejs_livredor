let connexion = require('../config/db');
let moment = require('../config/moment');


class Message {

    constructor(row) {
        this.row = row;
    }

    get id() {
        return this.row.id;
    }

    get content() {
        return this.row.content;
    }

    get created_at() {
        return moment(this.row.created_at);
    }

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
            cb(rows.map((row) => new Message(row)));
        });
    }

}

module.exports = Message;