(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileLink = document.querySelectorAll("[mobileFix]");

[...mobileLink].map(elem=>elem.addEventListener("click", ()=>{
  mobileMenuRef.classList.remove("is-open");
  menuBtnRef.classList.remove("is-open");
}))
// mobileLink.addEventListener('click', )


  
    menuBtnRef.addEventListener("click", () => {
      // const expanded =
      //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      // menuBtnRef.setAttribute("aria-expanded", !expanded);


    //   const scrollLockMethod = !expanded
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  
    mobileMenuRef.classList.toggle("is-open");

    // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    //     if (!e.matches) return;
    //     menuBtnRef.classList.remove('is-open');
    //     mobileMenuRef.setAttribute('aria-expanded', false);
    //     bodyScrollLock.enableBodyScroll(document.body);
    //   });
   
});
  })();