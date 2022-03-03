$(document).ready(function(){
  
	//    회원가입 개인정보 동의 ------------------------------------
	let checkboxLength = $('input[type="checkbox"].agree').length; // 체크박스의 총개수
	//	현재 동의 수
	let	checkedLength = 0;

	numberOfchecked();

	$('.total_number_of_agree').text(checkboxLength);

	//회원가입버튼
	$('.check_agree').on('click',check_agree);
	function check_agree(e){
		checkedLength=$('input[type="checkbox"]:checked.agree').length;   //체크가 되어있는 체크박스 개수
			//console.log(checkboxLength,$('input[type="checkbox"]:checked').length)
		
		if(checkboxLength != checkedLength){
				alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");

				let noAgreeElId;
				for(let i = 0; i < checkboxLength; i++) {
					// console.log('for문 i',i);
					if(!$('#check0'+ (i+1)).is(':checked')) {
						// console.log('if문');
						noAgreeElId = $('#check0'+ (i+1)).attr('id');
						// console.log('noAgreeElId', noAgreeElId);
						$('label[for="'+noAgreeElId+'"]').addClass('guided_no_agree').focus();
						// document.getElementsByClassName(noAgreeElId)[0].focus();
						return false;
					}
				}



				// document.querySelector('input.agree:nth-of-type(1)').focus();
				// document.querySelector('input.agree:nth-of-type(1)').scrollIntoView();
				e.preventDefault();
		}else{
				location.href="member_form.php";   //회원가입 폼 입력 페이지로 이동
		}
	}

	// 모두 선택 버튼
	$('#allcheck').on('change',function(e){
		e.preventDefault();
		//전체 동의가 되어 있는 경우 -> 전부 동의 해제하고 모든동의버튼도 해제상태로.
		//전체 동의가 안 된 경우 -> 전부 동의하고 모든동의버튼도 체크상태로.
		if(checkboxLength == $('input[type="checkbox"]:checked.agree').length) {
			$('input[type="checkbox"].agree').attr("checked", false);
			$('input:checkbox[id="allcheck"]').attr("checked", false);
		} else {
			$('input[type="checkbox"].agree').attr("checked", true);
			$('input:checkbox[id="allcheck"]').attr("checked", true);
			$('input[type="checkbox"].agree+label').removeClass('guided_no_agree');
		}

		numberOfchecked();

	});

	//각각의 동의 버튼
	//동의버튼 클릭할 때마다 총 동의수를 카운트하여 모두 동의시 모든동의버튼 체크상태로.
	$('input[type="checkbox"].agree').on('change', function(e){
		e.preventDefault();
		// console.log($(this).attr('checked')); //x
		// console.log($(this).prop('checked'));
		// console.log($(this).is('checked')); //x
		// console.log($(this).is(':checked'));
		if(true == $(this).is(':checked')) {
			$(this).attr("checked", true);
			$('input[type="checkbox"].agree+label').removeClass('guided_no_agree');
			// console.log('if문: false');
		} else {
			$(this).attr("checked", false);
			// console.log('if문: true');
		}

		numberOfchecked();

		if(checkboxLength == checkedLength){ //체크가 되어있는 체크박스 개수
			$('input:checkbox[id="allcheck"]').attr("checked", true);
		} else {
			$('input:checkbox[id="allcheck"]').attr("checked", false);
		}

	});

	// $('.allcheck').toggle(function(e){

	//        e.preventDefault();

	//        $('input[type="checkbox"]').attr('checked',true);

	//     },function(e){

	//       e.preventDefault();

	//       $('input[type="checkbox"]').attr('checked',false);

	//     });

	//family site
	$('.familysite .arrow').toggle(function(e){
		e.preventDefault(); //href="#" 속성을 막아주는..메소드
		$(this).addClass('open');
		$('.familysite .aList').slideDown('fast');
	}, function(e){
		e.preventDefault(); //href="#" 속성을 막아주는..메소드
		$(this).removeClass('open');
		$('.familysite .aList').slideUp('fast');
	});

	//tab키 처리
	$('.familysite .arrow').on('focus', function () {        
		$('.familysite .aList').slideDown('fast');	
	});
	$('.familysite .aList li:last a').on('blur', function () {        
		$('.familysite .aList').slideUp('fast');
	});  
	//family site end

	//현재 채크된 수 계산 후 반영하기
	function numberOfchecked() {
		checkedLength=$('input[type="checkbox"]:checked.agree').length;   //체크가 되어있는 체크박스 개수
		$('.number_of_agree').text(checkedLength);
	}
		



});

function join_cancel(){
   history.go(-1);
}

















