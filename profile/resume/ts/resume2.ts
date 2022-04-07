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
  let arrowBtn: NodeListOf<Element> = document.querySelectorAll('.open_btn');
 
  arrowBtn.forEach((btn: Element) => {
    btn.addEventListener('click', function(event){
      event.preventDefault();
      // console.log('click');
      // event.currentTarget.parentNode.parentNode.parentNode.classList.toggle('off');
      // var targetElement = document.getElementsByClassName('section')[1];
    });
  });
  // end of slide button event

};