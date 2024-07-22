<?php

session_start();


 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="calculu.php" method="post">
        <table>
        <tr>
        <td><button name="operator" value="/">/</button></td>
                <td><button name="operator" value="*">*</button></td>
                <td><button name="operator" value="-">-</button></td>
                <td><button name="operator" value="+">+</button></td>
    <td><button name="equals"  >=</button></td>
    <td><button name="clear" >CLEAR</button></td>
    
</tr>
            <tr>
                <td><button name="number" value="7">7</button></td>
                <td><button name="number" value="8">8</button></td>
                <td><button name="number" value="9">9</button></td>
</tr>
<tr>
                <td><button name="number" value="4">4</button></td>
                <td><button name="number" value="5">5</button></td>
                <td><button name="number" value="6">6</button></td>
</tr>
<tr>
                <td><button name="number" value="1">1</button></td>
                <td><button name="number" value="2">2</button></td>
                <td><button name="number" value="3">3</button></td>
</tr>
<tr>
                <td><button name="number" value="0">0</button></td>
                <td><button name="number" value=".">.</button></td>
                
            </tr>
            
          
            
</table>
Result:
</form>
<?php
$_SESSION["num1"];
 $_SESSION["operator"];
$_SESSION["result"];
$number2=$_SESSION["num1"]!=''?$_SESSION["num1"]:'';
$number1=$_SESSION["result"]!=''?$_SESSION["result"]:'';
if(isset($_POST["number"])){
$_SESSION["num1"].=$_POST["number"];
}

if(isset($_POST["operator"]))
{
    $number1=$_SESSION["num1"];

    $_SESSION["result"]=$_SESSION["num1"];
 
    $_SESSION["operator"]=$_POST["operator"];
    
     $_SESSION["num1"]='';
   
 
    }
  
if(isset($_POST["equals"]))
{
   
   
    $op=$_SESSION["operator"];
    $_SESSION["operator"]='';
    switch($op)
    {
        case '+':
            echo "<br>";
            $result=$number1+$number2;
            echo $result;
            $_SESSION["num1"]='';
            $_SESSION["num1"]=$result;
            break;
            case '-':
                echo "<br>";
                $result=$number1-$number2;
                echo $result;
                $_SESSION["num1"]='';
                $_SESSION["num1"]=$result;
                break;
                case '*':
                    echo "<br>";
                    $result=$number1*$number2;
                    echo $result;
                    $_SESSION["num1"]='';
                    $_SESSION["num1"]=$result;
                    break;
                    case '/':
                        echo "<br>";
                        if($number2!=0)
                        {
                            $result=$number1/$number2;
                        echo  $result;
                        $_SESSION["num1"]='';
                        $_SESSION["num1"]=$result;
                        }
                        else{
                            echo "<br>";
                            echo "division by 0 not possible";
                        }
                        break;
                        default:
                        echo "<br>";
                        echo "error";
    }
    
 }
 if(isset($_POST["clear"]))
 {
$_SESSION["num1"]='';
$_SESSION["result"]='';
 }


?>

</body>
</html>