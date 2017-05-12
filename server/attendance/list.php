<?php

header("Access-Control-Allow-Origin:*");

require_once( __DIR__.'/../../server/api/Auth.php');
require_once( __DIR__.'/../../server/api/User.php');

$auth = new Auth(1); // debug: 1表示pc端；0表示移动端。请注意修改config文件
$accessToken = $auth->get_signature()['accessToken'];

$request = new yang_HTTP_request(null); //
$request->ssl_verification(false);
$request->set_header([
  "Content-Type" => "application/json",
  "Accept"=>"*/*",
  "Accept-Charset"=>"utf-8",
  "Content-Encoding"=>"utf-8",
]);

$url = OAPI_HOST."/attendance/listRecord?access_token=".$accessToken; // 考勤打卡记录
$request->set_url($url);
$request->set_data(json_encode([
  "userIds"=>['03424264076698'], //非必填
  "checkDateFrom"=>"2017-04-20 00:00:00",
  "checkDateTo"=>"2017-04-26 00:00:00"
]));
$respond = $request->request('POST'); //

echo $respond;
