let mongoose = require('mongoose');

mongoose.connect('mongodb://jrivera30:Chicoguada14uf@ds155903.mlab.com:55903/restapi', { useNewUrlParser: true });

module.exports = mongoose;