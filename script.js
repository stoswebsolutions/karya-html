// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// for range slider in pricing plans
const rangeSlider = document.getElementById('sale-range');
if (rangeSlider) {
  rangeSlider.oninput = function () {
    $('.selected-value').html(this.value);
    $('.profile-val').html(this.value * 10);
    $('.income-val').html(this.value * 400);
  };
}

// for menu
// $('.dashboard .menu li').click(function () {
$('.dashboard-item, .status, .exploreJobs, .exploreCompanies, .logout').click(
  function () {
    $('.dashboard .menu li').removeClass('active forDashboard');
    const selectedItem = $(this).attr('name');
    $('.menu-item-select option[value=' + selectedItem + ']').attr(
      'selected',
      'selected'
    );
    if ($(this).hasClass('dashboard-item')) {
      $(this).addClass('active');
      $(this).addClass('forDashboard');
      return;
    }
    $(this).addClass('active');
    return;
  }
);

// for select menu
$('.menu-item-select').on('change', function () {
  $('.dashboard .menu li').removeClass('active forDashboard');
  if (this.value === 'dashboard') {
    $('.dashboard-item').addClass('active');
    $('.dashboard-item').addClass('forDashboard');
    return;
  }
  $('.' + this.value).addClass('active');
  return;
});
