module.exports = function(bp) {
  bp.middlewares.load()

  bp.hear({ platform: 'slack', type: 'message', text: 'Hello' }, (event, next) => {
    bp.slack.sendText(event.channel.id, 'Hi')
  })

  bp.hear({ platform: 'slack', text:'I love you'}, event => {
    bp.slack.sendReaction('kissing_smiling_eyes', { channel: event.channel.id, timestamp: event.ts })
  }) 

  bp.hear({ platform: 'slack', text:'Who are you?'}, event => {
    bp.slack.sendReaction('I am Marvin, the Retro Rabbit', { channel: event.channel.id, timestamp: event.ts })
  }) 
}
