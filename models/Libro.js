var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var libroSchema = new Schema({
	titulo: {type:String},
	autor: {type:String},//{type: Schema.ObjectId, ref:"Autor", require:true},
	anio: {type:Number},
	genero: {type:String}
});
module.exports = mongoose.model('Libro',libroSchema);