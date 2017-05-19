const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = Schema({
    body: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    article: { type: Schema.Types.ObjectId, ref: 'Article' },
});

let Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;