function JHConv(target) {
    const iconv = require('iconv-lite');
    var remainder = iconv.encode(target, 'EUC-KR')
        .toString('hex')
        .toUpperCase();
    var converted = '';
    while (remainder != '') {
        converted += '%' + remainder.substr(0, 2);
        remainder = remainder.substr(2);
    }
    return converted;
}

module.exports = JHConv;
