 
 $(document).ready(function(){
     
     function Llamado(donde, quellevo, hacer){
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
            }
        });
     }
    
    $("#Administrador").click(function(){        
            let url= "RDM/Administrador/menuadmin.html";
            let llevo= "acceso=true";
            let hacer = function(data){
                $("#rdm").html(data);
            };
        Llamado(url,llevo,hacer);
    });


    
});
 
 
