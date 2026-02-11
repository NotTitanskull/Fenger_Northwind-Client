document.addEventListener('DOMContentLoaded', function () {
  const discountRowEl = document.getElementById('discount-row');
  const toastEl = document.getElementById('liveToast');

  const toastProductEl = document.getElementById('toastProduct');
  const toastTitleEl = document.getElementById('toastTitle');
  const toastCodeEl = document.getElementById('toastCode');

  const toast = bootstrap.Toast.getOrCreateInstance(toastEl, {
    autohide: false,
  });

  discountRowEl.addEventListener('click', function (event) {
    if (event.target.classList.contains('discount')) {
      event.preventDefault();

      const link = event.target;

      toastProductEl.textContent = link.dataset.product;
      toastTitleEl.textContent = link.dataset.discountTitle;
      toastCodeEl.textContent = link.dataset.discountCode;

      toast.show();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      toast.hide();
    }
  });
});
