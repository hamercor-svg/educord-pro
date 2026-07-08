   (function(){
      // Pega tu Public Key exacta entre las comillas
      emailjs.init("IrZtwF1_a_TZR30wm");
   })();

/* ─────────────────────────────────────────── */

  // Tu configuración de Firebase adaptada correctamente para la base de datos
  const firebaseConfig = {
    apiKey: "AIzaSyDp2YE0Y3ef6YzC7_eZLlVav1XKxUTIboY",
    authDomain: "educord-pro.firebaseapp.com",
    projectId: "educord-pro",
    storageBucket: "educord-pro.firebasestorage.app",
    messagingSenderId: "610612653120",
    appId: "1:610612653120:web:61e7b1fd1a3b86d27643a5",
    measurementId: "G-Y6WY7CQJCW"
  };

  // Inicializar Firebase en modo compatibilidad para habilitar el comando "db"
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

/* ─────────────────────────────────────────── */

/* ══════════════ pop up ══════════════ */
  function cerrarPopup() {
    document.getElementById("popup-inicio").style.display = "none";
  }

  // Mostrar siempre al recargar
  window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("popup-inicio").style.display = "flex";
  });


/* ══════════════ SLIDER AUTOMÁTICO ══════════════ */

const imagen = document.getElementById("imagenColegio");
const imagenes = [
  "../EduCORD Pro/img/imagen1.png",
  "../EduCORD Pro/img/imagen2.png",
  "../EduCORD Pro/img/imagen3.png",
];
let contador = 0;
function cambiarImagen() {
  imagen.style.opacity = 0;
  setTimeout(() => {
    contador = (contador + 1) % imagenes.length;
    imagen.src = imagenes[contador];
    imagen.style.opacity = 1;
  }, 900);
}
/* cambia cada 3 segundos */
setInterval(cambiarImagen, 3000);

  /* ── AREAS DATA ── */
  const AREAS = {
    'Matemática':      { icon:'📐', bg:'rgba(59,130,246,.15)',  desc:'Álgebra, geometría, trigonometría, estadística y resolución de problemas con ejercicios prácticos.', recursos:42 },
    'Comunicación':    { icon:'📖', bg:'rgba(6,182,212,.15)',   desc:'Comprensión lectora, producción de textos, literatura peruana y universal, y gramática.', recursos:35 },
    'Ciencias':        { icon:'🔬', bg:'rgba(16,185,129,.15)',  desc:'Biología, química, física y ciencia y tecnología con experimentos virtuales y explicaciones.', recursos:38 },
    'Historia':        { icon:'🏛️', bg:'rgba(245,158,11,.15)',  desc:'Historia del Perú, historia universal, geografía y formación ciudadana con líneas de tiempo.', recursos:29 },
    'Inglés':          { icon:'🌐', bg:'rgba(139,92,246,.15)',  desc:'Gramática, vocabulario, listening y producción oral en inglés con ejercicios interactivos.', recursos:31 },
    'Arte':            { icon:'🎨', bg:'rgba(236,72,153,.15)',  desc:'Artes visuales, música, teatro y danza con proyectos creativos y apreciación artística.', recursos:18 },
    'Tecnología':      { icon:'💻', bg:'rgba(59,130,246,.15)',  desc:'Informática, programación básica, robótica y uso responsable de la tecnología digital.', recursos:24 },
    'Educación Física':{ icon:'⚽', bg:'rgba(16,185,129,.15)',  desc:'Actividad física, salud y bienestar, deportes y hábitos saludables para el desarrollo integral.', recursos:14 },
  };

  function cargarAreas() {
  const contenedor = document.getElementById('grid-areas');
  contenedor.innerHTML = ""; // Limpiamos antes de cargar

  areasCurriculares.forEach(area => {
    const card = document.createElement('div');
    card.className = 'area-card';
    card.innerHTML = `
      <span class="icono">${area.icono}</span>
      <h3>${area.nombre}</h3>
      <p style="color: var(--muted); font-size: 0.8rem; margin-top: 10px;">Ver lecciones</p>
    `;
    
    // Al hacer clic, podrías redirigir a una página de lecciones
    card.onclick = () => alert("Abriendo lecciones de: " + area.nombre);
    
    contenedor.appendChild(card);
  });
}

// Llamar a la función al cargar la página
window.addEventListener("DOMContentLoaded", function () {
  // ... tu lógica actual de cargar sesión ...
  cargarAreas();
});

