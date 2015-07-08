(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    var format = function(s) {
        return "> " + s + "<br />";
    }
    console.log = function () {
        for (var i in arguments) {
            var message = arguments[i];
            if (typeof message == 'object') {
                logger.innerHTML += format((JSON && JSON.stringify ? JSON.stringify(message) : message));
            } else {
                logger.innerHTML += format(message);
            }
        }
    }
})();