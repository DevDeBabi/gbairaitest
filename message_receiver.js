function sendMessageToUnity(unityInstance) {
  var testObject = { token: "anonymous", scoreMin: 3, idParticipation: 0, env:"prod"};
  var jsonString = JSON.stringify(testObject);
  unityInstance.SendMessage('GameManager', 'UserLogin', jsonString);
  console.log("Message Sended");
}