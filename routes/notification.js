var express = require('express');
var router = express.Router();
var NotificationModel = require('../mongodb/models/notification')

router.get('/:identifier',(req,res,next)=>{
    var id = req.params.identifier;
    NotificationModel.find({client_id:id},(err,notifications)=>{
        if(err) {
            next(err);
        }
        else {
            notifList = []
            notifications.forEach((notification)=>{
                notifList.push({
                    client_id: notification.client_id,
                    notif_text: notification.notif_text,
                    notif_type: notification.notif_type,
                    notif_title: notification.notif_title,
                    date_sent: notification.date_sent
                })
            });
            NotificationModel.deleteMany({client_id:id},(err)=>{
                if(err){
                    next(err);
                }
                else {
                    res.send(notifList);
                }
            });
        }
    });
});

router.post('/:identifier',(req,res,next)=>{
    var id = req.params.identifier;
    var type = req.body.type || "BroadcastType";
    var text = req.body.text || "Broadcast Text";
    var title = req.body.title || "Broadcast Title";
    notification = new NotificationModel({
        client_id: id,
        notif_text: text,
        notif_title: title,
        notif_type: type
    });

    notification.save((err)=>{
        if(err) {
            next(err);
        }
        else {
            res.send({'success':true});
        }
    })
});

module.exports = router;