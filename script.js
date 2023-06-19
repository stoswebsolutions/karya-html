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

// for assessment
$('.discover-btn').click(function () {
  $('.discover-details').addClass('d-none');
  $('.assessment-qstn').removeClass('d-none');
});

$('.assessment-qstn .qstn-choices label').click(function () {
  const selectedChoice = $(this).attr('for');
  alert('user opted - ' + selectedChoice);
  $('.assessment-qstn').addClass('d-none');
  $('.thanks-note').removeClass('d-none');
});

// to-fro btns
$('.personal-info-next').click(function () {
  $('.personal-info-form').addClass('d-none');
  $('.upload-resume-form').removeClass('d-none');
  $('.personal-info .progress-lines').addClass('completed');
});

$('.resume-back').click(function () {
  $('.upload-resume-form').addClass('d-none');
  $('.personal-info-form').removeClass('d-none');
});
$('.resume-next').click(function () {
  $('.upload-resume-form').addClass('d-none');
  $('.personality-assessment-section').removeClass('d-none');
  $('.upload-resume .progress-lines').addClass('completed');
});

$('.assessment-back').click(function () {
  $('.personality-assessment-section').addClass('d-none');
  $('.upload-resume-form').removeClass('d-none');
});
$('.assessment-next').click(function () {
  $('.personality-assessment-section').addClass('d-none');
  $('.interview-prep-section').removeClass('d-none');
  $('.personality-assessment .progress-lines').addClass('completed');
});

$('.interview-prep-back').click(function () {
  $('.interview-prep-section').addClass('d-none');
  $('.interview-pitches, .interview-pitches-accordion').addClass('d-none');
  $('.interview-prep-section .intro, .for-stepper').removeClass('d-none');
  $('.personality-assessment-section').removeClass('d-none');
});
$('.interview-prep-next').click(function () {
  $('.interview-prep-section').addClass('d-none');
  $('.interview-pitches, .interview-pitches-accordion').addClass('d-none');
  $('.interview-prep-section .intro, .for-stepper').removeClass('d-none');
  $('.upload-video-pitch-section').removeClass('d-none');
  $('.interview-prep .progress-lines').addClass('completed');
});

$('.upload-video-back').click(function () {
  $('.upload-video-pitch-section').addClass('d-none');
  $('.interview-prep-section').removeClass('d-none');
});
$('.upload-video-next').click(function () {
  $('.upload-video-pitch-section').addClass('d-none');
  $('.generate-eval-section').removeClass('d-none');
  $('.upload-vid .progress-lines').addClass('completed');
});

$('.eval-back').click(function () {
  $('.generate-eval-section, .eval-dtls').addClass('d-none');
  $('.generate-eval-section .intro, .for-stepper').removeClass('d-none');
  $('.upload-video-pitch-section').removeClass('d-none');
});
$('.eval-next').click(function () {
  $('.generate-eval-section, .generate-eval-section .eval-dtls').addClass(
    'd-none'
  );
  $('.generate-eval-section .intro, .for-stepper').removeClass('d-none');
  $('.congrats-note-section').removeClass('d-none');
  $('.incomplete').addClass('complete');
});

$('.interview-prep-section .okay-btn').click(function () {
  $('.interview-prep-section .intro, .for-stepper').addClass('d-none');
  $(
    '.interview-prep-section .interview-pitches, .interview-pitches-accordion'
  ).removeClass('d-none');
});

$('.generate-eval-section .generate-btn').click(function () {
  $('.generate-eval-section .intro, .for-stepper').addClass('d-none');
  $('.generate-eval-section .eval-dtls').removeClass('d-none');
});
