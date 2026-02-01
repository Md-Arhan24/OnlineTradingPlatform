const {model} = require('mongoose');

const PositionSchema = require('../schema/PositionSchema');

const PositionModel = model("position",PositionSchema);

module.exports = {PositionModel};