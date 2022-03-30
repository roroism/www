<?
	session_start();

  @extract($_POST);
  @extract($_GET);
  @extract($_SESSION);
?>
<meta charset="utf-8">
<?
  if(!$userid) {
    echo("
    <script>
      window.alert('로그인 후 이용하세요.')
      history.go(-1)
    </script>
    ");
    exit;
  }

  include "../lib/dbconn.php";       // dconn.php 파일을 불러옴

  // updateFlag = 0 작성, updateFlag = 1 수정됨, updateFlag = 2 작성자에 의해 삭제, updateFlag = 3 관리자에 의해 삭제

  // 지우려는 리플의 작성자와 현재 로그인한 유저가 동일인인지 확인해보기.
  $sql = "select id from free_ripple where num=$ripple_num";
  $ripple_result = mysql_query($sql, $connect);
  $row_ripple = mysql_fetch_array($ripple_result);
  $ripple_id = $row_ripple[id];

	// 동일인인지 확인
  if($userid == $ripple_id) {
    $sql = "update free_ripple set updateFlag=1, content='$ripple_content_modify' where num=$ripple_num";

  // 동일인이 아니라 관리자 인지 확인
  } else if($userid=="admin" || $userlevel==1) {
    $sql = "update free_ripple set updateFlag=1, content='$ripple_content_modify' where num=$ripple_num";
  }

  // $sql = "delete from free_ripple where num=$ripple_num";
  mysql_query($sql, $connect);
  mysql_close();

  echo "
  <script>
  location.href = 'view.php?table=$table&num=$num';
  </script>
  ";

?>