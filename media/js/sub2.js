var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;

xhr.onload = function() {                       // When readystate changes
  responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
  // $('.video_wrap iframe').attr('src',responseObject.trailers[0].video_path);
  // $('.trailers_wrap > div dl dt').text(responseObject.trailers[0].title);
  // $('.trailers_wrap > div dl dd').text(responseObject.trailers[0].des);
};

xhr.open('GET', './data/music_data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다

$(document).ready(function() {
  let ind_button = 0;
  let playListElLength = $('.play_list').children().length;
  let activeMusicInd = 0;
  let playFlag = false;
  let playListInd = 0;
  let videoEl = document.querySelector('#music');

  //-----audio init-----

  // for(var i = 0; i < playListElLength; i++) {
  //   document.getElementById('audio'+i)
  //   .addEventListener('ended', () => {
  //     $('#wave').removeClass('on');
  //   }, false);
  // }
  videoEl.addEventListener('ended', () => {
    
    $('#wave').removeClass('on');

    if(activeMusicInd == playListElLength - 1) {
      activeMusicInd = 0;
    } else {
      activeMusicInd += 1;
    }

    changeMusic();
    changeSelectMusicTitle();

    $('#wave').addClass('on');
    videoEl.play();

  }, false);
  
  //-----audio init end-----


  //-----swiper-----
  var swiper = new Swiper('.swiper-container', {
    autoHeight: true,
    speed : 500
  });

  swiper.on('slideChange', function () {
    $('.chara_tabs .active').removeClass('active');
    $('.chara_tabs li').eq(swiper.activeIndex).addClass('active');
  });
  
  $('.chara_tabs a').on('touchstart mousedown', function(e) {
    e.preventDefault();
    $('.chara_tabs .active').removeClass('active');

    $(this).parent().addClass('active');
    swiper.slideTo($(this).parent().index());
  });
  
  $('.chara_tabs a').click(function(e) {
    e.preventDefault();
  });
  //-----swiper end-----


  //-----audio button-----
  $('.discbutton li a').on('click', function(e) {
    e.preventDefault();
    ind_button = $(this).parent().index();

    switch(ind_button) {
      case 0 : //prev
        $('#wave').removeClass('on');
        // document.getElementById('audio'+activeMusicInd).pause();
        // document.getElementById('audio'+activeMusicInd).currentTime = 0;

        if(activeMusicInd == 0) {
          activeMusicInd = playListElLength - 1;
        } else {
          activeMusicInd -= 1;
        }

        changeMusic();
        changeSelectMusicTitle();

        if(playFlag) {
          $('#wave').addClass('on');
          videoEl.play();
          // document.getElementById('audio'+activeMusicInd).play();
        }
        break;
      case 1 :  //stop
        $('#wave').removeClass('on');
        videoEl.pause();
        videoEl.currentTime = 0;
        // document.getElementById('audio'+activeMusicInd).pause();
        // document.getElementById('audio'+activeMusicInd).currentTime = 0;
        videoEl.textTracks[0].mode = 'hidden';
        playFlag = false;
        break;
      case 2 :  //play
        $('#wave').addClass('on');
        videoEl.play();
        videoEl.textTracks[0].mode = 'showing';
        playFlag = true;
        break;
      case 3 :  //pause
        $('#wave').removeClass('on');
        videoEl.pause();
        playFlag = false;
        break;
      case 4 :  //next
        $('#wave').removeClass('on');
        // document.getElementById('audio'+activeMusicInd).pause();
        // document.getElementById('audio'+activeMusicInd).currentTime = 0;

        // console.log('activeMusicInd',activeMusicInd);
        // console.log('videoEl.textTracks',videoEl.textTracks);
        
        if(activeMusicInd == playListElLength - 1) {
          activeMusicInd = 0;
        } else {
          activeMusicInd += 1;
        }
        // videoEl.setAttribute('src','./tracks/' + responseObject.music[activeMusicInd].audio_path);

        // videoEl.innerHTML = '';
        // videoEl.innerHTML = '<track default srclang="ko" kind="captions" label="Korean subtitles" src="./data/' + responseObject.music[activeMusicInd].sub + '"/>';
      
        //   videoPlayer.onended = function(){
        //     videoPlayer.src = nextVideo;
        // }
 
        changeMusic();
        changeSelectMusicTitle();

        if(playFlag) {
          $('#wave').addClass('on');
          videoEl.play();
          // document.getElementById('audio'+activeMusicInd).play();
        }
        break;
    }

  });
  //-----audio button end-----


  //-----play list click-----
  $('.play_list li a').on('click', function(e) {
    e.preventDefault();
    playListInd = $(this).parent().index();
    // console.log('playListInd',playListInd);
    // console.log('activeMusicInd',activeMusicInd);
    if(activeMusicInd == playListInd) {
      return;
    } else {
      $('#wave').removeClass('on');
      videoEl.pause();
      videoEl.currentTime = 0;
      activeMusicInd = playListInd;

      changeMusic();
      changeSelectMusicTitle();

      if(playFlag) {
        $('#wave').addClass('on');
        videoEl.play();
      }
      // console.log('play list click','end');
    }
  });
  //-----play list click end-----

  function changeSelectMusicTitle() {
    document.querySelector('.left_box dl dt').innerText = responseObject.music[activeMusicInd].title;
    document.querySelector('.left_box dl dd').innerText = responseObject.music[activeMusicInd].des;
  }

  function changeMusic() {
    document.querySelector('#music source').setAttribute('src','./tracks/' + responseObject.music[activeMusicInd].audio_path);
    videoEl.load();

    videoEl.textTracks[0].mode = 'hidden';
    document.querySelector('#music track').src = './data/' + responseObject.music[activeMusicInd].sub;
    videoEl.textTracks[0].mode = 'showing';

    $('.play_list li').removeClass('active');
    $('.play_list li').eq(activeMusicInd).addClass('active');
  }

});
