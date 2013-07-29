ember-alert
===========

Simple mixin to help facilitate managing alerts in Ember.js

Usage:

Just include the mixin and call `alert`, `alertSuccess`, `alertError`, or `alertInfo` with your message.  The message will be stored at `alerts`, `successes`, `errors`, or `infos` as appropriate and can be rendered as appropriate.

```javascript
App.ApplicationController = Ember.Controller.extend(App.Alert, {
  init: function(){
    this.alert("Here's an alert");
    this.alert("And another");
    this.alertSuccess('Something succeeded');
    this.alertInfo('Some info');
    this.alertError('Something failed');
  }
});
```

Live demo: http://jsbin.com/ayeder/1/edit
