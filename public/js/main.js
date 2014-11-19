changeHeaderTitle();


function changeHeaderTitle(){
    element = document.querySelector(".header h1");
    
    container = document.createElement("div");
    container.classList.add("header-title");
    
    element.innerHTML = "";
    
    word1 = document.createElement("span");
    word1.appendChild(document.createTextNode("Jardim"));
    word1.classList.add("top");
    
    word2 = document.createElement("span");
    word2.appendChild(document.createTextNode("Web"));
    word2.classList.add("bottom");
    
    element.appendChild(container);
    
    container.appendChild(word1);
    container.appendChild(word2);
}
 function createNav(){
     
 }
