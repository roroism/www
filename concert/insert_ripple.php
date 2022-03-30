<?
   session_start();
?>
<meta charset="utf-8">
<?
       @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    /*
     table=부모테이블명
     num=부모테이블글번호

     ripple_content=댓글콘텐츠내용
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
   include "../lib/dbconn.php";       // dconn.php 파일을 불러옴

   $regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장

   // 레코드 삽입 명령
  //  $sql = "insert into free_ripple (parent, id, name, nick, content, regist_day) ";
  //  $sql .= "values($num, '$userid', '$username', '$usernick', '$ripple_content', '$regist_day') ;";    
  //  $sql .= "update free_ripple set groupNum=LAST_INSERT_ID() where num=LAST_INSERT_ID() ;"

  //  $connect->multi_query($sql);

  //  mysqli_multi_query($connect, $sql);  // $sql 에 저장된 명령 실행
  //  mysqli_multi_query($sql, $connect);  // $sql 에 저장된 명령 실행

  //  mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
  //  multi_query($sql);

  $sql = "insert into free_ripple (parent, id, name, nick, content, regist_day) ";
  $sql .= "values($num, '$userid', '$username', '$usernick', '$ripple_content', '$regist_day') ;";    

  mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행

  $sql = '';
  $sql = 'update free_ripple set groupNum=LAST_INSERT_ID() where num=LAST_INSERT_ID()';

  mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행


   mysql_close();                // DB 연결 끊기

   echo "
	   <script>
	    location.href = 'view.php?table=$table&num=$num';
	   </script>
	";
?>

   
