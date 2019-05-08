
$ (document).ready(function(){
    
    function Llamado(donde,quellevo,hacer){  
        var dir = new Array ("Mercurio","Venus","Tierra","Marte","Jupiter","Saturno","Urano","Neptuno");
        $.ajax({
            url: donde,
            data: quellevo,
            type: 'GET',
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
    /*
    $("#mercurio").click(function(){        
        Llamado("html/informacion/mercurio.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
    
    $("#venus").click(function(){        
        Llamado("html/informacion/venus.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
    
    $("#tierra").click(function(){        
        Llamado("html/informacion/tierra.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
    $("#marte").click(function(){        
        Llamado("html/informacion/marte.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
    
    $("#jupiter").click(function(){        
        Llamado("html/informacion/jupiter.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
    $("#saturno").click(function(){        
        Llamado("html/informacion/saturno.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
    $("#urano").click(function(){        
        Llamado("html/informacion/urano.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
    
    $("#neptuno").click(function(){        
        Llamado("html/informacion/neptuno.html","acceso=true",function(data){
            $("#menus").html(data);
        });
    });
    */
      
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
                $("#menus").html(data);
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
                $("#menus").html(data);
                $("#Elplaneta").html("Usted esta en el planeta "+" "+planeta);
                planetario(planeta);
            };
        Llamado(url,llevo,hacer);
        });
        
        /*
        $("#menufo").click(function(){        
        Llamado("Planetas/"+dequeplaneta+"/foto.html","acceso=true",function(data){
            $("#menus").html(data);
        });
        });*/
        
        $("#menuvi").click(function(){        
        Llamado("Planetas/"+dequeplaneta+"/video.html","acceso=true",function(data){
            $("#menus").html(data);
        });
        });
             
    }
          
    
     
    
    
    
    
});