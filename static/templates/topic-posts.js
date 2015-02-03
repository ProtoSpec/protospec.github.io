function template(locals) {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),topicsObj = locals_.topicsObj;
buf.push("<ul>");
// iterate topicsObj
;(function(){
  var $$obj = topicsObj;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var topic = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade.interp = topic.displayName) ? "" : jade.interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var topic = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade.interp = topic.displayName) ? "" : jade.interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul>");;return buf.join("");
}