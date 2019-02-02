var watson = require('watson-developer-cloud');

var service = new watson.AssistantV2({
  iam_apikey: 'q4RCWjXBIZU9RHDh8NNtszzNu7Qg1KKrByhuGMpeHZAK',
  version: '2018-11-08',
  url: 'https://gateway.watsonplatform.net/assistant/api'
});

service.createSession({
  assistant_id: '799d8e24-5d9c-4851-b6c7-37b96e5b3978',
}, function(err, response) {
  if (err) {
    console.error(err);
  } else{
    console.log(JSON.stringify(response, null, 2));
  }
});