/* ── DATA: CURSOS POR GRADO ── */
  const CURSOS_GRADOS = {
    '1er Grado': [
      { icon:'📐', nombre:'Matemática', desc:'Resolución de problemas con números enteros, fracciones y geometría básica.', bg:'rgba(59,130,246,.15)' },
      { icon:'📖', nombre:'Comunicación', desc:'Estrategias de lectura, comprensión de textos y redacción inicial.', bg:'rgba(6,182,212,.15)' },
      { icon:'🔬', nombre:'Ciencia y Tecnología', desc:'Introducción a la metodología científica y estudio de los ecosistemas.', bg:'rgba(16,185,129,.15)' },
      { icon:'🏛️', nombre:'Ciencias Sociales', desc:'Historia del Perú antiguo y fundamentos de geografía general.', bg:'rgba(245,158,11,.15)' },
      { icon:'🌐', nombre:'Inglés', desc:'Vocabulario fundamental, saludos y construcción de oraciones simples.', bg:'rgba(139,92,246,.15)' },
      { icon:'🎨', nombre:'Arte y Cultura', desc:'Exploración de lenguajes artísticos y apreciación visual.', bg:'rgba(236,72,153,.15)' },
      { icon:'⚽', nombre:'Educación Física', desc:'Desarrollo psicomotriz, coordinación y hábitos de vida saludable.', bg:'rgba(59,130,246,.15)' },
      { icon:'💻', nombre:'Educación para el Trabajo', desc:'Uso de herramientas digitales básicas y ofimática.', bg:'rgba(6,182,212,.15)' },
      { icon:'🤝', nombre:'DPCC', desc:'Autoconocimiento, identidad y principios de convivencia escolar.', bg:'rgba(16,185,129,.15)' },
      { icon:'🌱', nombre:'Tutoría', desc:'Acompañamiento socioafectivo y adaptación a la secundaria.', bg:'rgba(245,158,11,.15)' },
      { icon:'🕊️', nombre:'Educación Religiosa', desc:'Formación en valores y principios de la fe.', bg:'rgba(139,92,246,.15)' }
    ],
    '2do Grado': [
      { icon:'📐', nombre:'Matemática', desc:'Introducción al álgebra, proporciones y estadística descriptiva.', bg:'rgba(59,130,246,.15)' },
      { icon:'📖', nombre:'Comunicación', desc:'Producción de textos literarios y no literarios, y gramática.', bg:'rgba(6,182,212,.15)' },
      { icon:'🔬', nombre:'Ciencia y Tecnología', desc:'Estudio de la materia, la energía y el cuerpo humano.', bg:'rgba(16,185,129,.15)' },
      { icon:'🏛️', nombre:'Ciencias Sociales', desc:'Historia del virreinato, relieve y recursos naturales.', bg:'rgba(245,158,11,.15)' },
      { icon:'🌐', nombre:'Inglés', desc:'Tiempos verbales en presente y pasado, y comprensión auditiva.', bg:'rgba(139,92,246,.15)' },
      { icon:'🎨', nombre:'Arte y Cultura', desc:'Técnicas de dibujo, pintura y expresión corporal.', bg:'rgba(236,72,153,.15)' },
      { icon:'⚽', nombre:'Educación Física', desc:'Fundamentos deportivos y trabajo en equipo.', bg:'rgba(59,130,246,.15)' },
      { icon:'💻', nombre:'Educación para el Trabajo', desc:'Introducción al diseño gráfico y emprendimiento.', bg:'rgba(6,182,212,.15)' },
      { icon:'🤝', nombre:'DPCC', desc:'Derechos humanos, participación ciudadana y empatía.', bg:'rgba(16,185,129,.15)' },
      { icon:'🌱', nombre:'Tutoría', desc:'Prevención de riesgos y fortalecimiento de la autoestima.', bg:'rgba(245,158,11,.15)' },
      { icon:'🕊️', nombre:'Educación Religiosa', desc:'Análisis de textos sagrados y compromiso social.', bg:'rgba(139,92,246,.15)' }
    ],
    '3er Grado': [
      { icon:'📐', nombre:'Matemática', desc:'Geometría plana, polinomios y funciones lineales.', bg:'rgba(59,130,246,.15)' },
      { icon:'📖', nombre:'Comunicación', desc:'Análisis de literatura hispanoamericana y oratoria.', bg:'rgba(6,182,212,.15)' },
      { icon:'🔬', nombre:'Ciencia y Tecnología', desc:'Química inorgánica básica, física elemental y biología celular.', bg:'rgba(16,185,129,.15)' },
      { icon:'🏛️', nombre:'Ciencias Sociales', desc:'Historia del Perú republicano y geografía económica.', bg:'rgba(245,158,11,.15)' },
      { icon:'🌐', nombre:'Inglés', desc:'Conversación fluida, tiempos continuos y redacción de correos.', bg:'rgba(139,92,246,.15)' },
      { icon:'🎨', nombre:'Arte y Cultura', desc:'Historia del arte peruano e iniciación musical.', bg:'rgba(236,72,153,.15)' },
      { icon:'⚽', nombre:'Educación Física', desc:'Tácticas deportivas y acondicionamiento físico.', bg:'rgba(59,130,246,.15)' },
      { icon:'💻', nombre:'Educación para el Trabajo', desc:'Programación básica y desarrollo de proyectos web.', bg:'rgba(6,182,212,.15)' },
      { icon:'🤝', nombre:'DPCC', desc:'Estado de derecho, democracia y resolución de conflictos.', bg:'rgba(16,185,129,.15)' },
      { icon:'🌱', nombre:'Tutoría', desc:'Toma de decisiones y orientación vocacional temprana.', bg:'rgba(245,158,11,.15)' },
      { icon:'🕊️', nombre:'Educación Religiosa', desc:'Historia de la Iglesia y moral cristiana.', bg:'rgba(139,92,246,.15)' }
    ],
    '4to Grado': [
      { icon:'📐', nombre:'Matemática', desc:'Trigonometría, logaritmos y geometría del espacio.', bg:'rgba(59,130,246,.15)' },
      { icon:'📖', nombre:'Comunicación', desc:'Literatura universal, ensayos argumentativos y debate.', bg:'rgba(6,182,212,.15)' },
      { icon:'🔬', nombre:'Ciencia y Tecnología', desc:'Leyes de Newton, energía, y química orgánica.', bg:'rgba(16,185,129,.15)' },
      { icon:'🏛️', nombre:'Ciencias Sociales', desc:'Historia mundial contemporánea y geopolítica.', bg:'rgba(245,158,11,.15)' },
      { icon:'🌐', nombre:'Inglés', desc:'Preparación para certificaciones, phrasal verbs y modales.', bg:'rgba(139,92,246,.15)' },
      { icon:'🎨', nombre:'Arte y Cultura', desc:'Producción audiovisual y artes escénicas.', bg:'rgba(236,72,153,.15)' },
      { icon:'⚽', nombre:'Educación Física', desc:'Organización de torneos y biomecánica deportiva.', bg:'rgba(59,130,246,.15)' },
      { icon:'💻', nombre:'Educación para el Trabajo', desc:'Gestión empresarial, marketing digital y bases de datos.', bg:'rgba(6,182,212,.15)' },
      { icon:'🤝',                         nombre:'DPCC', desc:'Ciudadanía global, ética y problemáticas sociales actuales.', bg:'rgba(16,185,129,.15)' },
      { icon:'🌱', nombre:'Tutoría', desc:'Proyecto de vida, liderazgo y sexualidad responsable.', bg:'rgba(245,158,11,.15)' },
      { icon:'🕊️', nombre:'Educación Religiosa', desc:'Diálogo interreligioso y doctrina social.', bg:'rgba(139,92,246,.15)' }
    ],
    '5to Grado': [
      { icon:'📐', nombre:'Matemática', desc:'Repaso preuniversitario, cálculo básico y razonamiento matemático.', bg:'rgba(59,130,246,.15)' },
      { icon:'📖', nombre:'Comunicación', desc:'Razonamiento verbal, lectura crítica y análisis de textos científicos.', bg:'rgba(6,182,212,.15)' },
      { icon:'🔬', nombre:'Ciencia y Tecnología', desc:'Física moderna, bioquímica y simulacros de admisión.', bg:'rgba(16,185,129,.15)' },
      { icon:'🏛️', nombre:'Ciencias Sociales', desc:'Economía, actualidad nacional e internacional.', bg:'rgba(245,158,11,.15)' },
      { icon:'🌐', nombre:'Inglés', desc:'Inglés técnico, preparación para entrevistas y debates en inglés.', bg:'rgba(139,92,246,.15)' },
      { icon:'🎨', nombre:'Arte y Cultura', desc:'Proyecto artístico integral y curaduría de exposiciones.', bg:'rgba(236,72,153,.15)' },
      { icon:'⚽', nombre:'Educación Física', desc:'Entrenamiento personalizado y primeros auxilios.', bg:'rgba(59,130,246,.15)' },
      { icon:'💻', nombre:'Educación para el Trabajo', desc:'Formulación de proyectos de innovación tecnológica.', bg:'rgba(6,182,212,.15)' },
      { icon:'🤝', nombre:'DPCC', desc:'Desafíos del Perú en el siglo XXI e inserción ciudadana.', bg:'rgba(16,185,129,.15)' },
      { icon:'🌱', nombre:'Tutoría', desc:'Orientación vocacional definitiva y transición a la educación superior.', bg:'rgba(245,158,11,.15)' },
      { icon:'🕊️', nombre:'Educación Religiosa', desc:'Sentido de la vida y ética profesional cristiana.', bg:'rgba(139,92,246,.15)' }
    ]
  };

