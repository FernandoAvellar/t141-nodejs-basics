const string = require( 'useful-string' );
const _ = require( 'lodash');

console.log(string.guid());
console.log(string.hyphenate( 'Lorem IpsumDolor_sit' ));
console.log(string.toCamelCase( 'lorem IpsumDolor sit' ));

_.times(4, () => {
    console.log("id: " + string.guid())
})