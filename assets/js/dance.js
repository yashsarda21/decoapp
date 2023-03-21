$(function () {
  var winh = $(window).height();
  var winw = $(window).width();
  $("body").css({
    height: winh,
    width: winw,
  });

  TweenMax.from(".speakerL", 0.3, {
    scale: 1.1,
    yoyo: true,
    repeat: -1,
    ease: Bounce.easeOut,
  });
  TweenMax.from(".speakerR", 0.3, {
    scale: 1.1,
    yoyo: true,
    repeat: -1,
    ease: Bounce.easeOut,
  });
  TweenMax.staggerFrom(
    ".crowd",
    0.5,
    {
      y: 100,
      yoyo: true,
      repeat: -1,
    },
    0.1
  );
  TweenMax.from(".lightL", 0.5, {
    x: winw / 2,
    yoyo: true,
    repeat: -1,
    repeatDelay: 2,
  });
  TweenMax.from(".lightR", 0.5, {
    x: -winw / 2,
    yoyo: true,
    repeat: -1,
    repeatDelay: 2,
  });
  TweenMax.fromTo(
    ".psy",
    5,
    {
      backgroundPosition: "0 0",
      x: -200,
    },
    {
      backgroundPosition: "-4722px 0",
      repeat: -1,
      yoyo: true,
      ease: SteppedEase.config(21),
      x: 200,
    }
  );
});
