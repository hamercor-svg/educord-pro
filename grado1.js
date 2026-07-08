
const firebaseConfig = {
  apiKey: "AIzaSyDp2YE0Y3ef6YzC7_eZLlVav1XKxUTIboY",
  authDomain: "educord-pro.firebaseapp.com",
  projectId: "educord-pro",
  storageBucket: "educord-pro.firebasestorage.app",
  messagingSenderId: "610612653120",
  appId: "1:610612653120:web:61e7b1fd1a3b86d27643a5",
  measurementId: "G-Y6WY7CQJCW"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

/* ─────────────────────────────────────────── */

    // 1. NAVEGACIÓN DEL MENÚ LATERAL
    function verSeccion(id, botonContexto) {
      // Ocultar todas las secciones
      document.querySelectorAll('.module-section').forEach(sec => sec.classList.remove('active'));
      // Quitar clase active de todos los botones
      document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
      
      // Mostrar la sección seleccionada y marcar botón
      document.getElementById('sec-' + id).classList.add('active');
      botonContexto.classList.add('active');
    }

    // 2. RECUPERAR DATOS DEL USUARIO
    // Al cargar la página, buscamos en la memoria quién inició sesión
    window.onload = function() {
      const sesionString = localStorage.getItem('sesion_activa');
      
      if (sesionString) {
        // Convertimos el texto a un objeto JavaScript
        const usuario = JSON.parse(sesionString);
        
        // Inyectamos los datos en el HTML
        document.getElementById('display-name').innerText = `${usuario.nombre.toUpperCase()} ${usuario.apellido.toUpperCase()}`;
        document.getElementById('prof-nombre').innerText = `${usuario.nombre} ${usuario.apellido}`;
        document.getElementById('prof-email').innerText = usuario.email;
        document.getElementById('prof-grado').innerText = `${usuario.grado}º de Secundaria`;
        document.getElementById("dashboard-user").innerText = usuario.nombre;
        document.getElementById("student-fullname").textContent=`${usuario.nombre} ${usuario.apellido}`;
        document.getElementById("student-grade").textContent=`${usuario.grado}° de Secundaria`;
        document.getElementById("student-avatar").textContent=usuario.nombre.charAt(0).toUpperCase();
        document.getElementById("user-avatar").textContent=usuario.nombre.charAt(0).toUpperCase();
        typeof iniciarSincronizacionCursos==='function' && iniciarSincronizacionCursos(usuario.grado);
      } else {
        // Si no hay sesión, puedes redirigirlo al inicio por seguridad
        // window.location.href = "index.html";
        document.getElementById('display-name').innerText = "VISITANTE";
      }
    };

    // 3. FUNCIÓN PARA CERRAR SESIÓN
    function cerrarSesion() {
      if(confirm("¿Estás seguro de que deseas salir del aula virtual?")) {
        localStorage.removeItem('sesion_activa'); // Borramos la sesión
        window.location.href = "index.html"; // Regresamos a la página principal
      }
    }

const opciones = {
weekday:'long',
day:'numeric',
month:'long',
year:'numeric'
};
const hoy = new Date();
const fecha =
hoy.toLocaleDateString(
'es-PE',
opciones
);
const fechaDashboard =
document.getElementById(
'fecha-dashboard'
);
if(fechaDashboard){
fechaDashboard.innerText =
fecha;
}
function actualizarHora(){
const ahora=new Date();
const hora=ahora.toLocaleTimeString("es-PE");
const reloj=document.getElementById("dashboard-hora");
if(reloj){
reloj.textContent=hora;
}
}
setInterval(actualizarHora,1000);
actualizarHora();

const saludo=document.getElementById("saludo-dashboard");
if(saludo){
const h=new Date().getHours();
if(h<12){
saludo.textContent="🌅 Buenos días";
}else if(h<18){
saludo.textContent="☀️ Buenas tardes";
}else{
saludo.textContent="🌙 Buenas noches";
}
}
function toggleSidebar(){
document.body.classList.toggle("sidebar-close");
}
function abrirCurso(nombre,icono){
localStorage.setItem("curso_actual",nombre);
localStorage.setItem("curso_icono",icono);
document.querySelector(".areas-grid").style.display="none";
document.getElementById("curso-view").style.display="block";
document.getElementById("curso-nombre").textContent=nombre;
document.getElementById("curso-icono").textContent=icono;
typeof mostrarTab==='function' && mostrarTab("material",document.querySelector(".curso-tab"));
window.scrollTo({
top:0,
behavior:"smooth"
});
}
const cursoGuardado=localStorage.getItem("curso_actual");
const iconoGuardado=localStorage.getItem("curso_icono");
if(cursoGuardado){
const nombre=document.getElementById("curso-nombre");
const icono=document.getElementById("curso-icono");
if(nombre)nombre.textContent=cursoGuardado;
if(icono)icono.textContent=iconoGuardado||"📚";
}
/* [auditoría] Definición obsoleta de abrirPDF() eliminada — la versión activa está más abajo. */

/* [auditoría] Definición obsoleta de abrirVideo() eliminada — la versión activa está más abajo. */

function cerrarCurso(){
document.getElementById("curso-view").style.display="none";
document.querySelector(".areas-grid").style.display="grid";
window.scrollTo({
top:0,
behavior:"smooth"
});
}

/* [auditoría] Bloque huérfano `contenido.innerHTML=...` eliminado (variable `contenido` no definida). */
function abrirPDF(nombre,url){
document.getElementById("visor-modal").style.display="flex";
document.getElementById("visor-titulo").textContent=nombre;
document.getElementById("visor-contenido").innerHTML=`<iframe src="${url}"></iframe>`;
}

function abrirVideo(nombre,url){
document.getElementById("visor-modal").style.display="flex";
document.getElementById("visor-titulo").textContent=nombre;
document.getElementById("visor-contenido").innerHTML=`<video controls autoplay><source src="${url}"></video>`;
}

function cerrarVisor(){
document.getElementById("visor-modal").style.display="none";
document.getElementById("visor-contenido").innerHTML="";
}
function cargarMateriales(curso){
const contenedor=document.getElementById("tab-material");
db.collection("cursos").doc(curso).collection("materiales").orderBy("fecha","desc").onSnapshot(snapshot=>{
contenedor.innerHTML="";
if(snapshot.empty){
contenedor.innerHTML='<div class="empty-state"><h3>📂 No hay materiales publicados</h3><p>El docente aún no ha publicado contenido.</p></div>';
return;
}
snapshot.forEach(doc=>{
const m=doc.data();
contenedor.innerHTML+=`
<div class="timeline-card">
<div class="timeline-icon">${iconoMaterial(m.tipo)}</div>
<div class="timeline-content">
<h3>${m.titulo}</h3>
<p>${m.descripcion}</p>
<button class="timeline-btn" onclick="window.open('${m.url}','_blank')">Abrir</button>
</div>
</div>
`;
});
});
}
function iconoMaterial(tipo){
if(tipo==="pdf")return"📄";
if(tipo==="video")return"🎥";
if(tipo==="ppt")return"📊";
if(tipo==="word")return"📝";
if(tipo==="excel")return"📗";
return"📚";
}
  
