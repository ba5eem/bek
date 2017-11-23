import Pusher from 'pusher-js/react-native';

const pusherConfig = require('../../android/config/config.json');
console.log(pusherConfig);
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher(pusherConfig.key, {
  pusherConfig.cluster,
  encrypted: true
});

var channel = pusher.subscribe('bek');
channel.bind('my-event', function(data) {
  alert('Event Triggered', data.message);
});


//app_id = "434997"
// key = "3b5ce37c85672acc6ea5"
// secret = "dbaef820bfd25753647e"
// cluster = "us2"