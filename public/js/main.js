changeHeaderTitle();
createNav();


function changeHeaderTitle(){
    var element = document.querySelector(".header h1");
    
    var container = document.createElement("div");
        container.classList.add("header-title");
    
    element.innerHTML = "";
    
    var word1 = document.createElement("span");
    word1.appendChild(document.createTextNode("Jardim"));
    word1.classList.add("top");
    
    var word2 = document.createElement("span");
    word2.appendChild(document.createTextNode("Web"));
    word2.classList.add("bottom");
    
    element.appendChild(container);
    
    container.appendChild(word1);
    container.appendChild(word2);
}
 function createNav(){
    var element = document.querySelector(".header");
    
    var container = document.createElement("div");
    container.classList.add("nav-bar");
    
    var path = "public/images/";
    
    var data =  '{"informations":[{"image" : "'+path+'img1.jpg","link"  : "#jar-preamble"}, {"image" : "img1.jpg","link"  : "jar-preamble"}]}';
      
            
     objects = JSON.parse(data);
     
    for (i=0;i<7;i++){
        wrap = document.createElement("div");
        wrap.classList.add("wrap");
        
        crop = document.createElement("div");
        crop.classList.add("crop");
        
        link = document.createElement("a");
        link.classList.add("nav-item");
        link.href = objects.informations[0].link;
        
        img = document.createElement("img");
        img.classList.add();
        img.src = objects.informations[0].image;
        
        wrap.appendChild(crop);
        crop.appendChild(link);
        link.appendChild(img);
        
        container.appendChild(wrap);
    }
    element.appendChild(container);
 }
