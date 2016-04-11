var _ = require("lodash");



var randomNumbers = _.times(1000, function(){

 return _.random(1000);

});
console.log(randomNumbers);

// _.times || _.range

// _.random