/* ── SECTION NAVIGATION ── */
  function showSection(id, filter) {
    document.querySelectorAll('.section-page').forEach(s => s.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');

    document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active-link'));
    const navEl = document.getElementById('nav-' + id);
    if (navEl) navEl.classList.add('active-link');

    closeAllDD();

    if (id === 'areas') renderAreas(filter);
    if (id === 'grados') renderGrados(filter);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setupReveal();
  }

  /* ── RENDER GRADOS DINÁMICO ── */
  function renderGrados(filter) {
    const containerCursos = document.getElementById('grados-cursos-dinamicos');
    const containerOriginal = document.getElementById('grados-grid-original');
    const title = document.getElementById('grados-title');
    const sub = document.getElementById('grados-sub');
    const tag = document.getElementById('grados-tag');

    if (filter && CURSOS_GRADOS[filter]) {
      containerOriginal.style.display = 'none';
      containerCursos.style.display = 'grid';

      title.textContent = 'Cursos de ' + filter;
      sub.textContent = 'Explora los cursos especializados para ' + filter + ' de secundaria.';
      tag.textContent = filter;

      containerCursos.innerHTML = '';
      const cursos = CURSOS_GRADOS[filter];
      cursos.forEach(c => {
        containerCursos.innerHTML += `
          <div class="feat-card">
            <div class="feat-icon" style="background:${c.bg};">${c.icon}</div>
            <h3>${c.nombre}</h3>
            <p>${c.desc}</p>
          </div>`;
      });

      // Cursos dinámicos creados desde el panel de Soporte (Firestore)
      db.collection("cursos_admin").where("grado", "==", filter).get().then(snap => {
        snap.forEach(doc => {
          const c = doc.data();
          containerCursos.innerHTML += `
            <div class="feat-card" style="border:2px dashed var(--accent1);">
              <div class="feat-icon" style="background:rgba(99,102,241,.15);">${c.icon || '📚'}</div>
              <h3>${c.nombre} <span style="font-size:.6rem;background:var(--accent1);color:#fff;padding:.1rem .4rem;border-radius:6px;vertical-align:middle;">NUEVO</span></h3>
              <p>${c.desc || ''}</p>
            </div>`;
        });
      }).catch(err => console.warn("No se pudieron cargar cursos dinámicos:", err));
    } else {
      containerOriginal.style.display = 'grid';
      containerCursos.style.display = 'none';

      title.textContent = 'Selecciona tu grado';
      sub.textContent = 'Contenido especializado para cada año de secundaria. Encuentra recursos exactamente donde estás.';
      tag.textContent = 'Nivel secundaria';
    }
  }

  /* ── AREAS RENDER ── */
  function renderAreas(filter) {
    const container = document.getElementById('areas-cards');
    const title = document.getElementById('areas-title');
    const sub   = document.getElementById('areas-sub');
    container.innerHTML = '';

    const keys = filter ? [filter] : Object.keys(AREAS);
    title.textContent = filter ? filter : 'Todas las Áreas';
    sub.textContent   = filter
      ? 'Recursos, ejercicios y materiales del área de ' + filter + '.'
      : 'Explora recursos, ejercicios y materiales de estudio organizados por cada área del currículo nacional.';

    keys.forEach(name => {
      const a = AREAS[name];
      container.innerHTML += `
        <div class="feat-card">
          <div class="feat-icon" style="background:${a.bg};">${a.icon}</div>
          <h3>${name}</h3>
          <p>${a.desc}</p>
          <p style="margin-top:.8rem;font-size:.8rem;color:var(--muted);">📦 ${a.recursos} recursos disponibles</p>
        </div>`;
    });
  }

/* ── LÓGICA DE REGISTRO EN LA NUBE CORRECTA ── */
function guardarCuenta(event) {
  event.preventDefault();

  const nombre = document.getElementById('reg-nombre').value.trim();
  const apellido = document.getElementById('reg-apellido').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase(); 
  const grado = document.getElementById('reg-grado').value;
  const password = document.getElementById('reg-pass').value;

  // Realizar consulta en la colección de la nube
  db.collection("usuarios").where("email", "==", email).get()
    .then((querySnapshot) => {
      
      if (!querySnapshot.empty) {
        alert("Este correo ya está registrado en la nube. Por favor, intenta con otro o inicia sesión.");
        return;
      }

      const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        grado: grado,
        password: password,
        fechaRegistro: firebase.firestore.FieldValue.serverTimestamp()
      };

      db.collection("usuarios").add(nuevoUsuario)
        .then(() => {
          alert(`¡Cuenta creada con éxito en la nube! Bienvenido a EduCORD Pro, ${nombre}.`);
          document.getElementById('form-registro-cloud').reset(); // Reset con ID correcto
          closeModal('register'); 
        })
        .catch((error) => {
          console.error("Error al guardar en la nube: ", error);
          alert("Hubo un problema al guardar tu cuenta en internet.");
        });

    })
    .catch((error) => {
      console.error("Error al consultar Firebase: ", error);
      alert("Error de conexión: No se pudo verificar la base de datos.");
    });
}
/* ── MOSTRAR / OCULTAR CONTRASEÑA ── */
function togglePasswordVisibility(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  if (!input || !btn) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
    btn.setAttribute('aria-label', 'Ocultar contraseña');
  } else {
    input.type = 'password';
    btn.textContent = '👁️';
    btn.setAttribute('aria-label', 'Mostrar contraseña');
  }
}

