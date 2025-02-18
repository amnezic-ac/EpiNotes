<?php

if (isset($_POST["action"])){
    switch ($_POST["action"]) {
        case "get_directory":
            get_directory();
            break;
            
        case "get_contributors":
            get_contributors();
            break;
    }
}

function get_directory(){
    $dir = escapeshellarg($_POST["folder"]);
    $output = shell_exec("tree -J $dir");
    echo $output;
}

function get_contributors(){
    $contributors = ["geoffroy", "amnezic", "clovis"];
    echo json_encode($contributors);
}

function ls($dir){
    $output = shell_exec("ls $dir");
    echo $output;
}

?>