var AssistantV1 = require('watson-developer-cloud/assistant/v1');
 
var assistant = new AssistantV1({
  username: 'apikey',
  password: '47xFDKahY1S5ZZJhL5CrxAPIbgQnf1VHjdjBHQu4omX9',
  url: 'https://gateway.watsonplatform.net/assistant/api',
  version: '2019-03-23'
});
 
assistant.message(
  {
    input: { text: "show me resturats" },
    workspace_id: '3d776848-262a-4872-b745-1c671da28ebf'
  },
  function(err, response) {
    if (err) {
      console.error(err);
    } else {
      //console.log(JSON.stringify(response, null, 2));
      console.log(response.output.text);
    }
  }
);