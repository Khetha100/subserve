function showContactForm() {
  const form = document.getElementById("contact-form");
  form.classList.toggle("hidden");
}

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//   if(
//       !empty($_POST['name'])
//       && !empty($_POST['email'])
//       && !empty($_POST['message'])
//   ){
//       $name = $_POST["name"];
//       $email = $_POST["email"];
//       // $phone = $_POST["phone"];
//       // $message = $_POST["message"];


//       $to = "Khethukuthulasimamane@gmail.com";
//       $subject = "New Contact Form Submission";
//       // $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
//       $body = "Name: {$name}\nEmail: {$email}";
//       $headers = "From: {$email}";


//       if (mail($to, $subject, $body, $headers)) {
//           console.log( "Message sent successfully!");
//       } else {
//           console.log("Failed to send message.");
//       }
//   }
// }

import axios from 'axios';

async function sendEmail(name, email, subject, message) {
  const data = JSON.stringify({
    "Messages": [{
      "From": {"Email": "<YOUR EMAIL>", "Name": "<YOUR NAME>"},
      "To": [{"Email": email, "Name": name}],
      "Subject": subject,
      "TextPart": message
    }]
  });

  const config = {
    method: 'post',
    url: 'https://api.mailjet.com/v3.1/send',
    data: data,
    headers: {'Content-Type': 'application/json'},
    auth: {username: '<API Key>', password: '<Secret Key>'},
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

// define your own email api which points to your server.
app.post('/api/sendemail/', function (req, res) {
  const {name, email, subject, message} = req.body;
  //implement your spam protection or checks.
  sendEmail(name, email, subject, message);
});
