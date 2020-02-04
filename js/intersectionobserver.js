const work1 = document.getElementById("work1");
const works = document.querySelectorAll(".work-item");

const options = {
  root: null, // viewport
  threshold: 0, // determines at what percentage of visibility an event activates
  rootMargin: "-150px" // Can be written like in css: 5px 5px 5px 5px
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry.target);
  });
}, options);

works.forEach(work => {
  observer.observe(work);
});
