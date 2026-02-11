document.addEventListener('DOMContentLoaded', function () {
  const attentionSeekers = [
    'animate__bounce',
    'animate__flash',
    'animate__pulse',
    'animate__rubberBand',
    'animate__shakeX',
    'animate__shakeY',
    'animate__headShake',
    'animate__swing',
    'animate__tada',
    'animate__wobble',
    'animate__jello',
    'animate__heartBeat',
  ];

  const greeting = document.querySelector('.greeting');
  const randomAnimation = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
  greeting.classList.add(randomAnimation);

  const dobInput = document.getElementById('dob');
  new Datepicker(dobInput, {
    autohide: true,
    format: 'MM-dd',
  });

  document.querySelectorAll('.form-check-input').forEach((c) => (c.checked = false));

  document.getElementById('checkbox-card').addEventListener('change', function (e) {
    if (e.target.id === 'toggleAll') {
      const shouldCheck = e.target.checked;

      document.querySelectorAll('.form-check-input').forEach((cb) => {
        if (cb.id === 'toggleAll') return;

        cb.checked = shouldCheck;
        cb.dispatchEvent(new Event('change', { bubbles: true }));
      });

      return;
    }

    if (e.target.classList.contains('form-check-input')) {
      const img = document.getElementById(e.target.id + 'Img');

      img.style.visibility = 'visible';
      img.classList.remove('animate__animated', 'animate__bounceInDown', 'animate__bounceOutUp');

      e.target.checked
        ? img.classList.add('animate__animated', 'animate__bounceInDown')
        : img.classList.add('animate__animated', 'animate__bounceOutUp');

      const balloonCheckboxes = Array.from(document.querySelectorAll('.form-check-input')).filter(
        (cb) => cb.id !== 'toggleAll'
      );

      document.getElementById('toggleAll').checked =
        balloonCheckboxes.length && balloonCheckboxes.every((cb) => cb.checked);
    }
  });

  const submitBtn = document.getElementById('submit');
  const toastEl = document.getElementById('noBalloonsToast');
  const noBalloonsToast = new bootstrap.Toast(toastEl);

  submitBtn.addEventListener('click', function () {
    const anyChecked = Array.from(document.querySelectorAll('.form-check-input')).some(
      (cb) => cb.id !== 'toggleAll' && cb.checked
    );

    if (!anyChecked) {
      noBalloonsToast.show();
    }
  });

  const originalGreetingColor = greeting.style.color || 'slategray';

  const colorMap = {
    red: 'crimson',
    green: 'seagreen',
    blue: 'royalblue',
  };

  document.querySelectorAll('#checkbox-card label').forEach((label) => {
    const inputId = label.getAttribute('for');

    if (!colorMap[inputId]) return;

    label.addEventListener('mouseenter', () => {
      greeting.style.color = colorMap[inputId];
    });

    label.addEventListener('mouseleave', () => {
      greeting.style.color = originalGreetingColor;
    });
  });
});
