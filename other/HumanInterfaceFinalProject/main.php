
<?php
$myfile = fopen("AboutMe.html", "r") or die("Unable to open file!");
echo fread($myfile,filesize("AboutMe.html"));
fclose($myfile);

echo "PHP test.";

?>