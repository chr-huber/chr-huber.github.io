remark.macros.width = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

remark.macros.height = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="height: ' + percentage + '" />';
};