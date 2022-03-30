<?
	session_start();

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

?>
<meta charset="utf-8">
<?
/*
table=$table
num=$item_num (본글 글번호)
ripple_num=$ripple_num(리플 글번호)
userid (세션 : 아이디)
*/

	if(!$userid) {
		echo("
		<script>
			window.alert('로그인 후 이용하세요.')
			history.go(-1)
		</script>
		");
		exit;
	}

	include "../lib/dbconn.php";

	// updateFlag = 0 작성, updateFlag = 1 수정됨, updateFlag = 2 작성자에 의해 삭제, updateFlag = 3 관리자에 의해 삭제

	// 지우려는 리플의 작성자와 현재 로그인한 유저가 동일인인지 확인해보기.
	$sql = "select id, updateFlag from free_ripple where num=$ripple_num";
	$ripple_result = mysql_query($sql, $connect);
	$row_ripple = mysql_fetch_array($ripple_result);
	$ripple_id = $row_ripple[id];
	$ripple_updateFlag = $row_ripple[updateFlag];

	// echo "
	// <script>
	// 	window.alert('$ripple_id, $userid');
	// </script>
	// ";

	// 부정한 방법으로 와서 이미 삭제된 댓글을 수정이나 또 다시 삭제를 할 수 없게 체크.
	if($ripple_updateFlag == 2 || $ripple_updateFlag == 3) {
		echo("
		<script>
			window.alert('이미 삭제된 댓글입니다.')
			history.go(-1)
		</script>
		");
		exit;
	}

	// 동일인인지 확인
	if($userid == $ripple_id) {
		$sql = "update free_ripple set updateFlag=2 where num=$ripple_num";

	// 동일인이 아니라 관리자 인지 확인
	} else if($userid=="admin" || $userlevel==1) {
		$sql = "update free_ripple set updateFlag=3 where num=$ripple_num";
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
