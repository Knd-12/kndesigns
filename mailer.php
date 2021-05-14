<?php

if(isset($_POST['submit'])) {
    // get all fields
    $fullname = $_POST ['fullname'];
    $email = $_POST ['email'];
    $message = $_POST['message'];

    //set up the message

    mail('kim1296@live.com','New message from site',$message, 'From:'. $email);
    header('Location: http://kndesigns.co');

}

?>