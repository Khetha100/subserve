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