/* ── RECUPERAR CONTRASEÑA (actualiza el documento del usuario en Firestore) ── */
function recuperarContrasena(event) {
  event.preventDefault();
  const email = document.getElementById('rec-email').value.trim().toLowerCase();
  const nuevaPass = document.getElementById('rec-pass').value;
  const btn = event.target.querySelector('button[type="submit"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Actualizando...'; }

  db.collection("usuarios").where("email", "==", email).get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        alert("No encontramos ninguna cuenta registrada con ese correo.");
        if (btn) { btn.disabled = false; btn.textContent = 'Actualizar contraseña'; }
        return;
      }
      const updates = [];
      querySnapshot.forEach((doc) => {
        updates.push(db.collection("usuarios").doc(doc.id).update({ password: nuevaPass }));
      });
      Promise.all(updates).then(() => {
        alert("¡Contraseña actualizada con éxito! Ya puedes iniciar sesión con tu nueva contraseña.");
        document.getElementById('form-recover').reset();
        closeModal('recover');
        openModal('login');
      }).catch((err) => {
        console.error(err);
        alert("Ocurrió un error al actualizar tu contraseña. Intenta de nuevo.");
      }).finally(() => {
        if (btn) { btn.disabled = false; btn.textContent = 'Actualizar contraseña'; }
      });
    })
    .catch((error) => {
      console.error("Error al recuperar contraseña: ", error);
      alert("Hubo un problema de conexión con la base de datos.");
      if (btn) { btn.disabled = false; btn.textContent = 'Actualizar contraseña'; }
    });
}

