const init = function () {
  // Selecteer de elementen
  const showModalDialog = document.querySelector("#showModalDialog");
  const closeModalDialog = document.querySelector("#closeModalDialog");
  const modalDialog = document.querySelector("#modalDialog");

  // Open de dialog met een view transition
  showModalDialog.addEventListener("click", () => {
    // modalDialog.style.viewTransitionName = 'modalOpen';
    document.startViewTransition(() => {
      modalDialog.showModal();
    });
  });

  // Sluit de dialog met een view transition
  closeModalDialog.addEventListener("click", () => {
    // modalDialog.style.viewTransitionName = 'modalClose';
    document.startViewTransition(() => {
      modalDialog.close();
    });
  });

  // Sluit de dialog met een view transition wanneer de 'Escape' toets wordt ingedrukt
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    //   modalDialog.style.viewTransitionName = "modalClose";
      document.startViewTransition(() => {
        modalDialog.close();
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
