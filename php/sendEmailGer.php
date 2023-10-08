
Voici les en-têtes traduits en allemand :

php
Copy code
<?php 

if (isset($_POST['submit']))
{
    if (isset($_POST['email']) && !empty($_POST['email']))
    {
        $email = $_POST['email'];
    } 
    else 
    {
        header("location:../lang/ger/index.html?error=E-Mail nicht ausgefüllt");
        exit();
    }



    if (isset($_POST['topic']) && !empty($_POST['topic']))
    {
        $topic = $_POST['topic'];
    } 
    else 
    {
        header("location:../lang/ger/index.html?error=Betreff nicht ausgefüllt");
        exit();
    }


    if (isset($_POST['message']) && !empty($_POST['message']))
    {
        $messagefromUser = $_POST['message'];
    } 
    else 
    {
        header("location:../lang/ger/index.html?error=Nachricht nicht ausgefüllt");
        exit();
    }


    $to = "emma.montbarbon@outlook.fr";
    $subject = "Contact depuis Portfolio Dosylia";
    $message = "Email: ".$email."\n";
    $message .= "Titre: ".$topic."\n";
    $message .= "Contenu: ".$messagefromUser."\n";
    $headers = "Envoyé par: ".$email;

    if (mail($to, $subject, $message, $headers)) {
        header("location: ../lang/ger/index.html?success=E-Mail gesendet");
        exit();  
    } else {
        header("location: ../lang/ger/index.html?error=E-Mail nicht gesendet");
        exit();  
    }

}
else
{
    header("location:../lang/ger/index.html?error=Kein Formular");
    exit();
}