/* ── LÓGICA DE INICIO DE SESIÓN EN LA NUBE ── */
function iniciarSesion(event) {
  event.preventDefault(); // Evita que se recargue la página bruscamente

  // 1. Obtener los datos del formulario
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-pass').value;

  // 2. Buscar en Firebase una cuenta que tenga EXACTAMENTE ese correo y contraseña
  db.collection("usuarios")
    .where("email", "==", email)
    .where("password", "==", password)
    .get()
    .then((querySnapshot) => {
      
      // Si la consulta NO está vacía, significa que las credenciales son correctas
      if (!querySnapshot.empty) {
        
        // Extraemos los datos de ese usuario de la nube
        querySnapshot.forEach((doc) => {
          const usuario = doc.data();
          const nombreAlumno = usuario.nombre;
          const gradoAlumno = usuario.grado;

          // Registrar última conexión en Firestore
          db.collection("usuarios").doc(doc.id).update({
            ultimaConexion: firebase.firestore.FieldValue.serverTimestamp()
          }).catch(err => console.warn("No se pudo actualizar ultimaConexion:", err));

          localStorage.setItem('sesion_activa', JSON.stringify(usuario));
          alert(`¡Inicio de sesión exitoso! Bienvenido de vuelta, ${nombreAlumno}. Serás redirigido a tu aula de ${gradoAlumno}º Grado.`);

          document.getElementById('form-login-cloud').reset();
          closeModal('login');
          window.location.href = `grado${gradoAlumno}.html`;
        });

      } else {
        // Si la consulta está vacía, el correo o la contraseña están mal
        alert("Correo o contraseña incorrectos. Por favor, verifica tus datos e inténtalo de nuevo.");
      }
      
    })
    .catch((error) => {
      console.error("Error al iniciar sesión: ", error);
      alert("Hubo un problema de conexión con la base de datos.");
    });
}

