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
  $sql = "INSERT INTO `list` (`gid`, `src`, `money`, `name`, `guige`, `jixing`, `pzwh`, `num`, `shengchan`) VALUES ('$i', '$src', '$money', '$name', '$guige', '$jixing', '$pzwh', '$num','$shengchan')";
  mysqli_query($con,$sql);
}

?>