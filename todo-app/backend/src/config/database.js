const mongoose = require('mongoose')
mongoose.Promise = global.Promise /*retira a mensagem de advertência*/
module.exports=mongoose.connect('mongodb://localhost/todo')



