<?
   function latest_article($table, $loop, $char_limit) // 테이블명, 리스트개수, 제목글제한수(byte)
   {
		include "dbconn.php";

		$sql = "select * from $table order by num desc limit $loop";
		$result = mysql_query($sql, $connect);

		echo "<ul>";

		while ($row = mysql_fetch_array($result))
		{
			$num = $row[num];

			// 제목
			$len_subject = mb_strlen($row[subject], 'utf-8');   //한글도 한글자로 처리한다.
			$subject = $row[subject];

			// if ($len_subject > $char_limit) //제한글자수(30) 보다 크면
			// {
			// 	 $subject = str_replace( "&#039;", "'", $subject);               
      //          $subject = mb_substr($subject, 0, $char_limit, 'utf-8');
			// 	$subject = $subject."...";
			// }

			// 작성일
			$regist_day = substr($row[regist_day], 0, 10);

			// 내용
			$item_content = $row[content];
			$len_content = strlen($row[content]);  // 내용의 길이를 구한다.
			if ($len_content > 64)   //내용의 길이가 지정한 길이보다 크면
			{
				$item_content = mb_substr($item_content, 0, 64, 'utf-8');  
				// 첫번째 문자부터 $char_limit만큼 잘라낸다.
				//mb_substr 은 입력받은 문자열을 정해진 길이만큼 잘라서 리턴하는데 
				//2byte 문자인 한글에 대해서도 처리가 가능한 함수입니다. 
				$item_content = $item_content."...";   // 잘라낸 문자열에 ...을 추가한다.
				// $testLog = "testlog_if";
			}

			// 이미지
			$item_content = str_replace(" ", "&nbsp;", $item_content); // 공백문자를 &nbsp;로 출력
            
					if($table=='concert'){
							
							if($row[file_copied_0]){	//첨부된 이미지가 있으면..
								$concertimg='./concert/data/'.$row[file_copied_0];	//첫번째 이미지를 출력
							}else{	//첨부된 이미지가 없다면 default 이미지 출력
								$concertimg= './concert/data/default.jpg';
							}
					}
            
            
            
		// 			if($table=='greet'){ //greet 테이블일때
					
		// echo "      
		// 	<div class='col1'><a href='./$table/view.php?table=$table&num=$num'>$subject</a></div> <div class='col2'>$regist_day</div>
		// 	<div class='clear'></div>
		// ";
							
		// 			}else if($table=='concert'){	//concert 테이블일때
						
		// 				echo "      
		// 	<div class='col1'><a href='./$table/view.php?table=$table&num=$num'>
		// 					<img src='$concertimg' alt='' width='50' height='50'>
		// 					$subject</a></div> <div class='col2'>$regist_day</div>
		// 	<div class='clear'></div>
		// ";  
							
		// 			}
               
				if($table == 'concert') {
					echo "<li>
									<a href='./concert/view.php?table=concert&num=$num'>
										<div class='img_wrap'><img src='$concertimg' alt='$subject'/></div>
										<span>$regist_day</span>
										<dl>
											<dt>$subject</dt>
											<dd>$item_content</dd>
										</dl>
									</a>
								</li>
								";
				}
        
		}

		echo "</ul>";
		mysql_close();
   }

	 
?>