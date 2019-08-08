<?php
# 先连接数据库
$con = mysqli_connect("127.0.0.1","root","","yaofangwang");
# 读取JSON文件的内容
$json = file_get_contents("list.json");
# 把JSON数据转换为数组
$data = json_decode($json,true);
# 把数据注入到数据中
for($i = 0;$i < count($data);$i++)
{
  $src = $data[$i]["src"];
  $money = $data[$i]["money"];
  $name = $data[$i]["name"];
  $guige = $data[$i]["guige"];
  $jixing = $data[$i]["jixing"];
  $pzwh = $data[$i]["pzwh"];
  $num = $data[$i]["num"];
  $shengchan = $data[$i]["shengchan"];
  $tyname = $data[$i]["tyname"];
  $spsb = $data[$i]["spsb"];
  $smallImg1 = $data[$i]["smallImg1"];
  $smallImg2 = $data[$i]["smallImg2"];
  $smallImg3 = $data[$i]["smallImg3"];
  $smallImg4 = $data[$i]["smallImg4"];
  $smallImg5 = $data[$i]["smallImg5"];
  $middImg1 = $data[$i]["middImg1"];
  $middImg2 = $data[$i]["middImg2"];
  $middImg3 = $data[$i]["middImg3"];
  $middImg4 = $data[$i]["middImg4"];
  $middImg5 = $data[$i]["middImg5"];
  $bigImg1 = $data[$i]["bigImg1"];
  $bigImg2 = $data[$i]["bigImg2"];
  $bigImg3 = $data[$i]["bigImg3"];
  $bigImg4 = $data[$i]["bigImg4"];
  $bigImg5 = $data[$i]["bigImg5"];
  $sql = "INSERT INTO `list` (`gid`, `src`, `money`, `name`, `guige`, `jixing`, `pzwh`, `num`, `shengchan`, `tyname`, `spsb`, `smallImg1`, `smallImg2`, `smallImg3`, `smallImg4`, `smallImg5`, `middImg1`, `middImg2`, `middImg3`, `middImg4`, `middImg5`, `bigImg1`, `bigImg2`, `bigImg3`, `bigImg4`, `bigImg5`) VALUES ('$i', '$src', '$money', '$name', '$guige', '$jixing', '$pzwh', '$num','$shengchan','$tyname','$spsb','$smallImg1','$smallImg2','$smallImg3','$smallImg4','$smallImg5','$middImg1','$middImg2','$middImg3','$middImg4','$middImg5','$bigImg1','$bigImg2','$bigImg3','$bigImg4','$bigImg5')";
  mysqli_query($con,$sql);
}

?>