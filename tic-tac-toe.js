document.addEventListener('DOMContentLoaded', (event) => {
    const button = [];

    for (var i = 3; i <= 11; i++) {
        document.querySelectorAll("div")[i].classList.add("square",);
        button.push(document.querySelectorAll("div")[i]);
    }

    var newGame = document.querySelector(".btn");
    newGame.addEventListener("click", function() {

        for (var i = 0; i <= 8; i++) {
            button[i].textContent = '';
            button[i].className = "square";
        }
        var instructions = document.getElementById("status");
        instructions.className = "";
        instructions.textContent = "Move your mouse over a square and click to play an X or an O.";
        previous="";

    });
    let previous = "O";
    function buttonPress(y){
        if (y.textContent == ""){
            if ((previous == "O") || (previous == "")){
                previous="X";
                
                y.className = "";
                y.textContent = "X";
                y.classList.add("square","X");
                var win = document.getElementById("status");        
                
                if ((button[0].textContent == "X") && (button[1].textContent == "X") && (button[2].textContent == "X")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! X is the Winner!";
                }
                else if((button[0].textContent == "X") && (button[3].textContent == "X") && (button[6].textContent == "X")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! X is the Winner!";
                }
                else if((button[6].textContent == "X") && (button[7].textContent == "X") && (button[8].textContent == "X")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! X is the Winner!";
                }
                else if((button[2].textContent == "X") && (button[5].textContent == "X") && (button[8].textContent == "X")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! X is the Winner!";
                }
                else if((button[0].textContent == "X") && (button[4].textContent == "X") && (button[8].textContent == "X")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! X is the Winner!";
                }
                else if((button[3].textContent == "X") && (button[4].textContent == "X") && (button[5].textContent == "X")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! X is the Winner!";
                }
                else if((button[2].textContent == "X") && (button[4].textContent == "X") && (button[6].textContent == "X")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! X is the Winner!";
                }
                else if((button[1].textContent == "X") && (button[4].textContent == "X") && (button[7].textContent == "X")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! X is the Winner!";
                }
                else{
                    var instructions = document.getElementById("status");
                    instructions.textContent = "Move your mouse over a square and click to play an X or an O.";
                }

           
            }
            else if ((previous == "X")){
                previous ="O";

                y.className = "";
                y.textContent = "O";
                y.classList.add("square","O");
                var win = document.getElementById("status");

                if ((button[0].textContent == "O") && (button[1].textContent == "O") && (button[2].textContent == "O")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! O is the Winner!";
                }
                else if((button[0].textContent == "O") && (button[3].textContent == "O") && (button[6].textContent == "O")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! O is the Winner!";
                }
                else if((button[6].textContent == "O") && (button[7].textContent == "O") && (button[8].textContent == "O")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! O is the Winner!";
                }
                else if((button[2].textContent == "O") && (button[5].textContent == "O") && (button[8].textContent == "O")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! O is the Winner!";
                }
                else if((button[0].textContent == "O") && (button[4].textContent == "O") && (button[8].textContent == "O")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! O is the Winner!";
                }
                else if((button[3].textContent == "O") && (button[4].textContent == "O") && (button[5].textContent == "O")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! O is the Winner!";
                }
                else if((button[2].textContent == "O") && (button[4].textContent == "O") && (button[6].textContent == "O")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! O is the Winner!";
                }
                else if((button[1].textContent == "O") && (button[4].textContent == "O") && (button[7].textContent == "O")){
                    win.className = "you-won";
                    win.textContent = "Congratulations! O is the Winner!";
                }
                else{
                    var instructions = document.getElementById("status");
                }
            
            }
        }

    }

    button.forEach(function(elem, index) {
        elem.addEventListener('mouseover', function(a){
            a.target.classList.add("hover");
        });

        elem.addEventListener('mouseout', function(a) {
            a.target.classList.remove('hover');
        });

    });

    button[0].addEventListener("click", function(){buttonPress(button[0])});
    button[1].addEventListener("click", function(){buttonPress(button[1])});
    button[2].addEventListener("click", function(){buttonPress(button[2])});
    button[3].addEventListener("click", function(){buttonPress(button[3])});
    button[4].addEventListener("click", function(){buttonPress(button[4])});
    button[5].addEventListener("click", function(){buttonPress(button[5])});
    button[6].addEventListener("click", function(){buttonPress(button[6])});
    button[7].addEventListener("click", function(){buttonPress(button[7])});
    button[8].addEventListener("click", function(){buttonPress(button[8])});
    
});

