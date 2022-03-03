<? 
	session_start(); 
     @extract($_POST);
     @extract($_GET);
     @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>공지사항</title>
	<!-- fontawesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="../sub4/common/css/sub4common.css"/>
	<link rel="stylesheet" href="./css/greet.css">


	<?
	include "../lib/dbconn.php";

	
	if (!$scale)
		$scale=10;			// 한 화면에 표시되는 글 수

		if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				window.alert('검색할 단어를 입력해 주세요!');
					history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from greet where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from greet order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 

	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화

	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      

	$number = $total_record - $start;
?>
</head>


<body>
	<? include "../common/sub_header.html" ?>
	<!-- VISUAL -->
	<div class="visual">
    <img src="../sub4/common/images/visual_sub4.jpg" alt="visual이미지">
    <h3>커뮤니티</h3>
    <span>community</span>
  </div>

  <!-- sub_menu -->
  <div class="sub_menu">
    <ul>
      <li class="current"><a href="../greet/list.php">공지사항</a></li>
      <li><a href="../concert/list.php">보도자료</a></li>
      <li><a href="../sub4/sub4_3.html">FAQ</a></li>
      <li><a href="../sub4/sub4_4.html">홍보센터</a></li>
      <li><a href="../sub4/sub4_5.html">온라인문의</a></li>
    </ul>
  </div>

	<article id="content">
    <div class="title_area">
      <div class="line_map">
        <span>HOME</span> &gt; 커뮤니티 &gt; <strong>공지사항</strong>
      </div>
      <h2>공지사항</h2>
			<p>최근 소식과 동향을 알려드립니다.</p>
		</div>
    <div class="content_area">

			<!-- 검색단 -->
			<!-- <form  name="board_form" method="post" action="list.php?mode=search">  -->
			<form  name="board_form" method="get" action="list.php">
				<input type="hidden" name="mode" value="search"> 
				<div id="list_search">
					<div class="list_search_inner">
						<!-- <div id="list_search2">검색구분</div> -->
						<div id="list_search3">
							<label for="find_select" class="hidden">검색구분</label>
							<select name="find" id="find_select">
								<option value='subject' class="find_select_item">제목</option>
								<option value='content' class="find_select_item">내용</option>
								<option value='nick' class="find_select_item">별명</option>
								<option value='name' class="find_select_item">이름</option>
							</select>
						</div>
						
						<div id="list_search4">
							<label for="search" class="hidden">검색창</label>
							<input type="text" name="search" id="search">
						</div>
						
						<div id="list_search5">
							<label for="search_button" class="hidden">검색버튼</label>
							<!-- <a type="submit" id="search_button">검색</a> -->
							<button type="button" id="search_button" onclick="this.form.submit();">검색</button>
						</div>
					</div>

				</div>
			</form>

			<div class="view_info">
				<div id="list_search1">총 <?= $total_record ?> 개의 게시물이 있습니다.  </div>
				<select name="scale" onchange="location.href='list.php?scale='+this.value">
					<!-- <option value=''>보기</option> -->
<?
					switch($scale) {
						case 5 : echo "<option value='5' selected>5개씩 보기</option>
													 <option value='10'>10개씩 보기</option>
													 <option value='15'>15개씩 보기</option>
													 <option value='20'>20개씩 보기</option>
													 ";
							break;
						case 10 : echo "<option value='5'>5개씩 보기</option>
														<option value='10' selected>10개씩 보기</option>
														<option value='15'>15개씩 보기</option>
														<option value='20'>20개씩 보기</option>
														";
							break;
						case 15 : echo "<option value='5'>5개씩 보기</option>
														<option value='10'>10개씩 보기</option>
														<option value='15' selected>15개씩 보기</option>
														<option value='20'>20개씩 보기</option>
														";
							break;
						case 20 : echo "<option value='5'>5개씩 보기</option>
														<option value='10'>10개씩 보기</option>
														<option value='15'>15개씩 보기</option>
														<option value='20' selected>20개씩 보기</option>
														";
							break;
						default : echo "<option value='' selected>보기</option>
														<option value='5'>5개씩 보기</option>
														<option value='10'>10개씩 보기</option>
														<option value='15'>15개씩 보기</option>
														<option value='20'>20개씩 보기</option>
														";
					}
