// Variable

const accordion = document.getElementsByClassName('content-container')


// this to reference the object currently calling the function  -> eg. this is used to reference accordion[i](object) currently calling the function
// toggle() to toggle between adding and removing a classname with javascript
for(i = 0; i < accordion.length; i+=1){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}