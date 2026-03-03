const backToTopBtn = document.getElementById('back-to-the-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopBtn.style.display = 'block';
            }else{
                backToTopBtn.style.display = 'none';
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth'});
        });


        /*The previous button*/


  
  const navPages = ['index.html', 'home.html', 'wildlife.html', 'tourism.html', 'culture.html'];

  window.addEventListener('popstate', function(event) {
    let ref = document.referrer.split("/").pop();

    // Keep going back while ref is a nav page
    while(navPages.includes(ref)) {
      history.back();
      ref = document.referrer.split("/").pop();
    }
  });





// const links = document.querySelectorAll(".nav-link");

//     links.forEach(link => {
//       link.addEventListener("click", function(event) {
//         // event.preventDefault(); // optional, stops jumping
//         links.forEach(l => l.classList.remove("active"));
//         this.classList.add("active");
//       });
//     });