          //  scroll to top button
          const scrollBtn = document.querySelector(".scrollToTop-btn");
          window.addEventListener("scroll", function(){
              scrollBtn.classList.toggle("active", window.scrollY > 500);
          });
            //  scroll back to top on click scroll-to-top button
          scrollBtn.addEventListener("click", () => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
          });