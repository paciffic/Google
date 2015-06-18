var GCM = require('gcm').GCM;

var apiKey = 'AIzaSyBkTQSBq4-CGm8uLek2qAJ5f2Mf1TzHjqo';
var gcm = new GCM(apiKey);

var message = {
 registration_id:'dsTMXloQfgg:APA91bE6Ktswp-Vlc0QtgzjpRYfDt3hM5BSu2m9IdFnnJiRuB1tzk98uSBv8dT_srTPeG6Kq9L1Y80iA8tLPyAxVJSFNnfGnMO6Oua-Kwyrc9kZAYzxxsb9v_nPleyJkOWnsAt8SmV0J',
 collapse_key: 'demo',
 'data.key1': 'GCM 테스트 중입니다.',
 'data.key2': 'hello paciffic~!'
};

gcm.send(message, function(err, messageId){
 if (err) {
  console.log("Something has gone wrong!");
 } else{
  console.log("Sent with message ID: ", messageId);
 }
}); 
