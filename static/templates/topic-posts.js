function template(locals) {
var buf = [];
var jade_mixins = {};
var locals_ = (locals || {}),topic = locals_.topic;
if ( topic.posts)
{
// iterate topic.posts
;(function(){
  var $$obj = topic.posts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var post = $$obj[$index];

buf.push("<h1>" + (jade.escape(null == (jade.interp = post.title) ? "" : jade.interp)) + "</h1><p>" + (jade.escape(null == (jade.interp = post.preview) ? "" : jade.interp)) + "</p>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var post = $$obj[$index];

buf.push("<h1>" + (jade.escape(null == (jade.interp = post.title) ? "" : jade.interp)) + "</h1><p>" + (jade.escape(null == (jade.interp = post.preview) ? "" : jade.interp)) + "</p>");
    }

  }
}).call(this);

}
else
{
buf.push("There's nothing here!");
};return buf.join("");
}