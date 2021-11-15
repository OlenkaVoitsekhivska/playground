(() => {
    const refs = {
        btn: document.querySelector('[btn]')
    };

    refs.btn.addEventListener('click', toggleBtn);
    
    function toggleBtn() {
   
     
        refs.btn.classList.toggle('slideInLeft');
    }


})();
