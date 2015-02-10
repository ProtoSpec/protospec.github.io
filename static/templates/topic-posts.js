function template(locals) {
var jade_debug = [{ lineno: 1, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" }];
try {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),undefined = locals_.undefined,topic = locals_.topic;
jade_debug.unshift({ lineno: 0, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
jade_debug.unshift({ lineno: 1, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<div id=\"posts\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<span id=\"close-topic\" data-state=\"close\" class=\"glyphicon glyphicon-remove-sign state-transition\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
if ( topic.posts)
{
jade_debug.unshift({ lineno: 4, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
jade_debug.unshift({ lineno: 4, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
// iterate topic.posts
;(function(){
  var $$obj = topic.posts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = $$obj[$index];

jade_debug.unshift({ lineno: 4, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
jade_debug.unshift({ lineno: 5, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<div class=\"post\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<div class=\"preview\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<span class=\"show-less-placeholder\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push(null == (jade.interp = post.preview + '...') ? "" : jade.interp);
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<span data-state=\"post\" class=\"show-more state-transition\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("(more)");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<div class=\"text\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<span data-state=\"post\" class=\"show-less state-transition\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("(less)");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push(null == (jade.interp = post.text) ? "" : jade.interp);
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var post = $$obj[$index];

jade_debug.unshift({ lineno: 4, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
jade_debug.unshift({ lineno: 5, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<div class=\"post\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<div class=\"preview\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<span class=\"show-less-placeholder\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push(null == (jade.interp = post.preview + '...') ? "" : jade.interp);
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<span data-state=\"post\" class=\"show-more state-transition\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("(more)");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<div class=\"text\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("<span data-state=\"post\" class=\"show-less state-transition\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("(less)");
jade_debug.shift();
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push(null == (jade.interp = post.text) ? "" : jade.interp);
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 14, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
jade_debug.unshift({ lineno: 14, filename: "/Users/bryanjensen/Desktop/bawjensen.github.io/static/templates/topic-posts.jade" });
buf.push("There's nothing here!");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "#posts\n  span.glyphicon.glyphicon-remove-sign.state-transition#close-topic(data-state='close')\n  if topic.posts\n    each post in topic.posts\n      .post\n        .preview\n          span.show-less-placeholder\n          != post.preview + '...'\n          span.show-more.state-transition(data-state='post') (more)\n        .text\n          span.show-less.state-transition(data-state='post') (less)\n          != post.text\n  else\n    |There's nothing here!");
}
}