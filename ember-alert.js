App.Alert = Ember.Mixin.create({
  alerts       : [],
  infos        : [],
  errors       : [],
  successes    : [],
  getAlerts: function(type) {
    type = type || 'alert';
    var type_index = {
      alert   : 'alerts',
      info    : 'infos',
      error   : 'errors',
      success : 'successes'
    };
    if(!type_index[type]) {
      console.error('Invalid error type' + type);
      return [];
    }
    return this[type_index[type]];
  },
  alert: function(alert, type) {
    this.getAlerts(type).pushObject(alert);
  },
  alertError: function(alert){
    this.alert(alert, 'error');
  },
  alertInfo: function(alert){
    this.alert(alert, 'info');
  },
  alertSuccess: function(alert){
    this.alert(alert, 'success');
  },
  clearAlerts: function(type) {
    this.getAlerts(type).clear();
  }
});
