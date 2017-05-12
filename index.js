module.exports = function(bp) {
  bp.middlewares.load()

  bp.hear({ platform: 'slack', type: 'message', text: 'Hello' }, (event, next) => {
    bp.slack.sendText(event.channel.id, 'Hi')
  })

  bp.hear({ platform: 'slack', text:'I love you'}, event => {
    bp.slack.sendReaction('kissing_smiling_eyes', { channel: event.channel.id, timestamp: event.ts })
  }) 

  bp.hear({ platform: 'slack', text:'Who are you?'}, event => {
    bp.slack.sendText(event.channel.id, 'I am Marvin, the Retro Rabbit')
  }) 

  bp.wit.actions['send'] = request => {
    return new Promise((resolve, reject) => {
      bp.logger.info('send', request)
      // Do something here
      resolve(request.context)
    })
  }

  bp.wit.reinitializeClient()
}
