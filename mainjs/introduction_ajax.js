

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var cnt=0;
var total=0; //객체배열의 총개수
var timeoff;

function ok(){
  var newContent = '';
  var newImg = '';
  
  newContent += '<ul><li>';
  newContent += '<h4>' +  responseObject.introduction[cnt].heading_El + '</h4>';
  newContent += '<p>'+ responseObject.introduction[cnt].d_title +'</p>';
  newContent += '<p>'+ responseObject.introduction[cnt].d_data +'</p>';
  newContent += '<a href="'+ responseObject.introduction[cnt].anchor_addr +'">' + responseObject.introduction[cnt].anchor + '<i class="fas fa-chevron-right"></i></a>';
  newContent += '</li></ul>';

  newImg += '<img src="' + responseObject.introduction[cnt].map + '" alt="' + responseObject.introduction[cnt].heading_El + '" />';

  // document.getElementById('introduction_img_area').innerHTML = newImg;
  // document.getElementById('introduction_description_area').innerHTML = newContent;
  $('#introduction_img_area').html(newImg).css({opacity:0}).fadeTo('slow',1).clearQueue();
  $('#introduction_description_area').html(newContent).css({opacity:0}).fadeTo('slow',1).clearQueue();
  // console.log('ok() : ' + i);
}

function ok_auto() {
  cnt++;
  if(cnt>=total) {
    cnt=0;
  } else if(cnt<0) {
    cnt=total-1;
  }
  ok();
}

xhr.onload = function() {                       // When readystate changes
 
  if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체배열로 변환한다.
    total=responseObject.introduction.length;
    ok();
    
    // console.log('onload end');
  }
};

document.getElementById('introduction_nextBtn').onclick=function(){
  clearInterval(timeoff);
  cnt++;
  if(cnt==total)cnt=0;
  // console.log('onclick_next'+cnt);
  document.getElementById('introduction_pauseBtn').classList.add('playbtn');
  ok(cnt);
}

document.getElementById('introduction_backBtn').onclick=function(){
  clearInterval(timeoff);
  cnt--;
  if(cnt<0)cnt=total-1;
  // console.log('onclick_back'+cnt);
  document.getElementById('introduction_pauseBtn').classList.add('playbtn');
  ok(cnt);
}
document.getElementById('introduction_pauseBtn').onclick=function(){

  if(this.classList.contains('playbtn')) {
    this.classList.remove('playbtn');
    timeoff=setInterval(ok_auto, 5000);
  } else {
    clearInterval(timeoff);
    this.classList.add('playbtn');
  }
  // console.log('onclick_back'+cnt);
}






xhr.open('GET', './data/introduction_data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다
timeoff=setInterval(ok_auto, 5000);