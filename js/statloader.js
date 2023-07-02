function statanimation() {
  var $this = $(this);
  var num = $this.text();
  $this.text(0);
  jQuery({ Counter: 0 }).delay(600).animate({ Counter: num }, {
    duration: 1700,
    easing: 'swing',
    step: function() {
      $this.text(Math.ceil(this.Counter));
    }, complete: function() {
      $this.text(num);
    }
  });
  // 
}

$(window).scroll(startCounter1);
$(window).scroll(startCounter2);
$(window).scroll(startCounter3);
$(window).scroll(startCounter4);

function startCounter1() {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  if (isScrolledIntoView('#stat1')) {
    $(window).off("scroll", startCounter1);
    $('#stat1').each(
      statanimation
    );
  }
}

function startCounter2() {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  if (isScrolledIntoView('#stat2')) {
    $(window).off("scroll", startCounter2);
    $('#stat2').each(
      statanimation
    );
  }
}

function startCounter3() {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  if (isScrolledIntoView('#stat3')) {
    $(window).off("scroll", startCounter3);
    $('#stat3').each(
      statanimation
    );
  }
}

function startCounter4() {
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  if (isScrolledIntoView('#stat4')) {
    $(window).off("scroll", startCounter4);
    $('#stat4').each(
      statanimation
    );
  }
}