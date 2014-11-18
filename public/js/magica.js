jQuery(document).ready(function($) {
    var id = 1;
    $('body').terminal(function(command, term) {
        if (command == 'help') {
            term.echo("Os  mysql, js, test");
        } else if (command == 'test'){
            document.querySelector("#extraDiv1").classList.add("show");
        } else if (command == "js") {
            
        } else if (command == 'mysql') {
         
        } else if (command == 'zueira'){
            var element = document.querySelector("#extraDiv1");
            
            element.classList.add("highleights");
            element.innerHTML = "<iframe class='video' width='480' height='390' src='//www.youtube.com/embed/hqiNL4Hn04A?autoplay=1&loop=1&controls=0' frameborder='0' allowfullscreen></iframe>";
            
        }else if(command == "arroz"){
            var element = document.querySelector("#extraDiv1");
            
            element.classList.add("highleights");
            element.innerHTML = "<iframe class='video' width='480' height='390' src='//www.youtube.com/embed/-tCEkUhncEY?autoplay=1&loop=1&controls=0' frameborder='0' allowfullscreen></iframe>";
        }
    }, {
        greetings: "Fala ai galera"
        
    });
});

