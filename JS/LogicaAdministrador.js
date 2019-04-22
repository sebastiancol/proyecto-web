 
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
    
    $("#Administrador").click(function(){        
            var url= "RDM/Administrador/menuadmin.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                Administrador();
            };
        Llamado(url,llevo,hacer);
    });
    
    function Administrador(){
        $("#ADDDocentes").click(function(){
             
            var url= "RDM/Docentes/adddocentes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
    
    $("#DeleteDocentes").click(function(){
             
            var url= "RDM/Docentes/deletedocentes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
    
    $("#ChangeDocentes").click(function(){
             
            var url= "RDM/Docentes/changedocentes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
    
    $("#ListDocentes").click(function(){
             
            var url= "RDM/Docentes/listadocentes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                
            };
        Llamado(url,llevo,hacer);
    });
     
    }
    function idDocente(){
        var id=o;
        var limite=localstorage.length;
        try{
           for(var i=0;i<limite;i++){
            var key= localstorage.key(i); 
            var objeto= JSON.parse(localstorage.getItem(key));
            if(obj.type=="doc"){
               if(obj.id>id){
                  id=obj;
               } 
            }
        } 
        }catch(e){
            console.error("metodo idDocente presenta falla");
        }
        
        return id;
    }
    function registarDocente (){
        $("#regadmin").validate({
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
                 nom: $("#nomdoc").val(),  
                 ape: $("#apedoc").val(),
                 cc: $("#ccdoc").val(),
                 type:"doc"
               };
               localstorage.setItem("doc",iddo,JSON.stringify(docente));
               $("#nomdoc").val("");
               $("#apedoc").val("");
               $("#ccdoc").val("");
               alert("El docente"+docente.nom+"fue almacenado");
           }
        });
    }
    
    function listarDocente (){
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
                 nom:$("#nomdoc").val(),  
                 ape:$("#apedoc").val(),
                 cc:$("#ccdoc").val(),
                 type:"doc"
               };
               localstorage.getItem("doc",iddo,JSON.stringify(docente));
               $("#nomdoc").val("");
               $("#apedoc").val("");
               $("#ccdoc").val("");
               alert("El docente"+docente.nom+"fue almacenado");
           }
        });
    }
    
});
 
 
