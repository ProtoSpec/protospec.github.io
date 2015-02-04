function template(locals) {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),topicsObj = locals_.topicsObj;
buf.push("<ul id=\"topics-container\">");
// iterate topicsObj
;(function(){
  var $$obj = topicsObj;
  if ('number' == typeof $$obj.length) {

    for (var topicName = 0, $$l = $$obj.length; topicName < $$l; topicName++) {
      var topic = $$obj[topicName];

buf.push("<li data-state=\"topic\"" + (jade.attr("id", topicName, true, false)) + " class=\"state-transition\">" + (jade.escape(null == (jade.interp = topic.displayName) ? "" : jade.interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var topicName in $$obj) {
      $$l++;      var topic = $$obj[topicName];

buf.push("<li data-state=\"topic\"" + (jade.attr("id", topicName, true, false)) + " class=\"state-transition\">" + (jade.escape(null == (jade.interp = topic.displayName) ? "" : jade.interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul>");;return buf.join("");
}