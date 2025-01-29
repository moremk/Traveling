
    function drop() {
        const element = document.getElementById('id0');
        
    
        if (element) {
            
            if (element.style.display === "none" || element.style.display === "") {
                element.style.display = "block"; 
            } else {
                element.style.display = "none"; 
            }
        }
    }
