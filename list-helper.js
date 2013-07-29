Ember.Handlebars.helper('list', function(items, options) {
  if(items.length == 1){
    return items[0];
  }
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + Handlebars.Utils.escapeExpression(items[i]) + "</li>";
  }

  return new Handlebars.SafeString(out + "</ul>");
}, '[]');
