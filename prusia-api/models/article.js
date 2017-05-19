const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = Schema({
    title : String,
    body: String,
    // El author esta por referencia
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    // Los tags estan "copiados y pegados".
    tags: Array,
    published: Boolean
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;