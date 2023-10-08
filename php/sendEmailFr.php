<?php 

if (isset($_POST['submit']))
{
    if (isset($_POST['email']) && !empty($_POST['email']))
    {
        $email = $_POST['email'];
    } 
    else 
    {
        header("location:../lang/fr/index.html?error=Email non remplie");
        exit();
    }



    if (isset($_POST['topic']) && !empty($_POST['topic']))
    {
        $topic = $_POST['topic'];
    } 
    else 
    {
        header("location:../lang/fr/index.html?error=Sujet non remplie");
        exit();
    }


    if (isset($_POST['message']) && !empty($_POST['message']))
    {
        $messagefromUser = $_POST['message'];
    } 
    else 
    {
        header("location:../lang/fr/index.html?error=Message non remplie");
        exit();
    }


    $to = "emma.montbarbon@outlook.fr";
    $subject = "Contact depuis Portfolio Dosylia";
    $message = "Email: ".$email."\n";
    $message .= "Titre: ".$topic."\n";
    $message .= "Contenu: ".$messagefromUser."\n";
    $headers = "Envoyé par: ".$email;

    if (mail($to, $subject, $message, $headers)) {
        header("location: ../lang/fr/index.html?success=Email envoyé");
        exit();  
    } else {
        header("location: ../lang/fr/index.html?error=Email non envoyé");
        exit();  
    }

}
else
{
    header("location:../lang/fr/index.html?error=Pas de formulaire");
    exit();
}