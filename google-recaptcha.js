window.grecaptcha = {
  getResponse: function() {
    console.log("FAKE-RECAPTCHA-GETRESPONSE")
    return 'FAKE-RECAPTCHA-RESPONSE'
  },

  reset: function() {
    console.log("FAKE-RECAPTCHA-RESET", arguments)
  },

  render: function(element, options) {
    var fakeRecaptchaElement = document.createElement('div')
    fakeRecaptchaElement.innerHTML = '[FAKE-RECAPTCHA]'
    element.appendChild(fakeRecaptchaElement)
    if (options.callback) {
      setTimeout(function() {
        options.callback('FAKE-RECAPTCHA-RESPONSE')
      }, 10)
    }
    return 'FAKE-RECAPTCHA-WIDGET-ID'
  }
}

if ('recaptchaOnloadCallback' in window) {
  window.recaptchaOnloadCallback()
}
