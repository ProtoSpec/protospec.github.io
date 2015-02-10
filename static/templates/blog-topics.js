function template(locals) {
var jade_debug = [{ lineno: 1, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,topicsObj = locals_.topicsObj;
jade_debug.unshift({ lineno: 0, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" });
jade_debug.unshift({ lineno: 1, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" });
buf.push("<div id=\"blog-container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" });
buf.push("<span id=\"back-home\" data-state=\"home\" class=\"glyphicon glyphicon-home state-transition\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" });
buf.push("<ul id=\"topics-container\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" });
// iterate topicsObj
;(function(){
  var $$obj = topicsObj;
  if ('number' == typeof $$obj.length) {

    for (var topicName = 0, $$l = $$obj.length; topicName < $$l; topicName++) {
      var topic = $$obj[topicName];

jade_debug.unshift({ lineno: 4, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" });
jade_debug.unshift({ lineno: 5, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" });
buf.push("<li data-state=\"topic\"" + (jade.attr("id", topicName, true, false)) + " class=\"state-transition\">" + (jade.escape(null == (jade.interp = topic.displayName) ? "" : jade.interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var topicName in $$obj) {
      $$l++;      var topic = $$obj[topicName];

jade_debug.unshift({ lineno: 4, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" });
jade_debug.unshift({ lineno: 5, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/blog-topics.jade" });
buf.push("<li data-state=\"topic\"" + (jade.attr("id", topicName, true, false)) + " class=\"state-transition\">" + (jade.escape(null == (jade.interp = topic.displayName) ? "" : jade.interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "#blog-container\n  span.glyphicon.glyphicon-home.state-transition#back-home(data-state='home')\n  ul#topics-container\n    each topic, topicName in topicsObj\n      li.state-transition(data-state='topic' id=topicName)= topic.displayName\n");
}
}