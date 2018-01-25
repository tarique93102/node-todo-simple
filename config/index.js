var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        // returning the mongoDB link being used at present
        return 'mongodb://'+ configValues.uname + ':' + configValues.pwd + '@ds111618.mlab.com:11618/nodetodosample-93102';
    }
}