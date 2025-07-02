// Testimonial slider using jQuery
$(document).ready(function () {
  let index = 0;
  const testimonials = $(".testimonial");

  function showTestimonial(i) {
    testimonials.removeClass("active");
    testimonials.eq(i).addClass("active");
  }

  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 3000);
  

});


