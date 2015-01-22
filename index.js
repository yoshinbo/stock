var cheerio = require("cheerio-httpcli");

var codes = [
    2121, 2122
];
var uri = "http://info.finance.yahoo.co.jp/search/?query="+codes.join("+");

cheerio.fetch(uri, null, function(error, $) {
    if (error) console.error(error);
    else {
        var results = $(".searchresults");
        for (var i = 0; results[i] !== undefined; i++) {
            var $result = $(results[i]);
            console.log($result.find(".name"));
            //console.log($result.find(".name").text());
            //console.log($result.find(".code").text());
        }
    }
});