?>
				</select>
			</div>

			<table id="list_top_title">
				<colgroup>
					<col>
					<col>
					<col>
					<col>
					<col>
				</colgroup>
				<thead>
					<tr>
						<th id="list_title1">번호</th>
						<th id="list_title2">제목</th>
						<th id="list_title3">글쓴이</th>
						<th id="list_title4">등록일</th>
						<th id="list_title5">조회</th>
					</tr>
				</thead>		
			

		<!-- <div id="list_content"> -->
				<tbody>
<?		
   for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
   {
      mysql_data_seek($result, $i);       
      // 가져올 레코드로 위치(포인터) 이동  
      $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	  $item_num     = $row[num];
	  $item_id      = $row[id];
	  $item_name    = $row[name];
  	$item_nick    = $row[nick];
	  $item_hit     = $row[hit];
		$item_date    = $row[regist_day];
	  $item_date = substr($item_date, 0, 10);  //2021-02-13

	  $item_subject = str_replace(" ", "&nbsp;", $row[subject]);   // 공백문자를 &nbsp;로 출력

?>
				<!-- <tr id="list_item"> -->
				<tr onclick="location.href='view.php?num=<?=$item_num?>&page=<?=$page?>'">
					<td><?= $number ?></td>
					<td><a href="view.php?num=<?=$item_num?>&page=<?=$page?>"><?= $item_subject ?></a></td>
					<td><?= $item_nick ?></td>
					<td><?= $item_date ?></td>
					<td><?= $item_hit ?></td>
				</tr>
<?
   	   $number--;
   }
?>
				</tbody>
			</table>

<!--목록, 글쓰기 버튼-->

			<div id="button">
				<a href="list.php?page=<?=$page?>">목록</a>&nbsp;
<? 
	if($userid)
	{
?>
				<a href="write_form.php">글쓰기</a>
<?
	}
?>
			</div>

<!--목록, 글쓰기 버튼 end -->

<!--페이지 버튼-->
			<div id="page_button">
				<div id="page_num">
<? //이전 버튼
	if ($page == 1) {// 페이지번호($page)가 0 일 때
?>
					<a href="javascript:void(0)" class="prev_btn_off prev_btn">이전</a>
<?
	} else {
		if($mode=="search"){
?>
					<a href="list.php?page=<?=$page-1?>&scale=<?=$scale?>&mode=search&find=<?=$find?>&search=<?=$search?>" class="prev_btn">이전</a>
<?
		} else {
?>
					<a href="list.php?page=<?=$page-1?>&scale=<?=$scale?>" class="prev_btn">이전</a>
<?
		}
	}
?>

<?
   // 게시판 목록 하단에 페이지 링크 번호 출력
   for ($i=1; $i<=$total_page; $i++)
   {
		if ($page == $i)     // 현재 페이지 번호 링크 안함
		{
			// echo "<b> $i </b>";
			echo "<a href='javascript:void(0)' class='on'> $i </a>"; 
		}
		else
		{ 
			if($mode=="search") {
				echo "<a href='list.php?page=$i&scale=$scale&mode=search&find=$find&search=$search'> $i </a>"; 
			} else {    
				echo "<a href='list.php?page=$i&scale=$scale'> $i </a>";
			}
		}      
   }
?>			

<? //다음 버튼
	if ($page == $total_page) {// 페이지번호($page)가 총 페이지수 일 때
?>
					<a href="javascript:void(0)" class="next_btn_off next_btn">다음</a>
<?
	} else {
		if($mode=="search"){
?>
					<a href="list.php?page=<?=$page+1?>&scale=<?=$scale?>&mode=search&find=<?=$find?>&search=<?=$search?>" class="next_btn">다음</a>
<?
		} else {
?>
					<a href="list.php?page=<?=$page+1?>&scale=<?=$scale?>" class="next_btn">다음</a>
<?
		}
	}
?>

				</div>
			</div> <!-- end of page_button -->
<!--페이지 버튼 end-->
        <!-- </div> -->
				<!-- end of list content -->

		</div>
		<!-- end of content_area -->
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>
