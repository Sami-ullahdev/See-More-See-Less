const btn = document.getElementById("btn");
const paragraph = document.getElementById("paragraph");
const shortText = paragraph.innerHTML;

let expandpara = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Officia necessitatibus sint dolor sit amet consectetur adipisicing elit.Officia necessitatibus sint et libero minus, consequuntur incidunt.";

function expand(){
    if(btn.innerHTML.toLowerCase() == "see more"){
        paragraph.innerHTML = expandpara
        btn.innerHTML = "See Less"
    } else {
        btn.innerHTML = "See More"
        paragraph.innerHTML = shortText
    }
};