
$ (document).ready(function(){
    
    function Llamado(donde,quellevo,hacer){  
        var dir = new Array ("Mercurio","Venus","Tierra","Marte","Jupiter","Saturno","Urano","Neptuno");
        $.ajax({
            url: donde,
            data: quellevo,
            type: 'POST',
            dataType: 'html',            
            success: function (data) {
              hacer(data);  
            },            
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },
            
        });
    }  
 
      $("#mision").click(function(){        
        Llamado("Menu/mision.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
    
    
    
     $("#vision").click(function(){        
        Llamado("Menu/vision.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
   
      
    var planeta;
    $(".planeta").click(function(){        
            planeta= $(this).html();    
            var url= "Menu/carga.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#menus").html(data);
                $("#Elplaneta").html("Usted esta en el planeta "+" "+planeta);
                planetario(planeta);
            };
        Llamado(url,llevo,hacer);
    });
    
    function planetario(dequeplaneta){
        
        $("#menucara").click(function(){        
            planeta= $(this).html();    
            var url= "Planetas/"+dequeplaneta+"/caracteristicas.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#submenus").html(data);
                $("#Elplaneta").html("Usted esta en el planeta "+" "+planeta);
                planetario(planeta);
            };
        Llamado(url,llevo,hacer);
        });
        
        $("#menufo").click(function(){        
            planeta= $(this).html();    
            var url= "Planetas/"+dequeplaneta+"/foto.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#submenus").html(data);
                $("#Elplaneta").html("Usted esta en el planeta "+" "+planeta);
                planetario(planeta);
            };
        Llamado(url,llevo,hacer);
        });

        $("#menuvi").click(function(){        
            planeta= $(this).html();    
            var url= "Planetas/"+dequeplaneta+"/video.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#submenus").html(data);
                $("#Elplaneta").html("Usted esta en el planeta "+" "+planeta);
                planetario(planeta);
            };
        Llamado(url,llevo,hacer);
        });
        
             
        
             
    }
          
    
     
    
    
    
    
});
