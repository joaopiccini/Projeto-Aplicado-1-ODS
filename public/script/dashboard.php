<?php

$pdo = new PDO('mysql:host=localhost;dbname=aguaonline;port=3306;charset=utf8', 'mysql', 'mysql');

$sql = "SELECT tabela.coluna, tabela.coluna FROM tabela1 JOIN tabela2 ON tabela1.id = tabela2.id_2";

$statement = $pdo->prepare($sql);
$statement->execute();
while($results = $statement->fetch(PDO::FETCH_ASSOC)) {
    $result[] = $results;
}

echo json_encode($result);