const names=require('./module_const')
const sayHi =require('./module_func')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

const data_2=require('./module_const2')
console.log(data_2)

require('./module_func2') // function gets invoked automatically when the respective module is invoked