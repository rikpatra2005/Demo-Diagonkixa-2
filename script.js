console.log("Website Loaded");

document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".nav-link");

    const sections = [
        {
            id: "overview",
            nav: "#overview"
        },
        {
            id: "about",
            nav: "#about"
        },
        {
            id: "products",
            nav: "#products"
        },
        {
            id: "contact",
            nav: "#contact"
        }
    ];

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if(entry.isIntersecting){

                    const currentId = entry.target.id;

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                    });

                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${currentId}"]`
                        );

                    if(activeLink){

                        activeLink.classList.add("active");

                    }

                }

            });

        },

        {
            threshold: 0.35
        }

    );

    sections.forEach(section => {

        const element =
            document.getElementById(section.id);

        if(element){

            observer.observe(element);

        }

    });

});

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


document.addEventListener("click", function(event){

    const navbarCollapse =
        document.querySelector(".navbar-collapse");

    const navbarToggler =
        document.querySelector(".navbar-toggler");

    const isClickInsideNavbar =
        navbarCollapse.contains(event.target);

    const isClickOnToggler =
        navbarToggler.contains(event.target);

    if(
        navbarCollapse.classList.contains("show")
        &&
        !isClickInsideNavbar
        &&
        !isClickOnToggler
    ){

        bootstrap.Collapse
            .getInstance(navbarCollapse)
            .hide();
    }

});

document
.querySelectorAll(".nav-link")
.forEach(link => {

    link.addEventListener("click", () => {

        const navbarCollapse =
            document.querySelector(".navbar-collapse");

        if(
            navbarCollapse.classList.contains("show")
        ){

            bootstrap.Collapse
                .getInstance(navbarCollapse)
                .hide();
        }

    });

});