/* ══════════════ REGISTRO DIRECTO EN FIREBASE (SIN VERIFICACIÓN POR CÓDIGO) ══════════════ */

function guardarCuentaDirecto(event) {
  event.preventDefault();

  const nombre    = document.getElementById('reg-nombre').value.trim();
  const apellido  = document.getElementById('reg-apellido').value.trim();
  const email     = document.getElementById('reg-email').value.trim().toLowerCase();
  const celular   = document.getElementById('reg-phone').value.trim() || "No especificado";
  const grado     = document.getElementById('reg-grado').value;
  const password  = document.getElementById('reg-pass').value;

  const botonSubmit = event.target.querySelector('button[type="submit"]');
  const textoOriginal = botonSubmit.innerText;
  botonSubmit.innerText = "Creando tu cuenta...";
  botonSubmit.disabled = true;

  // 1) Verificamos que el correo no exista ya en Firebase
  db.collection("usuarios").where("email", "==", email).get()
    .then((querySnapshot) => {
      if (!querySnapshot.empty) {
        alert("Este correo ya está registrado en EduCORD Pro. Por favor, inicia sesión.");
        botonSubmit.innerText = textoOriginal;
        botonSubmit.disabled = false;
        return;
      }

      // 2) Guardamos directamente la cuenta en Firestore
      const nuevoUsuario = {
        nombre, apellido, email, celular, grado, password,
        fechaRegistro: firebase.firestore.FieldValue.serverTimestamp()
      };

      db.collection("usuarios").add(nuevoUsuario)
        .then(() => {
          // 3) Mostramos la pantalla de éxito
          document.getElementById('step-1-form').style.display = 'none';
          document.getElementById('step-3-success').style.display = 'block';
          botonSubmit.innerText = textoOriginal;
          botonSubmit.disabled = false;
        })
        .catch((error) => {
          console.error("Error al guardar en Firebase: ", error);
          alert("Hubo un problema al crear tu cuenta. Intenta nuevamente.");
          botonSubmit.innerText = textoOriginal;
          botonSubmit.disabled = false;
        });
    })
    .catch((error) => {
      console.error("Error al consultar Firebase: ", error);
      alert("Error de conexión con la base de datos. Revisa tu internet.");
      botonSubmit.innerText = textoOriginal;
      botonSubmit.disabled = false;
    });
}


function verificarCodigoEmail() {
  const codigoIngresado = document.getElementById('reg-code').value.trim();
  const botonVerificar = document.querySelector('#step-2-verify .btn-primary');
  
  botonVerificar.innerText = "Verificando...";
  botonVerificar.disabled = true;
  
  // 4. Comparamos el código que escribió el alumno con el que generamos
  if (codigoIngresado === codigoVerificacionActual) {
    // ¡CÓDIGO CORRECTO!
    document.getElementById('step-2-verify').style.display = 'none';
    document.getElementById('step-3-success').style.display = 'block';
    
    botonVerificar.innerText = "Verificar y Registrar";
    botonVerificar.disabled = false;
    
    // Ejecutamos el guardado final en Firebase
    guardarCuentaDefinitiva(); 
  } else {
    alert("❌ Código incorrecto. Por favor, revisa tu correo e intenta de nuevo.");
    botonVerificar.innerText = "Verificar y Registrar";
    botonVerificar.disabled = false;
  }
}

function guardarCuentaDefinitiva() {
  const nombre = document.getElementById('reg-nombre').value.trim();
  const apellido = document.getElementById('reg-apellido').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase(); 
  const celular = document.getElementById('reg-phone').value.trim() || "No especificado"; // Tomamos el valor o ponemos "No especificado"
  const grado = document.getElementById('reg-grado').value;
  const password = document.getElementById('reg-pass').value;

  const nuevoUsuario = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    celular: celular,
    grado: grado,
    password: password,
    fechaRegistro: firebase.firestore.FieldValue.serverTimestamp()
  };

  // Guardamos en Firestore
  db.collection("usuarios").add(nuevoUsuario)
    .then(() => {
      console.log("Usuario guardado exitosamente en la nube.");
    })
    .catch((error) => {
      console.error("Error al guardar en la nube: ", error);
      alert("Hubo un problema al crear tu cuenta en internet.");
    });
}

// Funciones de navegación del modal
function volverAlRegistro() {
  document.getElementById('step-2-verify').style.display = 'none';
  document.getElementById('step-1-form').style.display = 'block';
  document.getElementById('reg-code').value = ""; // Limpiamos el input
}

