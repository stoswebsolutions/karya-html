// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// for menu
$(
  '.dashboard-item, .status, .cart-details, .vacancies, .exploreTalents, .myAccount, .logout'
).click(function () {
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
});

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

// to-fro btns
$('.company-info-next').click(function () {
  $('.company-info-form').addClass('d-none');
  $('.upload-video-gallery').removeClass('d-none');
  $('.company-info .progress-lines').addClass('completed');
});

$('.upload-pics-btn').click(function () {
  $('.upload-imgs-section').addClass('d-none');
  $('.upload-video-file').removeClass('d-none');
});

$('.upload-vid-btn').click(function () {
  $('.upload-video-file').addClass('d-none');
  $('.upload-img-table').removeClass('d-none');
});

$('.upload-img-next').click(function () {
  $('.upload-video-gallery').addClass('d-none');
  $('.talent-engagement-assessment').removeClass('d-none');
  $('.upload-gallery .progress-lines').addClass('completed');
});

$('.upload-img-back').click(function () {
  $('.upload-video-gallery, .upload-img-table').addClass('d-none');
  $('.upload-imgs-section').removeClass('d-none');
  $('.company-info-form').removeClass('d-none');
});

// for assessment
$('.talent-engagement-assessment .strt-assessment-btn').click(function () {
  $('.talent-engagement-assessment .assessment-dets').addClass('d-none');
  $('.talent-engagement-assessment .assessment-qstn').removeClass('d-none');
});

$('.talent-engagement-assessment .assessment-qstn .qstn-choices label').click(
  function () {
    const selectedChoice = $(this).attr('for');
    alert('user opted - ' + selectedChoice);
    $('.talent-engagement-assessment .assessment-qstn').addClass('d-none');
    $('.talent-engagement-assessment .thanks-note').removeClass('d-none');
    $('.engagement-assessment .progress-lines, .incomplete').addClass(
      'completed'
    );
  }
);

$('.publish-btn').click(function () {
  $('.talent-engagement-assessment').addClass('d-none');
  $('.for-stepper').addClass('d-none');
  $('.my-profile-abt-company').removeClass('d-none');
});
