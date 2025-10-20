
<?php
$author = $_POST['author'] ?? "Anonymous";
$text   = $_POST['text'] ?? "";
$time   = $_POST['time'] ?? date("Y-m-d H:i");
$isAuthor = isset($_POST['isAuthor']) && $_POST['isAuthor'] === 'true';

if(trim($text) !== ""){
    $comments = [];
    if(file_exists("comments.json")){
        $comments = json_decode(file_get_contents("comments.json"), true);
    }
    $comments[] = [
        "author" => $author,
        "text" => $text,
        "time" => $time,
        "isAuthor" => $isAuthor
    ];
    file_put_contents("comments.json", json_encode($comments));
    echo "Komentar tersimpan";
} else {
    echo "Komentar kosong";
}
?>