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
	<title>회원정보수정</title>
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/member_form_modify.css">
	<script>
   function check_id()
   {
     window.open("check_id.php?id=" + document.member_form.id.value,
         "IDcheck",
          "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
   }

  //  function check_nick()
  //  {
  //    window.open("../member/check_nick.php?nick=" + document.member_form.nick.value,
  //        "NICKcheck",
  //         "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
  //  }

   function check_input()
   {
      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit();
   }

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
</head>
<?
    //$userid='aaa';
    
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);
    //$row[id]....$row[level]

    $hp = explode("-", $row[hp]);  //000-0000-0000
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
<body>
	<div id="wrap">
    <header>
      <h1>
        <a class="logo" href="../index.html">BGFretail</a>
      </h1> 
	  </header>

    <article id="content">
      <div class="sub_cont_wrap">
        <h2><span>정보수정</span></h2>

        <form  name="member_form" method="post" action="modify.php"> 
          <!-- <div id="title">
            <img src="../img/title_member_modify.gif">
          </div> -->
          <div id="form_join">
            <!-- <div id="join1">
              <ul>
              <li>* 아이디</li>
              <li>* 비밀번호</li>
              <li>* 비밀번호 확인</li>
              <li>* 이름</li>
              <li>* 닉네임</li>
              <li>* 휴대폰</li>
              <li>&nbsp;&nbsp;&nbsp;이메일</li>
              </ul>
            </div> -->
            <div id="join2">
              <table>
                <tr>
                  <th>
                    <label><span class="red_asterisk">*</span> 아이디</label>
                  </th>
                  <td>
                    <?= $row[id] ?>
                  </td>
                </tr>
                <tr>
                  <th scope="col">
                    <label for="pass"><span class="red_asterisk">*</span> 비밀번호</label>
                  </th>
                  <td>
                    <input type="password" name="pass" id="pass" value="">
                  </td>
                </tr>
                <tr>
                  <th scope="col">
                    <label for="pass_confirm"><span class="red_asterisk">*</span> 비밀번호 확인</label>
                  </th>
                  <td>
                    <input type="password" name="pass_confirm" id="pass_confirm" value="">
                  </td>
                </tr>
                <tr>
                  <th scope="col">
                    <label for="name"><span class="red_asterisk">*</span> 이름</label>
                  </th>
                  <td>
                    <input type="text" name="name" id="name" value="<?= $row[name] ?>">
                  </td>
                </tr>
                <tr>
                  <th scope="col">
                    <label for="nick"><span class="red_asterisk">*</span> 닉네임</label>
                  </th>
                  <td>
                    <div id="nick1"><input type="text" name="nick" id="nick" value="<?= $row[nick] ?>"></div>
                    <span id="loadtext2"></span>
                    <!-- <button id="nick2" type="button" onclick="check_nick()"><span>중복확인</span></button> -->
                  </td>
                </tr>
                <tr>
                  <th scope="col">
                    <label for="hp1"><span class="red_asterisk">*</span> 휴대폰</label>
                  </th>
                  <td>
                    <input type="text" class="hp" name="hp1" id="hp1" value="<?= $hp1 ?>"> - 
                    <input type="text" class="hp" name="hp2" value="<?= $hp2 ?>"> - 
                    <input type="text" class="hp" name="hp3" value="<?= $hp3 ?>">
                  </td>
                </tr>
                <tr>
                  <th scope="col">
                    <label for="email1"><span class="red_asterisk">*</span> 이메일</label>
                  </th>
                  <td>
                    <input type="text" id="email1" name="email1" value="<?= $email1 ?>"> @ <input type="text" name="email2" value="<?= $email2 ?>">
                  </td>
                </tr>
              </table>
            </div>
            <!-- end of join2 -->
            <div class="must"> <span class="red_asterisk">*</span> 는 필수 입력항목입니다.</div>
          </div>
          <!-- end of form_join -->
          <!-- <div id="button">
            <a href="javascript:void(0)" onclick="check_input()">저장하기</a>
            <a href="javascript:void(0)" onclick="reset_form()">취소하기</a>
          </div> -->

          <div class="modify_button_wrap">
            <button type="button" onclick="check_input()" class="modify_btn"><span>저장하기</span></button>
            <button type="button" onclick="reset_form()" class="cancel"><span>취소하기</span></button>
          </div>

        </form>



      </div>
      <!-- end of sub_cont_wrap -->
    </article>
	</div>
  <!-- end of wrap -->
  <script src="../common/js/jquery-1.12.4.min.js"></script>
	<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
	<script src="./js/member_form_modify.js"></script>
</body>
</html>





