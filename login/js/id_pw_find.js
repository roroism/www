$(document).ready(function(){

	// init
	var param = [];

	function getParams() {

		var url = decodeURIComponent(location.href); // 현재 페이지의 url
		url = decodeURIComponent(url); // url = ex.html?num=1&name=홍길동
		// url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.

		var params = '';
		params = url.substring( url.indexOf('?')+1, url.length ); //substring : 문자를 잘라내는 함수 //num=0&item=0

		params = params.split("&");  //num=0   , item=0

		var size = params.length;  //배열의 개수 2개 //0, 1
		//var key, value;
		for(var i=0 ; i < size ; i++) {
				key = params[i].split("=")[0];  // key = num, item
				value = params[i].split("=")[1];  // value = 0, 0
				
				param[key] = value;   // param['num'] = '100';   param['name'] = 홍길동;
		}	
	}
	getParams();
	
	if(param['find'] == 'pw') {
		$('.find_tab li').removeClass('on');
		$('.find_tab li:eq(1)').addClass('on');
		$('.tab_desc:eq(1)').show(); // 두번째 탭 내용만 열기
	} else {
		$('.find_tab li').removeClass('on');
		$('.find_tab li:eq(0)').addClass('on');
		$('.tab_desc:eq(0)').show(); // 첫번째 탭 내용만 열기
	}
	// tab on with 매개변수
	// $('.tab ul li').removeClass('current');
	// $('.contBox').hide();

	// if(param['num'] == 1 || param['num'] == 2){
	// 		$('.tab ul li:eq('+ param['num'] +')').addClass('current');
	// 		$('.contBox:eq('+ param['num'] +')').show();
	// } else {
	// 		$('.tab ul li:eq(0)').addClass('current');
	// 		$('.contBox:eq(0)').show();
	// }
	//end of init

	// tab
	var cnt=2;  //탭메뉴 개수 ***
	//$('.tab_desc:eq(0)').show(); // 첫번째 탭 내용만 열어라
	//$('.history .tab1').css('background','green').css('color','#333'); //첫번째 탭메뉴 활성화
							//자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

	$('.find_tab li a').click(function(e){
				e.preventDefault();   // <a> href="#" 값을 강제로 막는다  

				var ind = $(this).index('.find_tab li a');  // 클릭시 해당 index를 뽑아준다
				// console.log(ind);

				$(".tab_desc").hide(); //모든 탭내용을 안보이게...
				$(".tab_desc:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
				$('.find_tab li').removeClass('on');
				$(this).parent('li').addClass('on');
				//$('.tab').css('background','red').css('color','#fff'); //모든 탭메뉴를 비활성화
				//$(this).css('background','green').css('color','#333'); // 클릭한 해당 탭메뉴만 활성화

	});
	// end of tab

	//ajax
	//id 찾기
	$(".id_find").click(function() {    // id입력 상자에 id값 입력시
		console.log('id_find');
		var name = $('#id_name').val(); //홍길동
		var hp1 = $('#id_hp1').val(); //010
		var hp2 = $('#id_hp2').val(); //1111
		var hp3 = $('#id_hp3').val(); //2222

		$.ajax({
				type: "POST",
				url: "find.php", 
				data: "name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  /*매개변수id도 같이 넘겨줌*/
				// dataType: "json",
				cache: false, 
				success: function(data) /*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
				{
					// console.log('succcess',data);
					// data = JSON.parse(data);
					// $(".find_id #loadtext").html(data); /*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
					findedInfoModalOpen(data, 'id_find');
				}
		});
			
		// $("#loadtext").addClass('loadtexton'); // css 변경
	}); 

	//pw 찾기
	$(".pw_find").click(function() {    // id입력 상자에 id값 입력시
		console.log('pw_find');
		var id = $('#pw_id').val(); //green2
		var name = $('#pw_name').val(); //홍길동
		var hp1 = $('#pw_hp1').val(); 
		var hp2 = $('#pw_hp2').val(); 
		var hp3 = $('#pw_hp3').val(); 
		// console.log('id',id);
		// console.log('name',name);
		// console.log('hp1',hp1);
		// console.log('hp2',hp2);
		// console.log('hp3',hp3);

		$.ajax({
				type: "POST",
				url: "find2.php", /*매개변수인 check_id.php파일을 post방식으로 넘기세요*/
				data: "id="+ id+ "&name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  /*매개변수id도 같이 넘겨줌*/
				// dataType: 'json',
				cache: false, 
				success: function(data) /*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
				{
					// $(".find_pw #loadtext").html(data); /*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
					findedInfoModalOpen(data, 'pw_find');
				}
		});
		
		// $("#loadtext").addClass('loadtexton');     
	}); 
	//end of ajax


	  //--------------modal
		// var newContent='';

		function findedInfoModalOpen(find_info, find_value) {
			// newContent='';
				// var ind = $(this).index('.cf_list a');
				$('.modal_popup .data_wrap').html(find_info);
				if(find_value == 'id_find')	$('.modal_popup').addClass('find_id_height');
				
				$('.modal_bg').fadeIn('fast');
				$('.modal_popup').fadeIn('slow');
	
				//newContent += '<strong>광고 영상</strong><a href="javascript:void(0)" class="close_btn">닫기버튼</a><div class="video_wrap">';

				//newContent += '<iframe src="'+ responseObject.cf[ind].video_path +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';

				//newContent += '<dl><dt>'+ responseObject.cf[ind].title + '</dt><dd>' + responseObject.cf[ind].des + '</dd></dl>';

				// $('.modal_popup').html(find_info);
				
				//$('.modal_popup').text(find_info.findvalue+'<br>'+find_info.userid+'<br>'+find_info.username+'<br>'+find_info.userhp+'<br>'+find_info.date);
				
				// $('.modal_bg').click(function(e){
				//   e.preventDefault();
				//   $('.modal_popup').hide();
				//   $('.modal_bg').hide();
				// });
		}
	
		$('.close_btn, .modal_bg').click(function(e){
			e.preventDefault();
			// console.log('click');
			// $(".modal_popup iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
			
			$('.modal_popup').hide();
			$('.modal_bg').hide();
			$('.modal_popup').removeClass('find_id_height');
			// $('.modal_popup').html('');
		});

		// $('.modal_popup .modal_button_wrap button').click(function(e){
		// 	e.preventDefault();
		// 	// $('.modal_popup').hide();
		// 	// $('.modal_bg').hide();
		// 	// $('#id_name').value('');
		// 	// $('#id_hp1').value('');
		// 	// $('#id_hp2').value('');
		// 	// $('.find_tab li').removeClass('on');
		// 	// $('.find_tab li:eq(1)').addClass('on');
		// });



		//--------------modal end
});
