// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
        if (currency > 10000) {
            return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }
        if (currency <= 0) {
            return {}
        }
     
        var exchange = {H: 50, Q: 25, D: 10, N:5, P: 1};
       
        var used = {};
        for (key in exchange){
            var rest = currency % exchange[key];
            var integer = (currency - rest) / exchange[key];
            if (integer > 0) {
                used[key] = integer;
            }
            currency = rest;
        }
        return used;
    }