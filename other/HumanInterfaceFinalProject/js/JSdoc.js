        function button1(){
            document.getElementById("btn").innerHTML = "Thank you for navigating this website. It was designed as part of a Human Interface course at the University of Puerto Rico - Mayag&#252;ez Campus. If you encounter any bugs or errors, please contact me via email: joseph.alvarez1@upr.edu";
        }
        function button2(){ 
            document.getElementById("btn").innerHTML = "";    
        }

    var timeOut; 
        function scrollToTop() { 
 	      if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){ 
 		     window.scrollBy(0,-50); 
 		     timeOut=setTimeout('scrollToTop()',10); 
 	          } 
 	      else clearTimeout(timeOut); 
        } 

//Human Interface FINAL PROJECT - Joseph Álvarez Cortés//