$ (document).ready(function(){

    function Llamado(donde, quellevo, hacer){
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
            }
        });
    }

    //Menú administrador
    //----Crear estudiante
    $(document).on("click", "#crear_est", function () {
        let url = "RDM/Estudiantes/addestudiante.html";
        let llevo = "acceso=true";
        let hacer = function(data){
            $("#subContenido").html(data);
            administrador("crear estudiante");

        };
        Llamado(url,llevo,hacer);
    });
    //---Listar estudiantes
    $(document).on("click", ".estudiantes", function () {
        let url = "RDM/Estudiantes/listaEstudiantes.html";
        let llevo = "acceso=true";
        let hacer = function(data){
            $("#rdm").html(data);
            administrador("listar estudiantes");
        };
        Llamado(url,llevo,hacer);
    });
    //-----Menú adminstrador

    //Operaciones
    function administrador(operacion, estudiante) {

        switch (operacion) {
            case "crear estudiante":
                registrarEstudiante(false);
                $("#titulo_form").html("Formulario de Registro");
                $("#btn_estudiante").html("GUARDAR");
                break;
            case "editar estudiante":
                registrarEstudiante(true, estudiante);
                $("#titulo_form").html("Formulario de actualización");
                $("#btn_estudiante").html("ACTUALIZAR");
                break;
            case "listar estudiantes":
                listarEstudiantes();
                break;
            default:
                eliminarEstudiante(estudiante);
                break;
        }
    }

    //Operaciones Estudiante
    function registrarEstudiante(editar, estudianteExistente) {

        let idEst = "";
        let nombre = $("#nomest");
        let apellido = $("#apeest");
        let cedula = $("#ccest");
        let mensaje = "";

        if(editar){

            idEst = estudianteExistente.id;
            nombre.val(estudianteExistente.nom);
            apellido.val(estudianteExistente.ape);
            cedula.val(estudianteExistente.cc);
            mensaje = "fue editado";

        }else{
            idEst = generarId();
            mensaje = "fue almacenado";
        }

        $("#reg_est").validate({
            rules:{
                nomest:{
                    required: true,
                    rangelength: [3, 20]
                },
                apeest:{
                    required:true,
                    rangelength: [3, 20]
                },
                ccest:{
                    required: true,
                    rangelength: [6, 12],
                    number: true
                }
            },
            submitHandler:function(){

                let estudiante = {
                    id: idEst,
                    nom: nombre.val(),
                    ape: apellido.val(),
                    cc: cedula.val(),
                    type: "est"
                };
                localStorage.setItem("est" + idEst, JSON.stringify(estudiante));
                nombre.val("");
                apellido.val("");
                cedula.val("");
                alert("El estudiante "+ " "+ estudiante.nom +" "+ mensaje);
                Llamado("RDM/Estudiantes/listaEstudiantes.html","acceso=true",function (data) {
                    $("#rdm").html(data);
                    administrador("listar estudiantes");
                });
            }
        });
    }

    function buscarEstudiante(id) { //Busca un estudiante dentro del localStorage
        let estudiante = {};
        let key = "";

        for(let i = 0; i < localStorage.length; i++){
            key = localStorage.key(i);
            let obj = JSON.parse(localStorage.getItem(key));
            if(key === "est"+id){ //Se debe buscar por la key
                estudiante = obj;
            }
        }
        return {estudiante, key};
    }

    function listarEstudiantes() {
        let datos_tabla = "";
        let estudiantes = [];
        //Guardar todos los estudiantes en un arreglo
        for(let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let obj = JSON.parse(localStorage.getItem(key));
            if(obj.type === "est"){
                estudiantes.push(obj);//Guarda los objetos de tipo estudiante
            }
        }

        //Pintar los estudiantes en la tabla
        for(let j = 0; j < estudiantes.length; j++){
            datos_tabla += `
                <tr idEst="${estudiantes[j].id /*En cada fila se guarda el id del estudiante*/}">
                    <td>${estudiantes[j].nom}</td>
                    <td>${estudiantes[j].ape}</td>
                    <td>${estudiantes[j].cc}</td>
                    <td>
                        <button class="btn btn-success editar">Editar</button>
                    </td>
                    <td>
                        <button class="btn btn-danger eliminar">Eliminar</button>
                    </td>
                </tr>
             `;
        }

        $("#lista_est").html(datos_tabla);

        /*Como los botones son generados en el html por JS no se pude usar el atributo id sino una clase,
        * ademas es necesario que cada evento sea asignado al mismo tiempo de su creacion si no es asi
        * no se ejecutaria el evento click
        * */

        $(".editar").click(function () {
            //Obtener el id del estudiante que se quiere editar
            let id = $(this).parent().parent().attr("idEst");//dos veces parent() por que el id se encuentra en la etiqueta <tr>
            Llamado("RDM/Estudiantes/addestudiante.html","acceso=true",function (data) {
                $("#subContenido").html(data);
                administrador("editar estudiante", buscarEstudiante(id).estudiante);
            });
        });

        $(".eliminar").click(function () {
            //Obtener el id del estudiante que se quiere editar
            let id = $(this).parent().parent().attr("idEst");//dos veces parent() por que el id se encuentra en la etiqueta <tr>
            if(confirm("¿Desea eliminar el estudiantes?")){
                Llamado("RDM/Estudiantes/listaEstudiantes.html","acceso=true",function (data) {
                    $("#rdm").html(data);
                    administrador("borrar estudiante", buscarEstudiante(id).key);
                });
            }
        });

    }

    function eliminarEstudiante(key) {
        localStorage.removeItem(key);
        listarEstudiantes();
    }


    function generarId(){ //Sirve para generar id del estudiante
        let id = 0;
        let limite = localStorage.length;
        try{
            for(let i = 0 ; i < limite; i++){
                let key = localStorage.key(i);
                let obj = JSON.parse(localStorage.getItem(key));
                if(obj.type === "est"){
                    if(obj.id > id){
                        id = obj.id;
                    }
                }
            }
        }catch(e){
            console.error("metodo generarId presenta falla");
        }

        return id+1;
    }

});
