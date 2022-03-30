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
     num=부모테이블글번호(게시물번호-외래키)
     ripple_in_ripple_content=댓글콘텐츠내용
     ripple_num=원글(댓글을 달려는) 댓글번호(primary)
     ripple_groupNum=최초 댓글 번호
    */

  //   echo("
  //   <script>
  //     window.alert('$num, $userid, $username, $usernick, $ripple_in_ripple_content, $regist_day, $ripple_num');

  //   </script>
  // ");
    

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


   //원글에서 depth, c_order 가져오기
   $sql = "select * from free_ripple where num=$ripple_num";
   $result = mysql_query($sql, $connect);
   $sql = '';
   $row = mysql_fetch_array($result); // 하나의 레코드 가져오기
   
   $depthNumber = $row[depth]; //원글depth
   $depthNumber += 1; //원글 depth에 +1 하기

   $sortsNumber = $row[c_order]; //원글c_order
   //end of 원글에서 depth, c_order 가져오기
  //  echo("
  //  <script>
  //    window.alert('num : $ripple_num, sort : $sortsNumber, depth : $depthNumber')
  //  </script>
  //   ");

   //최초글에 달린 댓글이 0개 인지 1개 이상인지 검사 // 댓글을 달려는 댓글의 그룹들에서 해당 댓글보다, 바로다음 최신인 댓글의 c_order 구하기(해당 댓글보다 최신 댓글이 있는지 확인하기)
  //  $sql = "select COALESCE(min(c_order),0) from free_ripple where groupNum=$ripple_groupNum and c_order>$sortsNumber and depth<=$depthNumber";
   $sql = "select COALESCE(min(c_order),0) from free_ripple where groupNum=$ripple_groupNum and c_order>=$sortsNumber";
   $result = mysql_query($sql, $connect);
   $sql = '';
   $row = mysql_fetch_array($result); // 하나의 레코드 가져오기
   $hasComment = $row[0];
  //  echo("
  //  <script>
  //    window.alert('hasComment : $hasComment')
  //  </script>
  //   ");
   if($hasComment == 0) {
     //최초글에 달린 모든 댓글들중 가장 높은c_order(sorts)값 가져와서 1 증가 시켜 반환하기(이 값을 현재 넣으려는 댓글에 적용)
    $sql = "select COALESCE(max(c_order),0)+1 from free_ripple where groupNum=$ripple_groupNum";
    $result = mysql_query($sql, $connect);
    $sql = '';    
    $row = mysql_fetch_array($result); // 하나의 레코드 가져오기
    $resultOrder = $row[0];
    // echo("
    // <script>
    //   window.alert('resultOrder : $resultOrder')
    // </script>
    //  ");
   } else {
     //댓글의 댓글의 댓글이 들어갈 경우 순서를 중간에 삽입하기 위해 삽입 공간 기준으로 아래에 배치된 댓글들의 순서를 전부 뒤로 미룬다.
    $sql = "update free_ripple set c_order = c_order + 1 where groupNum=$ripple_groupNum and c_order > $hasComment";
    mysql_query($sql, $connect);
    $sql = ''; 
    $resultOrder = $hasComment;
   }
   //end of 원글에 달린 댓글이 0개 인지 1개 이상인지 검사


   // 레코드 삽입 명령
   $sql = "insert into free_ripple (parent, id, name, nick, content, regist_day, depth, c_order, groupNum, to_nick) ";
   $sql .= "values($num, '$userid', '$username', '$usernick', '$ripple_in_ripple_content', '$regist_day', $depthNumber, $resultOrder, $ripple_groupNum, '$to_nick')";    
   
   mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
   mysql_close();                // DB 연결 끊기

   echo "
	   <script>
	    location.href = 'view.php?table=$table&num=$num';
	   </script>
	";
?>

   
