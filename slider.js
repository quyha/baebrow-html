document.addEventListener('DOMContentLoaded', function(event) {
  if(document.querySelector('.slides--container')){
  	const nextButton = document.querySelector('.next--slide--btn .btn--image');
    const prevButton = document.querySelector('.prev--slide--btn .btn--image');
    const prevString = document.querySelector('.prev--slide--btn .desc__btn');
    const nextString = document.querySelector('.next--slide--btn .desc__btn');

    let allSlides = document.querySelectorAll('.slide--custom');
    let progressBlock = document.querySelector('.progress--block');
    let progressBlocks = document.querySelector('.progress--blocks');

    document.querySelector('.slide--custom:first-child').classList.add('slide--active');

    progressBlock.style.height = Math.ceil(progressBlocks.clientHeight / allSlides.length) + 'px';

    let slidesLength = document.querySelector('.slides--length');

    function slidesNumber(){
    	if(allSlides.length < 10 ) { return '0' + allSlides.length;} else{ return allSlides.length};
    }

    slidesLength.innerText = slidesNumber();

    let topMarginNumber = Number(100/allSlides.length);

    progressBlock.style.top = topMarginNumber + '%';

    var getNextSibling = function (elem) {


	var sibling = elem.nextElementSibling;

      if(!sibling){
      	sibling = document.querySelector('.slide--custom');
      }

      return sibling;
};

   var getPrevSibling = function (elem) {

	// Get the next sibling element

	var sibling = elem.previousElementSibling;

     if(!sibling){
     	sibling = document.querySelector('.slides--container').lastElementChild;
     }

     return sibling;
};

    function nextSlide(){
      let currentSlide = document.querySelector('.slide--active');
      let nextSlide = getNextSibling(currentSlide);
      let nextnext = getNextSibling(nextSlide);
      let img = nextnext.querySelector('.author__img-placeholder img').src;
      let prevSlide = getPrevSibling(nextSlide);
      let prevImg = prevSlide.querySelector('.author__img-placeholder img').src;
      let progressCounter = document.querySelector('.progress--counter');
      let number = undefined;

      if(Number(+progressCounter.innerText + +1)>9){
      	number = Number(+progressCounter.innerText + +1);
      }

      if(Number(+progressCounter.innerText + +1)<10){
      	number = '0' + Number(+progressCounter.innerText + +1);
      }

      if(number>allSlides.length){
      	number = '0' + 1;
      }

      progressCounter.innerText = number;

      progressBlock.style.top = Number(number * topMarginNumber) + '%';

      prevButton.classList.add('trans-left');
      nextButton.classList.add('trans-right');

      setTimeout(function(){
       prevButton.classList.remove('trans-left');
       nextButton.classList.remove('trans-right');
      }, 950)


       currentSlide.classList.remove('slide--active');
      currentSlide.removeAttribute('style');
      nextSlide.classList.add('slide--active');
      nextSlide.style.animation = '1s slide-left ease';

      setTimeout(function(){
      	nextButton.style.backgroundImage = 'url(' + img + ')';
        prevButton.style.backgroundImage = 'url(' +	prevImg + ')';
      }, 550)
    }

    function prevSlide(){
      let currentSlide = document.querySelector('.slide--active');
      let prevSlide = getPrevSibling(currentSlide);
      let prevprev = getPrevSibling(prevSlide);
      let prevImg = prevprev.querySelector('.author__img-placeholder img').src;

      let progressCounter = document.querySelector('.progress--counter');
      let number = '0' + Number(+progressCounter.innerText - +1);

      if(number > 9){
      	number = Number(+progressCounter.innerText - +1);
      }

      if(number<1){
        if(allSlides.length < 10){
          number = '0' + allSlides.length;}
        if(allSlides.length > 9){
          number =	allSlides.length;}
      }

      progressCounter.innerText = number;

      let marginTop = parseInt(number * topMarginNumber);

      progressBlock.style.top = marginTop + '%';

      let nextSlide = getNextSibling(prevSlide);
      let img = nextSlide.querySelector('.author__img-placeholder img').src;

      prevButton.classList.add('trans-left');
      nextButton.classList.add('trans-right');

      setTimeout(function(){
       prevButton.classList.remove('trans-left');
       nextButton.classList.remove('trans-right');
      }, 950)

       currentSlide.classList.remove('slide--active');
       currentSlide.removeAttribute('style');
      prevSlide.classList.add('slide--active');
       prevSlide.style.animation = '1s slide-right ease';

       setTimeout(function(){
        nextButton.style.backgroundImage = 'url(' +	img + ')';
        prevButton.style.backgroundImage = 'url(' +	prevImg + ')';
       }, 550)
    }

      let currentSlide = document.querySelector('.slide--active');
      let prevprev = getPrevSibling(currentSlide);
      let prevImg = prevprev.querySelector('.author__img-placeholder img').src;
      let nextnext = getNextSibling(currentSlide);
      let img = nextnext.querySelector('.author__img-placeholder img').src;

   	nextButton.style.backgroundImage = 'url(' + img + ')';
    prevButton.style.backgroundImage = 'url(' +	prevImg + ')';

    nextButton.addEventListener('click', function(){
      nextSlide();
    });


     prevString.addEventListener('click', function(){
		prevSlide();
    });

    nextString.addEventListener('click', function(){
      nextSlide();
    });


     prevButton.addEventListener('click', function(){
		prevSlide();
    });

     let prevSlideBtn = document.querySelectorAll('.move--btns--prev');
     let nextSlideBtn = document.querySelectorAll('.move--btns--next');

    for(let i=0; i<prevSlideBtn.length; i++){
      prevSlideBtn[i].addEventListener('click', function(){
      	prevSlide();
      });

      nextSlideBtn[i].addEventListener('click', function(){
      	nextSlide();
      });
    }
  }
});
