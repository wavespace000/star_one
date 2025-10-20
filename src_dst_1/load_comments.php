
<?php
header('Content-Type: application/json');
$comments = [];
if(file_exists("comments.json")){
    $comments = json_decode(file_get_contents("comments.json"), true);
}
echo json_encode($comments);
?>