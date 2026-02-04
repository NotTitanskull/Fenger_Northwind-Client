document.addEventListener("DOMContentLoaded", function () {
  const elem = document.getElementById("dob");
  new Datepicker(elem, {
    autohide: true,
    format: "MM-dd",
  });
});
