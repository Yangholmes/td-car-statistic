<?php

header("Access-Control-Allow-Origin:*");

require_once( __DIR__.'/../../server/api/Auth.php');
require_once( __DIR__.'/../../server/api/User.php');

$auth = new Auth(1); // debug: 1表示pc端；0表示移动端。请注意修改config文件

echo json_encode($auth->get_signature());
