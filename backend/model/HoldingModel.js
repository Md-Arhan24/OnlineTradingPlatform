const {model} = require('mongoose');

const {HoldingSchmea} = require('../schema/HoldingSchema');

const HoldingModel = new model("holding",HoldingSchmea);

module.exports = {HoldingModel};