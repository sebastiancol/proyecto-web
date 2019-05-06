 
 $(document).ready(function(){
     
     function Llamado(donde,quellevo,hacer){   
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
    
    $("#Estudiantes").click(function(){        
            var url= "RDM/Administrador/opciones2.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                Estudiantes();
            };
        Llamado(url,llevo,hacer);
    });
    
    function Estudiantes(){
        $("#AddEstudiantes").click(function(){
             
            var url= "RDM/Administrador/addestudiante.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
    
    
    $("#ListEstudiantes").click(function(){
             
            var url= "RDM/Administrador/listestudiantes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
     
    }
    function idEstudiante(){
        var id=o;
        var limite2=localstorage.length;
        try{
           for(var i=0;i<limite2;i++){
            var key= localstorage.key(i); 
            var objeto= JSON.parse(localstorage.setItem(key));
            if(obj.type=="est"){
               if(obj.id>id){
                  id=obj;
               } 
            }
        } 
        }catch(e){
            console.error("metodo idEstudiante presenta falla");
        }
        
        return id;
    }
    function registarEstudiante (){
        $("#regdoc").validate({
           rules:{
              nomest:{
                  required:true,
                  rangelenght:[3,20]
              } ,
              apeest:{
                  required:true,
                  rangelenght:[3,20]
              } ,
              ccest:{
                  required:true,
                  rangelenght:[6,10]
              } 
           }, 
           submitHandler:function(){
               var iddo=idDocente();
               var estudiante={
                 id:iddo(),
                 nom:$("#nomest").val(),  
                 ape:$("#apeest").val(),
                 cc:$("#ccest").val(),
                 type:"est"
               };
               localstorage.setItem("est",iddo,JSON.stringify(estudiante));
               $("#nomest").val("");
               $("#apeest").val("");
               $("#ccest").val("");
               alert("El estudiante"+estudiante.nom+"fue almacenado");
           }
        });
    }
    
    function listarEstudiante (){
        $("#regdoc").validate({
           rules:{
              nomest:{
                  required:true,
                  rangelenght:[3,20]
              } ,
              apeest:{
                  required:true,
                  rangelenght:[3,20]
              } ,
              ccest:{
                  required:true,
                  rangelenght:[6,10]
              } 
           }, 
           submitHandler:function(){
               var iddo=idEstudiante();
               var estudiante={
                 id:iddo(),
                 nom:$("#nomest").val(),  
                 ape:$("#apeest").val(),
                 cc:$("#ccest").val(),
                 type:"doc"
               };
               localstorage.getItem("doc",iddo,JSON.stringify(estudiante));
               $("#nomest").val("");
               $("#apeest").val("");
               $("#ccdest").val("");
               alert("El estudiante"+estudiante.nom+"fue almacenado");
           }
        });
    }
    
});
 
 
