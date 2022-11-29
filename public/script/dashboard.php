<?php

$pdo = new PDO('mysql:host=localhost;dbname=aguaonline;port=3306;charset=utf8', 'mysql', 'mysql');

$sql = "SELECT data_medicoes, valor_medicoes FROM Medicoes;";

$statement = $pdo->prepare($sql);
$statement->execute();
while($results = $statement->fetch(PDO::FETCH_ASSOC)) {
    $result[] = $results;
}

echo json_encode($result);

?>