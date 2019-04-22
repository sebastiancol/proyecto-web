 
 $ (document).ready(function(){
     
     function Llamado(donde,quellevo,hacer){   
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
    
    $("#Estudiantes").click(function(){        
            var url= "RDM/Estudiantes/index.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                Docentes();
            };
        Llamado(url,llevo,hacer);
    });
    
    function Docentes(){
        $("#ADDEstudiantes").click(function(){
             
            var url= "RDM/Estudiantes/addestudiantes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
    
    $("#DeleteEstudiantes").click(function(){
             
            var url= "RDM/Estudiantes/deleteestudiantes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
    
    $("#ChangeEstudiantes").click(function(){
             
            var url= "RDM/Estudiantes/changeestudiantes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
    
    $("#ListEstudiantes").click(function(){
             
            var url= "RDM/Estudiantes/listestudiantes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
     
    }
    function idEstudiante(){
        var id=o;
        var limite=localstorage.length;
        try{
           for(var i=0;i<limite;i++){
            var key= localstorage.key(i); 
            var objeto= JSON.parse(localstorage.getItem(key));
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
    function registarDocente (){
        $("#regdoc").validate({
           rules:{
              nomdoc:{
                  required:true,
                  rangelenght:[3,20]
              } ,
              apedoc:{
                  required:true,
                  rangelenght:[3,20]
              } ,
              ccdoc:{
                  required:true,
                  rangelenght:[6,10]
              } 
           }, 
           submitHandler:function(){
               var iddo=idDocente();
               var docente={
                 id:iddo(),
                 nom:$("#nomest").val(),  
                 ape:$("#apeest").val(),
                 cc:$("#ccest").val(),
                 type:"est"
               };
               localstorage.setItem("doc",iddo,JSON.stringify(docente));
               $("#nomdoc").val("");
               $("#apedoc").val("");
               $("#ccdoc").val("");
               alert("El estudiante"+docente.nom+"fue almacenado");
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
 
 
