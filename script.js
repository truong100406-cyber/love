document.addEventListener("click", () => {
  const next = document.body.dataset.next;
  if (next) {
    window.location.href = next;
  }
});
