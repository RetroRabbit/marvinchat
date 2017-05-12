module.exports = function(bp) {
  bp.middlewares.load()

  bp.hear('hello', event => { // Capture messages that are 'hello'
    bp.messenger.sendText(event.user.id, 'Hello, human!') // Respond to the user with 'Hello, human!'
  })
}
