const Todo = require('./todo')
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new:true, runValidators: true}) 
// new:true      ->  quando o registro for atualizado, o mongo retorna o registro atualizado, caso contrário
//                   o mongo retorna o registro antigo, mesmo que ele tenha sido atualizado com sucesso
// runValidators ->  faz com que o mongo execute as validações para chamadas de "put", caso contrário as
//                   validações só serão executadas em chamadas de "post"

module.exports = Todo

