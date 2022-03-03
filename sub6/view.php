<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  $item_nick    = $row[nick];
	$item_hit     = $row[hit];
	$item_division    = $row[recruitment_division];
	$item_start    = $row[start_date];
	$item_end    = $row[end_date];
	$timenow = date("Y-m-d H:i:s"); //현재시간

	$weekString = array("일", "월", "화", "수", "목", "금", "토"); // 요일 출력을 위한 텍스트 배열 date의 w는 0(일)~6(토) 반환
	
	$str_now = strtotime($timenow);
	$str_start = strtotime($item_start);
	$str_target = strtotime($item_end);


	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

  $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) //업로드한 파일이 존재하면 0 1 2
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
            //GetImageSize(서버에 업로드된 파일 경로 파일명)
              // => 파일의 너비와 높이값, 종류
			$image_width[$i] = $imageinfo[0];  //파일너비
			$image_height[$i] = $imageinfo[1]; //파일높이
			$image_type[$i]  = $imageinfo[2];  //파일종류

        if ($image_width[$i] > 1000) //1000는 이 게시판 레이아웃의 최대 너비
				$image_width[$i] = 1000;
		}
		else
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>채용안내-모집공고</title>
	<!-- fontawesome -->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./common/css/sub6common.css"/>
	<link rel="stylesheet" href="./css/sub6_content3_view.css">
	<script>
    function del(href) 
    {
        if(confirm("한번 삭제한 자료는 복구할 수 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
    }
	</script>
</head>
<body>
	<? include "../common/sub_header.html" ?>
	<!-- VISUAL -->
	<div class="visual">
		<img src="./common/images/sub6visual.jpg" alt="채용안내비주얼이미지">
		<h3>채용안내</h3>
    <span>recruitment guide</span>
  </div>

	<!-- sub_menu -->
	<div class="sub_menu">
		<ul>
      <li><a href="./sub6_1.html">모집과정</a></li>
      <li><a href="./sub6_2.html">복리후생</a></li>
      <li class="current"><a href="./sub6_3.php">모집공고</a></li>
    </ul>
  </div>

	<article id="content">
		<div class="title_area">
      <div class="line_map">
     	 	<span>HOME</span> &gt; 채용안내 &gt; <strong>모집공고</strong>
      </div>
      <h2>모집공고</h2>
		</div>

		<div class="content_area">

			<div id="view_title">
					<div id="view_title1"><?= $item_subject ?></div>
					<div id="view_title2">
						<dl>
							<dt>접수기간</dt>
							<dd><?=date("Y.m.d ", $str_start)."(".$weekString[date("w", $str_start)].") ".date("H:i", $str_start);?> ~ <?=date("Y.m.d ", $str_target)."(".$weekString[date("w", $str_target)].") ".date("H:i", $str_target);?></dd>
							<dt>남은기간</dt>
							<dd>D-<?=intval((strtotime($item_end) - strtotime($timenow)) / 86400); ?></dd>
						</dl>
						<dl>
							<dt>채용구분</dt>
							<dd><?=$item_division?></dd>
						</dl>
					</div>	
			</div>

		<div id="view_content">
<?
	for ($i=0; $i<3; $i++)  //업로드된 이미지를 출력한다
	{
		if ($image_copied[$i])	//첨부된 파일이 있으면
		{
			$img_name = $image_copied[$i];
			$img_name = "./data/".$img_name; 
             // ./data/2019_03_22_10_07_15_0.jpg
			$img_width = $image_width[$i];
			
			echo "<img src='$img_name' width='$img_width'>"."<br><br>";
		}
	}
?>
			<?= $item_content ?>
		</div>

		<!-- 목록버튼 -->
		<div id="view_button">
				<a href="sub6_3.php?table=<?=$table?>&page=<?=$page?>">목록</a>
<? 
	if($userid==$item_id || $userid=="admin" || $userlevel==1 )
	{
?>
			<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">수정</a> <!-- 수정버튼 -->
			<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a> <!-- 삭제버튼 -->
<?
	}
?>
<? 
	if($userid)  //로그인이 되면 글쓰기
	{
?>
			<a href="write_form.php?table=<?=$table?>">글쓰기</a>  <!-- 글쓰기버튼 -->
<?
	}
?>
			</div>
		</div>
		<!-- end of content_area -->
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>
