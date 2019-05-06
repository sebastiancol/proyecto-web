 
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
    
    $("#Docentes").click(function(){        
            var url= "RDM/Administrador/opciones.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
                Docentes();
                
            };
        Llamado(url,llevo,hacer);
    });
    
    function Docentes(){
        $("#AddDocentes").click(function(){
             
            var url= "RDM/Administrador/adddocentes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
               registarDocente(); 
               listarDocente();
               eliminar();
               eliminarTodo();

            };
        Llamado(url,llevo,hacer);
    });
    
    $("#ListDocentes").click(function(){
             
            var url= "RDM/Administrador/listadocentes.html";
            var llevo= "acceso=true";
            var hacer=function(data){
                $("#rdm").html(data);
               registarDocente(); 
               listarDocente();
               eliminar();
               eliminarTodo();

            };
        Llamado(url,llevo,hacer);
    });
    
    
     
    }
    
    function idDocente(){
        var id=0;
        var limite=localstorage.length;
        try{
           for(var i=0;i<limite;i++){
            var key= localstorage.key(i); 
            var obj= JSON.parse(localstorage.getItem(key));
            if(obj.type=="doc"){
               if(obj.id>id){
                  id=obj.id;
               } 
            }
        } 
        }catch(e){
            console.error("metodo idDocente presenta falla");
        }
        
        return (id+1);
    }
    
    function validacc (cc,type){
        var permiso= true;
        var limite = localstorage.key(i)
        try{
           for(var i=0;i<limite;i++){
            var key= localstorage.key(i); 
            var obj= JSON.parse(localstorage.getItem(key));
            if(obj.type==type){
               if(obj.cc>cc){
                  return false;
               } 
            }
        } 
        }catch(e){
            console.error("metodo idDocente presenta falla");
        }
        
        return permiso;
    }
   
   
    function registarDocente (){
        $("#regdoc").validate({
           rules:{
              nomdoc:{
                  required:true,
                  range: [3,20],
                  rangelenght:[3,20]
              } ,
              apedoc:{
                  required:true,
                  range: [3,20],
                  rangelenght:[3,20]
              } ,
              ccdoc:{
                  required:true,
                  range: [3,9],
                  rangelenght:[6,10],
                  digits:true
              } 
           }, 
           submitHandler:function(){
               if(validacc($("#ccdoc").val(),"doc")){
               var iddo=idDocente();
               var docente={
                 id:iddo,
                 nom: $("#nomdoc").val(),  
                 ape: $("#apedoc").val(),
                 cc: $("#ccdoc").val(),
                 type:"doc"
               };
               localstorage.setItem("doc",iddo,JSON.stringify(docente));
               $("#nomdoc").val("");
               $("#apedoc").val("");
               $("#ccdoc").val("");
               alert("El docente "+docente.nom+"fue almacenado");
            }else{
                alert("El docente con la "+$("#ccdoc").val("")+"ya existe en la BD");
            }   
           }
        });
    }
    
    function listarDocente (){
       localstorage.setItem("doc",iddo,JSON.stringify(docente));
               $("#nomdoc").val("");
               $("#apedoc").val("");
               $("#ccdoc").val("");
               alert("El docente "+docente.nom+"estaba almacenado");
    }
    
    function eliminar(clave) {
        if (confirm('Está Seguro?')) {
            localStorage.removeItem(clave);
            mostrar();
        }
    }
    
    function eliminarTodo() {
        if (confirm('Está Seguro?')) {
            localStorage.clear();
            mostrar();
        }
}
    
});
 
 
