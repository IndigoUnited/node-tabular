'use strict';

var Tabular = function (opt) {
    opt = opt || {};
    
    this._padding     = opt.padding || 2;
    this._marginLeft  = opt.marginLeft || 0;
//    this._width       = opt.width || (process.stdout.isTTY ? process.stdout.getWindowSize()[0] : 9999);

    this._rows        = [];
};

function repeat(str, n) {
    var res = '';
    for (; n > 0; --n) {
        res += str;
    }

    return res;
}

Tabular.prototype.push = function (row) {
    this._rows.push(row);
};

Tabular.prototype.get = function () {
    if (this._rows.length === 0) {
        return '';
    }

    var rows       = this._rows;
    var totalRows  = rows.length;
    var marginLeft = this._marginLeft;
    var padding    = this._padding;

    // find widest first column
    var widestFirstCol = 0;
    for (var i = totalRows - 1; i >= 0; i--) {
        if (rows[i][0].length > widestFirstCol) {
            widestFirstCol = rows[i][0].length;
        }
    }

    var result = '';
    var rowPadding;
    for (i = 0; i < totalRows; ++i) {
        rowPadding = widestFirstCol - rows[i][0].length + padding;
        result = result + repeat(' ', marginLeft) + rows[i][0] + repeat(' ', rowPadding) + rows[i][1] + '\n';
    }

    return result;
};

module.exports = Tabular;