(function() {
  var parts = window.location.search.substr(1).split("-");

  if (!parts || parts.length !== 2) {
    return;
  }

  var start = parseInt(parts[0], 10),
      end = parseInt(parts[1], 10),
      result = document.getElementById("result");

  result.textContent = "Detection logic took "
    + (end - start) + " ms, extra redirect ~" + (Date.now() - end)
    + " ms on top of that.";

}());
