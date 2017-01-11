window.grecaptcha = {
  getResponse: function() {
    console.log("FAKE-RECAPTCHA-GETRESPONSE")
    return 'FAKE-RECAPTCHA-RESPONSE'
  },

  reset: function() {
    console.log("FAKE-RECAPTCHA-RESET", arguments)
  },

  render: function() {
    console.log("FAKE-RECAPTCHA-RENDER", arguments)
    return 'FAKE-RECAPTCHA-WIDGET-ID'
  }
}
