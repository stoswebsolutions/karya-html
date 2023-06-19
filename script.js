// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// for range slider in pricing plans
const rangeSlider = document.getElementById('sale-range');
rangeSlider.oninput = function () {
  $('.selected-value').html(this.value);
  $('.profile-val').html(this.value * 10);
  $('.income-val').html(this.value * 400);
};
