changeHeaderTitle();
createNav();
resizeElements();
addScrollListener();


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
    //JSON to get informations to nav-bar
    data =  '{"informations":[ \
                                {"image" : "'+path+'img1.jpg","link"  : "#jar-summary","alt":"Introducao"}, \
                                {"image" : "'+path+'img1.jpg","link"  : "#jar-preamble","alt" : "descricao"},\
                                {"image" : "'+path+'img1.jpg","link"  : "#jar-explanation","alt" : "explicacao"},\
                                {"image" : "'+path+'img1.jpg","link"  : "#jar-participation","alt" : "participacao"},\
                                {"image" : "'+path+'img1.jpg","link"  : "#jar-benefits","alt" : "beneficios"},\
                                {"image" : "'+path+'img1.jpg","link"  : "#jar-requirements","alt" : "requisitos"},\
                                {"image" : "'+path+'img1.jpg","link"  : "#jar-preamble","alt" : "descricao"}\
                                ]}';
      
            
     objects = JSON.parse(data);
     
    for (i=0;i<7;i++){
        wrap = document.createElement("div");
        wrap.classList.add("wrap");
        
        crop = document.createElement("div");
        crop.classList.add("crop");
        
        link = document.createElement("a");
        link.classList.add("nav-item");
        link.href = objects.informations[i].link;
        
        img = document.createElement("img");
        img.classList.add();
        img.src = objects.informations[i].image;
        img.alt = objects.informations[i].alt;
        
        wrap.appendChild(crop);
        crop.appendChild(link);
        link.appendChild(img);
        
        container.appendChild(wrap);
    }
    element.appendChild(container);
 }
 function resizeElements(){
    viewportwidth=0;
    viewportheight=0;
     if (typeof window.innerWidth != 'undefined') {
       viewportwidth = window.innerWidth;
       viewportheight = window.innerHeight;
      }

   // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

   else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
       viewportwidth = document.documentElement.clientWidth;
       viewportheight = document.documentElement.clientHeight;
   }

   // older versions of IE

   else {
       viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
       viewportheight = document.getElementsByTagName('body')[0].clientHeight;
   }
    for (i=0;i<7;i++) {
        element = document.querySelector(objects.informations[i].link);
        element.style.height = "100vh";
    }
 }
 function addScrollListener(){
     corpo = document.querySelector("body");
     corpo.onscroll = ancoraListener();
 }
 function ancoraListener(){
     
 }
 
