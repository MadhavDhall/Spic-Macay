let scrollcontainer = document.querySelector(".allimages");
let blogscontainer = document.querySelector(".allblogs");
let rev = document.getElementById("leftarr");
let fwd = document.getElementById("rightarr");
let fwdblog = document.getElementById("rightarrow");
let blogdivs = document.getElementsByClassName('blogcontainer');
let viewportWidth = window.innerWidth;
fwd.addEventListener("click", function () {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft += viewportWidth * 0.3;
  fwd.style.transform = 'scale(1.2)';
  setTimeout(function () {
    fwd.style.transform = 'scale(1)';
  }, 100);
});
rev.addEventListener("click", function () {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft -= viewportWidth * 0.3;
  rev.style.transform = 'scale(1.2)';
  setTimeout(function () {
    rev.style.transform = 'scale(1)';
  }, 100);
});
fwdblog.addEventListener("click", function () {
  blogscontainer.style.scrollBehavior = "smooth";
  blogscontainer.scrollLeft += blogdivs[0].offsetWidth;
  fwdblog.style.transform = 'scale(1.2)';
  setTimeout(function () {
    fwdblog.style.transform = 'scale(1)';
  }, 100);
});