function finalizarRegistro() {
  document.getElementById('step-3-success').style.display = 'none';
  document.getElementById('step-1-form').style.display = 'block';
  
  // Limpiamos los formularios
  document.getElementById('form-registro-cloud').reset();


  
  closeModal('register');
  openModal('login');
}

  /* ── DROPDOWNS ── */
  function toggleDD(id) {
    const el = document.getElementById(id);
    const isOpen = el.classList.contains('open');
    closeAllDD();
    if (!isOpen) el.classList.add('open');
  }
  function closeAllDD() {
    document.querySelectorAll('.nav-menu > li').forEach(li => li.classList.remove('open'));
  }
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-menu')) closeAllDD();
  });

  /* ── MODALS ── */
  function openModal(id) {
    document.getElementById('modal-' + id).classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id) {
    document.getElementById('modal-' + id).classList.remove('open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  /* ── SCROLL REVEAL ── */
  function setupReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
    }, { threshold: .12 });
    document.querySelectorAll('[data-reveal]').forEach(el => { el.classList.remove('revealed'); obs.observe(el); });
  }

  /* Inicialización */
  renderAreas();
  setupReveal();

/* ══════════════════════════════════════════════════════════
   PANEL DE SOPORTE / ADMINISTRACIÓN
   ══════════════════════════════════════════════════════════ */
const ADMIN_PASSWORD = "admin2026"; // 🔐 Cambia esta clave para tu seguridad
let _estudiantesCache = [];
let _cursosCache = [];

function soporteLogin(e) {
  e.preventDefault();
  const pass = document.getElementById('soporte-pass').value;
  if (pass !== ADMIN_PASSWORD) {
    alert("❌ Clave incorrecta.");
    return;
  }
  document.getElementById('soporte-login').style.display = 'none';
  document.getElementById('soporte-panel').style.display = 'block';
  document.getElementById('soporte-pass').value = '';
  cargarEstudiantes();
  cargarCursos();
}

function soporteCerrar() {
  document.getElementById('soporte-panel').style.display = 'none';
  document.getElementById('soporte-login').style.display = 'block';
  closeModal('soporte');
}

