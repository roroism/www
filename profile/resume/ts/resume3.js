window.onload = function () {
  console.log('window.onload');

  // set max-height
  let contentEls = document.querySelectorAll('.content');
  
  contentEls.forEach((contentEl, index) => {
    console.log(index, contentEl.scrollHeight);
    // contentEl.style.maxHeight = contentEl.scrollHeight+'px';
  });
  // end of set max-height


  // slide button event
  let arrowBtn = document.querySelectorAll('.open_btn');
 
  arrowBtn.forEach((btn) => {
    btn.addEventListener('click', function(event){
      event.preventDefault();
      console.log(event.currentTarget);
      this.parentNode.parentNode.parentNode.classList.toggle('off');
      // var targetElement = document.getElementsByClassName('section')[1];
    });
  });
  // end of slide button event


  // javascript fade in out
  // function fadeIn(target) {
  //   var level = 0;
  //   var inTimer = null;
  //   inTimer = setInterval( function() {
  //     level = fadeInAction(target, level, inTimer);
  //   }, 50);
  // }
  // function fadeInAction(target, level, inTimer) {
  //   level = level + 0.1;
  //   changeOpacity(target, level);
  //   if(level>1) clearInterval(inTimer);
  //   return level;
  // }
  // function fadeOut(target) {
  //   var level = 1;
  //   var outTimer = null;
  //   outTimer = setInterval( function() {
  //     level = fadeOutAction(target, level, outTimer);
  //   }, 50);
  // }
  // function fadeOutAction(target, level, outTimer) {
  //   level = level - 0.1;
  //   changeOpacity(target, level);
  //   if(level < 0) {
  //     clearInterval(outTimer);
  //   }
  //   return level;
  // }
  // function changeOpacity(target, level) {
  //   var obj = target;
  //   obj.style.opacity = level;
  //   obj.style.MozOpacity = level;
  //   obj.style.KhtmlOpacity = level;
  //   obj.style.MsFilter = "'progid: DXImageTransform.Microsoft.Alpha(Opacity=" + (level * 100) + ")'";
  //   obj.style.filter = "alpha(opacity=" + (level * 100) + ");";
  // }

  // fadeIn 필요한 부분에서
  // var targetElement = document.getElementsByClassName('클래스이름')[0];
  // fadeIn(targetElement);

  // // fadeOut 필요한 부분에서
  // var targetElement = document.getElementsByClassName('클래스이름')[0];
  // fadeOut(targetElement);
  // end of javascript fade in out


  //slideup slidedown slidetoggle
  //   let slideUp = (target, duration=500) => {
  //     target.style.transitionProperty = 'height, margin, padding';
  //     target.style.transitionDuration = duration + 'ms';
  //     target.style.boxSizing = 'border-box';
  //     target.style.height = target.offsetHeight + 'px';
  //     target.offsetHeight;
  //     target.style.overflow = 'hidden';
  //     target.style.height = 0;
  //     target.style.paddingTop = 0;
  //     target.style.paddingBottom = 0;
  //     target.style.marginTop = 0;
  //     target.style.marginBottom = 0;
  //     window.setTimeout( () => {
  //       target.style.display = 'none';
  //       target.style.removeProperty('height');
  //       target.style.removeProperty('padding-top');
  //       target.style.removeProperty('padding-bottom');
  //       target.style.removeProperty('margin-top');
  //       target.style.removeProperty('margin-bottom');
  //       target.style.removeProperty('overflow');
  //       target.style.removeProperty('transition-duration');
  //       target.style.removeProperty('transition-property');
  //       //alert("!");
  //     }, duration);
  //   }
  // let slideDown = (target, duration=500) => {
  //     target.style.removeProperty('display');
  //     let display = window.getComputedStyle(target).display;

  //     if (display === 'none')
  //       display = 'block';

  //     target.style.display = display;
  //     let height = target.offsetHeight;
  //     target.style.overflow = 'hidden';
  //     target.style.height = 0;
  //     target.style.paddingTop = 0;
  //     target.style.paddingBottom = 0;
  //     target.style.marginTop = 0;
  //     target.style.marginBottom = 0;
  //     target.offsetHeight;
  //     target.style.boxSizing = 'border-box';
  //     target.style.transitionProperty = "height, margin, padding";
  //     target.style.transitionDuration = duration + 'ms';
  //     target.style.height = height + 'px';
  //     target.style.removeProperty('padding-top');
  //     target.style.removeProperty('padding-bottom');
  //     target.style.removeProperty('margin-top');
  //     target.style.removeProperty('margin-bottom');
  //     window.setTimeout( () => {
  //       target.style.removeProperty('height');
  //       target.style.removeProperty('overflow');
  //       target.style.removeProperty('transition-duration');
  //       target.style.removeProperty('transition-property');
  //     }, duration);
  //   }
  // let slideToggle = (target, duration = 500) => {
  //   if (window.getComputedStyle(target).display === 'none') {
  //     return slideDown(target, duration);
  //   } else {
  //     return slideUp(target, duration);
  //   }
  // }
    
  // // ====  
    
  // let speedAnimation = 400;
  // let targetId = document.getElementById("target");

  // let slideBtnClick = (cl, sl) => 
  // document.querySelector(cl).addEventListener('click', () => sl(targetId, speedAnimation));

  // slideBtnClick('.triggerToggle', slideToggle);
  // end of slideup slidedown slidetoggle



};