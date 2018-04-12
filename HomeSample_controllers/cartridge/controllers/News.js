'use strict';

var app = require('~/cartridge/scripts/app');
var guard = require('~/cartridge/scripts/guard');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');
var txn = require('dw/system/Transaction');


function show(){
	app.getView().render('news');
}

exports.show = guard.ensure(['get'], show);