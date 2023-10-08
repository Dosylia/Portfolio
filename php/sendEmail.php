<?php 

if (isset($_POST['submit']))
{
    if (isset($_POST['email']) && !empty($_POST['email']))
    {
        $email = $_POST['email'];
    } 
    else 
    {
        header("location:../index.html?error=Email empty");
        exit();
    }



    if (isset($_POST['topic']) && !empty($_POST['topic']))
    {
        $topic = $_POST['topic'];
    } 
    else 
    {
        header("location:../index.html?error=Topic Empty");
        exit();
    }


    if (isset($_POST['message']) && !empty($_POST['message']))
    {
        $messagefromUser = $_POST['message'];
    } 
    else 
    {
        header("location:../index.html?error=Message Empty");
        exit();
    }


    $to = "emma.montbarbon@outlook.fr";
    $subject = "Contact depuis Portfolio Dosylia";
    $message = "Email: ".$email."\n";
    $message .= "Titre: ".$topic."\n";
    $message .= "Contenu: ".$messagefromUser."\n";
    $headers = "Envoyé par: ".$email;

    if (mail($to, $subject, $message, $headers)) {
        header("location: ../index.html?success=Mail sent");
        exit();  
    } else {
        header("location: ../index.html?error=Mail not sent");
        exit();  
    }

}
else
{
    header("location:../index.html?error=No form");
    exit();
}