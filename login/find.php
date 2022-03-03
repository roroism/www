<?
  
   session_start();
?>
    <meta charset="UTF-8">
<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION); 
  // header("Content-Type: application/json");
  /*
$name='홍길동'
$hp1='010'
$hp2='1111'
$hp3='2222'
  */

   if(!$name) {  /* !='없으면'*/
     echo("
           <script>
             window.alert('이름을 입력하세요');
            // history.go(-1);
            location.replace('./id_pw_find.php?find=id');
            //history.go(-1);
            </script>
         ");
         exit;
   }

   if(!($hp2 && $hp3)) {
     echo("
           <script>
             window.alert('연락처를 입력하세요');
            // history.go(-1);
            location.replace('./id_pw_find.php?find=id');
           </script>
         ");
          exit;
   }


   include "../lib/dbconn.php";

   $sql = "select * from member where name='$name'";  //이름으로 검색
   $result = mysql_query($sql, $connect); //있으면 1, 없으면 null

   $num_match = mysql_num_rows($result);  //1 null

   if(!$num_match) //검색 레코드가 없으면
   {
     echo(" 
           <script>
             window.alert('등록되지 않은 이름 입니다');
             //history.go(-1);
             location.replace('./id_pw_find.php?find=id');
           </script>
         ");
    }
    else     //검색 레코드가 있으면  
    {
         $hp = $hp1."-".$hp2."-".$hp3;  // 010-1111-2222
        
		     $row = mysql_fetch_array($result); 
          //$row[id] ,.... $row[level]
         $sql ="select * from member where name='$name' and hp='$hp'";
         $result = mysql_query($sql, $connect);
         $num_match = mysql_num_rows($result); //있으면 1, 없으면 null
     
  /* db에 이미 암호화 된 pass를 다시 암호화해서 기존의 pass로 알아낼수 없다,
  암호화된 pass가 입력된 pass의 암호화와 일치하는가를 확인해야함*/

        if(!$num_match) //이름은 있지만..전화번호가 일치하지 않으면
        {
           echo("
              <script>
                window.alert('등록된 정보가 없습니다');
                //history.go(-1);
                location.replace('./id_pw_find.php?find=id');
              </script>
           ");

           exit;
        }
        else  //1이면=이름과 전화번호가 모두 일치 한다면
        {
          $userid = $row[id];
          $username = $row[name];
          $userhp = $row[hp];
          $date = $row[regist_day];
          
          // $result['findvalue'] = 'find_id';
          // $result['success'] = true;
          // $result['userid'] = $userid;
          // $result['username'] = $username;
          // $result['userhp'] = $userhp;
          // $result['date'] = $date;

          // $o = array();
          // $t = new infoClass();
          // $t->findvalue = 'find_id'
          // $t->userid = $userid;
          // $t->username = $username;
          // $t->userhp = $userhp;
          // $t->date = $date;
          // $o[] = $t;
          // $t->uid = $row->uid;
          // $t->name = $row->name;
          // $t->desc = $row->desc;

          //echo json_encode($result, JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
          // header("Content-Type:application/json");
          // echo json_encode($t);

          // echo "userid=".$userid."&username=".$username."&userhp=".$userhp."&date=".$date."&findvalue=find_id"
          // $json_data = array('result'=>'success', 'userid'=>$userid, 'username'=>$username, 'userhp'=>$userhp, 'date'=>$date);
          // header("Content-Type: application/json; charset=utf-8");
          // echo json_encode($json_data);
           echo
           "아이디 : $userid <br>
           이름 : $username <br>
           연락처 : $userhp <br>
           가입일자 : $date ";
           

           
        }
   }          
?>
