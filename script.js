const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const img = document.querySelector(".hero");
const paragraph = document.querySelector("p");

next.addEventListener("click", function onClick(){
    img.src = "images/image-john.jpg";
    next.style.opacity = "0.5";
    prev.style.opacity = "1";
    paragraph.innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`;
    name.innerHTML = "John Tarkpor ";
    job.innerHTML = " Junior Front-end Developer";
})

prev.addEventListener("click", function onClick(){
    img.src = "images/image-tanya.jpg";
    prev.style.opacity = "0.5";
    next.style.opacity = "1";
    paragraph.innerHTML = `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`;
    name.innerHTML = "Tanya Sinclair ";
    job.innerHTML = " UX Engineer";
})



