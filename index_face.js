var Botkit = require('botkit');
var controller = Botkit.facebookbot({
        access_token: 'EAAXAp7KQotEBACW1ibyddupdHBVUTKhu2zrAHkiZBsZCYlkIG5xk038XIa92aMCwNuJiE5WpZCCQMUTsfNTEnevYZBWZCaR4ZBDaZCR6v0fslfd9boVhf7kMT3DKjIqM0l5O4qkka65IZBQo1ZCgK58kYggarPirgXGsUip0CrbKzZCcRiZAfnNN2FK',
        verify_token: 'subham',
})

var bot = controller.spawn({
});

// if you are already using Express, you can use your own server instance...
// see "Use BotKit with an Express web server"
controller.setupWebserver(process.env.port,function(err,webserver) {
  controller.createWebhookEndpoints(controller.webserver, bot, function() {
      console.log('This bot is online!!!');
  });
});

// this is triggered when a user clicks the send-to-messenger plugin
controller.on('facebook_optin', function(bot, message) {

    bot.reply(message, 'Welcome to my app!');

});

// user said hello
controller.hears(['hello'], 'message_received', function(bot, message) {

    bot.reply(message, 'Hey there.');

});

controller.hears(['cookies'], 'message_received', function(bot, message) {

    bot.startConversation(message, function(err, convo) {

        convo.say('Did someone say cookies!?!!');
        convo.ask('What is your favorite type of cookie?', function(response, convo) {
            convo.say('Golly, I love ' + response.text + ' too!!!');
            convo.next();
        });
    });
});
