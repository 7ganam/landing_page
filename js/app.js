/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
    section_list = document.querySelectorAll("[data-nav]");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
    // function to check if an item is in view port
    function inViewport( element )
    {
    
        // Get the elements position relative to the viewport
    
        let bb = element.getBoundingClientRect();
        
        // Check if the element is outside the viewport
        // Then invert the returned value because you want to know the opposite
    
        return !(bb.top > innerHeight || bb.bottom < 0);
        
    }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

    // find all sections containig data-nav attribute
    //create ul element for the nav bar

    const UL= document.createElement("ul");

    for (i = 0; i < section_list.length    ; i++) 
    {
        //find the title and id of all elements with data-nav attribute
        let nav_elem_title = section_list[i].getAttribute("data-nav") 
        let nav_elem_id = section_list[i].getAttribute("id") 

        //create li and a elements and add the href and text content to them
        let LI = document.createElement('li');
        let AA = document.createElement('a');
        AA.setAttribute("href", "#"+nav_elem_id)
        let textOfA = document.createTextNode(nav_elem_title);

        AA.appendChild(textOfA);
        LI.appendChild(AA);
        LI.setAttribute("data-title", nav_elem_id);
        UL.appendChild(LI);
        //add class active to the first item
        if (i==0)
        {
            LI.setAttribute("class", "active" );
        }
    }


    document.body.appendChild(UL)


    //set the scrolling effect function when clicking the navigation bar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



// Add class 'active' to section when near top of viewport



    // section_list is a global variable of type Nodelist
    //add event listner to the scroll event for each section (header h1)

  section_list.forEach( 

    function(current_section, currentIndex, listObj) { 



        const myElement =current_section.children[0].children[0];
        
        // Listen for the scroll event
        document.addEventListener( 'scroll', event => {
            // Check the viewport status
            if( inViewport( myElement) )
            {
                //get the position relative to the top of the screen
                let viewportOffset = current_section.getBoundingClientRect();
                // these are relative to the viewport
                let top = viewportOffset.top;
                let left = viewportOffset.left;

                //set the classes to both the section in view and the navigation bar
                if( top < 200 )
                {
                    document.getElementsByClassName("active_section")[0].classList.remove("active_section");
                    myElement.parentElement.parentElement.classList.add("active_section");
                    

                    header_id =document.getElementsByClassName("active_section")[0].getAttribute("id")

                    document.getElementsByClassName("active")[0].classList.remove("active");
                    new_active_element = document.querySelectorAll( "[data-title=" +header_id+"]")[0].classList.add("active");

                }
            } 
          
        })

    }
  );

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


