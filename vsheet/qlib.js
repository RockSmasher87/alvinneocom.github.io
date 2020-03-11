'use strict';
// https://stackoverflow.com/a/7826782
// this isn't normally required, however it is used for convenience
function parseQuery(search) {

    var args = search.substring(1).split('&');

    var argsParsed = {};

    var i, arg, kvp, key, value;

    for (i=0; i < args.length; i++) {

        arg = args[i];

        if (-1 === arg.indexOf('=')) {

            argsParsed[arg.trim()] = true;
        }
        else {

            kvp = arg.split('=');

            key = kvp[0].trim();

            value = kvp[1].trim();

            argsParsed[key] = value;
        }
    }

    return argsParsed;
}
