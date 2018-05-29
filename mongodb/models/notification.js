var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
    client_id: String,
    notif_type: String,
    notif_title: String,
    notif_text: String,
    date_sent: {type: Date, default: Date.now}
});

var NotificationModel = mongoose.model('Notification',NotificationSchema);
module.exports = NotificationModel;