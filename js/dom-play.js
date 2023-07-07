// alert("Hi from DOM play")

/* 

- With a single click, highlight (bold or otherwise) all lines for a specific actor in a play

- Un-highlight (normal or otherwise) all lines from all other actors in the play

- The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page

- We can change the HTML as needed

*/


function highlightActor(actor) {
    // alert("The current actor is: " + actor)
    for(const mySpan of spans) {
        if(actor == mySpan.dataset.actor){// current actor
            mySpan.style.backgroundColor='orange';
        }else{// other actor
            mySpan.style.backgroundColor='rgb(219, 226, 238)';
        }
    }
};

const spans = document.querySelectorAll("#play span")

console.log(spans)

for(const mySpan of spans){
    // mySpan.addEventListener('click', myAlert);
    mySpan.addEventListener('click', function(ev){
        // ev = event
        highlightActor(mySpan.dataset.actor);
    });
}



