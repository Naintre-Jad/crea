$data = array(
    "nom" => $_POST["nom"],
    "prenom"=> $_POST["prenom"],
    "email"=> $_POST["email"],
    "tel"=> $_POST["tel"],
    "date"=> $_POST["date"],
    "sexe"=> $_POST["sexe"],
    "pays"=> $_POST["pays"],
    "entreprise"=> $_POST["entreprise"],
    "utilisations"=> $_POST["utilisations"]
);
 
$json = json_encode($data);
 
//change the path to the location where you want to save the file on your server
if(file_put_contents('/path/to/web/server/data.json', $json))
    echo '<span>Form submitted successfully. Data saved to data.json</span>';
else 
    echo '<span>Oops, an error occurred</span>';
?>
