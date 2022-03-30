// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.50013090835862, 127.02903706017445);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 
  var marker = new google.maps.Marker({
   position: myLatlng, 
   map: map, 
   title:"(주)그린컴퓨터아트학원"
  });   
  
 
  var infowindow = new google.maps.InfoWindow({
   content: "(주)그린컴퓨터아트학원 서울시 강남구 역삼동 815-4 만이빌딩 5F"
  });
 
  infowindow.open(map,marker);
 }
 
 
 window.onload=function(){
  initialize();
 }

