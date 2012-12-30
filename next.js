//Next
//By Dean Peterson
//provides convenient way to return an array of strings
//Allows for multiple instances

function Next(dataSource) {
    "use strict";
    this.stringArray = (function() {
        //test source is string and convert to array
        if (Object.prototype.toString.call(dataSource) !== '[object Array]') {
            return dataSource.split(" ");
        }

        if (Object.prototype.toString.call(dataSource) === '[object Array]') {
            return dataSource;
        }

    }());
    this.len = this.stringArray.length - 1;
    this.index = 0;
}
Next.prototype = {
    next: function() {
        "use strict";
        var strReturn = this.stringArray[this.index];
        //increment or reset index
        if (this.index >= this.len) {
            this.index = 0;
        } else {
            this.index = this.index + 1;
        }
        return strReturn;
    }
};

//test and usage
var msg = function(text) {
    var $result = $("#result"),
        $div = $("<div></div>").text(text).appendTo($result);
},
    testArray = ["1", "2", "3", "4", "5", "6"],
    testString = "one two three four";



var CycleA = new Next(testString),
    CycleB = new Next(testArray);

for (var i = 0, len = 8; i < len; i = i + 1) {
    msg("CycleA : " + CycleA.next() + " CycleB : " + CycleB.next());
    msg("");
};​