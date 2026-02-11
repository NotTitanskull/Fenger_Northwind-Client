document.addEventListener('DOMContentLoaded', function () {
  const elem = document.getElementById('dob');
  new Datepicker(elem, {
    autohide: true,
    format: 'MM-dd',
  });

  document.querySelectorAll('.form-check-input').forEach((c) => (c.checked = false));

  document.getElementById('checkbox-card').addEventListener('change', function (e) {
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = 'visible';
      elem.classList.remove('animate__animated', 'animate__bounceInDown', 'animate__bounceOutUp');
      e.target.checked
        ? elem.classList.add('animate__animated', 'animate__bounceInDown')
        : elem.classList.add('animate__animated', 'animate__bounceOutUp');
    }
  });
});
