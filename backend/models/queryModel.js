const mongoose = require('../connection');

const schema = new mongoose.Schema({
    title : String,
    data: String,
    dev: {type: mongoose.Types.ObjectId, ref: 'users'},
    upvotes: Number,
    tags: Array,
    comments: {type: Array, default : []},
    createAt : {type: Date, default : new Date()}
})


const model = mongoose.model("query", schema);

module.exports = model;