var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
  //include "log: false" to disable logging
  //or a "logLevel" integer from 0 to 7 to adjust logging verbosity
});

controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});
// connect the bot to a stream of messages
controller.spawn({
  token: 'xoxb-207989485814-EZMATmcFYMMbQ1mcEJXDbPVn',
}).startRTM()

// give the bot something to listen for.

