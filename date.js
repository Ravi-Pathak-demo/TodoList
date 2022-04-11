exports.getDate = function () {
    var today = new Date();
    var options =
    {
        weekend: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

