
/* On document load...*/
document.addEventListener("DOMContentLoaded", function() {

    /* Add event listeners to collapsible elements. On click, toggle hide/show of collapsible content. */
    if(document.getElementsByClassName("button-collapsible").length > 0){ //If the element exists on the page
        let collapsible = document.getElementsByClassName("button-collapsible"); //Grab all the elements
        for (i = 0; i < collapsible.length; i++) { //Loop and add an event listener to each
            collapsible[i].addEventListener("click", function() { 
                let content = this.nextElementSibling;
                if (content.style.display === "block") { //If visible, need to hide
                    content.style.display = "none";
                    this.innerHTML = "+ Show Filters"
                    this.setAttribute('aria-expanded', false);
                } 
                else {
                    content.style.display = "block"; //If hidden, need to show
                    this.innerHTML = "- Hide Filters"
                    this.setAttribute('aria-expanded', true);
                }
            });
        }
    }
});