function soporteTab(tab) {
  document.querySelectorAll('.sop-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.getElementById('sop-tab-estudiantes').style.display = tab === 'estudiantes' ? 'block' : 'none';
  document.getElementById('sop-tab-cursos').style.display = tab === 'cursos' ? 'block' : 'none';
}

/* ── ESTUDIANTES ── */
function cargarEstudiantes() {
  const tbody = document.getElementById('sop-tbody-est');
  tbody.innerHTML = `<tr><td colspan="8" style="padding:1.5rem;text-align:center;color:var(--muted);">Cargando...</td></tr>`;
  
  // 🔥 onSnapshot mantiene la lista de estudiantes en tiempo real
  db.collection("usuarios").onSnapshot(snap => {
    _estudiantesCache = [];
    snap.forEach(doc => _estudiantesCache.push({ id: doc.id, ...doc.data() }));
    renderEstudiantes();
  }, err => {
    console.error(err);
    tbody.innerHTML = `<tr><td colspan="8" style="padding:1rem;text-align:center;color:#e53e3e;">Error al cargar: ${err.message}</td></tr>`;
  });
}

function _fmtFecha(ts) {
  if (!ts) return '<span style="color:#aaa;">—</span>';
  try {
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short' });
  } catch { return String(ts); }
}

function renderEstudiantes() {
  const q = (document.getElementById('sop-search-est').value || '').toLowerCase();
  const tbody = document.getElementById('sop-tbody-est');
  const filtrados = _estudiantesCache.filter(u => {
    if (!q) return true;
    return (u.nombre || '').toLowerCase().includes(q)
        || (u.apellido || '').toLowerCase().includes(q)
        || (u.email || '').toLowerCase().includes(q);
  });
  
  if (!filtrados.length) {
    tbody.innerHTML = `<tr><td colspan="8" style="padding:1.5rem;text-align:center;color:var(--muted);">Sin resultados.</td></tr>`;
  } else {
    tbody.innerHTML = filtrados.map(u => `
      <tr style="border-top:1px solid var(--border);">
        <td style="padding:.5rem;">${(u.nombre||'')} ${(u.apellido||'')}</td>
        <td style="padding:.5rem;">${u.email||''}</td>
        <td style="padding:.5rem;">${u.celular||'—'}</td>
        <td style="padding:.5rem;text-align:center;"><span class="sop-badge">${u.grado||'?'}°</span></td>
        <td style="padding:.5rem;font-family:monospace;font-size:.75rem;">${u.password||''}</td>
        <td style="padding:.5rem;font-size:.75rem;">${_fmtFecha(u.fechaRegistro)}</td>
        <td style="padding:.5rem;font-size:.75rem;">${_fmtFecha(u.ultimaConexion)}</td>
        <td style="padding:.5rem;text-align:center;">
          <button onclick="eliminarEstudiante('${u.id}','${(u.nombre||'').replace(/'/g,"")}')" style="background:#e53e3e;color:#fff;border:none;padding:.3rem .6rem;border-radius:6px;cursor:pointer;font-size:.75rem;">🗑️</button>
        </td>
      </tr>
    `).join('');
  }
  document.getElementById('sop-total-est').textContent = `Total: ${filtrados.length} de ${_estudiantesCache.length} estudiantes`;
}

function eliminarEstudiante(id, nombre) {
  if (!confirm(`¿Eliminar definitivamente al estudiante "${nombre}"?\nEsta acción no se puede deshacer.`)) return;
  db.collection("usuarios").doc(id).delete().then(() => {
    alert("✅ Estudiante eliminado.");
    // ❌ Ya no llamamos a cargarEstudiantes() aquí porque onSnapshot lo actualiza automáticamente.
  }).catch(err => alert("❌ Error: " + err.message));
}

/* ── CURSOS ── */
function crearCurso(e) {
  e.preventDefault();
  const grado = document.getElementById('curso-grado').value;
  const icon = document.getElementById('curso-icon').value.trim() || '📚';
  const nombre = document.getElementById('curso-nombre').value.trim();
  const desc = document.getElementById('curso-desc').value.trim();
  if (!nombre || !desc) return;

  const btn = e.target.querySelector('button[type=submit]');
  btn.disabled = true; btn.textContent = 'Creando...';

  db.collection("cursos_admin").add({
    grado, icon, nombre, desc,
    creadoEn: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    alert(`✅ Curso "${nombre}" creado para ${grado}. Ya aparece en el intranet del estudiante.`);
    e.target.reset();
    document.getElementById('curso-icon').value = '📚';
    // ❌ Ya no llamamos a cargarCursos() aquí porque onSnapshot lo actualiza automáticamente.
  }).catch(err => alert("❌ Error: " + err.message))
    .finally(() => { btn.disabled = false; btn.textContent = 'Crear curso →'; });
}

function cargarCursos() {
  const cont = document.getElementById('sop-lista-cursos');
  cont.innerHTML = `<p style="color:var(--muted);text-align:center;padding:1rem;">Cargando cursos...</p>`;
  
  // 🔥 onSnapshot mantiene la lista de cursos en tiempo real
  db.collection("cursos_admin").onSnapshot(snap => {
    _cursosCache = [];
    snap.forEach(doc => _cursosCache.push({ id: doc.id, ...doc.data() }));
    renderCursos();
  }, err => {
    cont.innerHTML = `<p style="color:#e53e3e;">Error: ${err.message}</p>`;
  });
}

function renderCursos() {
  const filtro = document.getElementById('sop-filter-grado').value;
  const cont = document.getElementById('sop-lista-cursos');
  const lista = filtro ? _cursosCache.filter(c => c.grado === filtro) : _cursosCache;
  
  if (!lista.length) {
    cont.innerHTML = `<p style="color:var(--muted);text-align:center;padding:1rem;">Aún no hay cursos creados${filtro ? ' para ' + filtro : ''}.</p>`;
    return;
  }
  
  // ordenar por grado
  lista.sort((a,b) => (a.grado||'').localeCompare(b.grado||''));
  cont.innerHTML = lista.map(c => `
    <div class="sop-curso-card">
      <div style="font-size:1.8rem;">${c.icon || '📚'}</div>
      <div class="info">
        <h4>${c.nombre} <span class="sop-badge">${c.grado}</span></h4>
        <p>${c.desc || ''}</p>
      </div>
      <button onclick="eliminarCurso('${c.id}','${(c.nombre||'').replace(/'/g,"")}')" style="background:#e53e3e;color:#fff;border:none;padding:.4rem .7rem;border-radius:6px;cursor:pointer;">🗑️ Eliminar</button>
    </div>
  `).join('');
}

function eliminarCurso(id, nombre) {
  if (!confirm(`¿Eliminar el curso "${nombre}"?\nDejará de aparecer en el intranet de los estudiantes.`)) return;
  db.collection("cursos_admin").doc(id).delete().then(() => {
    alert("✅ Curso eliminado.");
    // ❌ Ya no llamamos a cargarCursos() aquí porque onSnapshot lo actualiza automáticamente.
  }).catch(err => alert("❌ Error: " + err.message));
}
