// Función para cambiar de secciones principales
function showSection(sectionId, titleParam = null) {
  // 1. Ocultar todas las secciones
  document.querySelectorAll('.section-page').forEach(sec => {
    sec.classList.remove('active');
  });

  // 2. Mostrar la sección destino
  const targetSection = document.getElementById('page-' + sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // 3. Actualizar la clase active-link en la navegación
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.classList.remove('active-link');
  });
  
  // Tratar de activar el enlace padre si existe
  const activeLink = document.getElementById('nav-' + sectionId);
  if (activeLink) {
    activeLink.classList.add('active-link');
  }

  // 4. Si se pasa un parámetro (ej. "1er Grado" o "Matemática"), modificar el título
  if (titleParam) {
    if (sectionId === 'grados') {
      const sub = document.getElementById('grados-sub');
      if (sub) sub.innerText = `Mostrando todo el contenido enfocado en: ${titleParam}`;
    } else if (sectionId === 'areas') {
      const title = document.getElementById('areas-title');
      if (title) title.innerText = `Área: ${titleParam}`;
    }
  } else {
    // Restaurar títulos por defecto si no hay parámetro
    if (sectionId === 'grados') {
      const sub = document.getElementById('grados-sub');
      if (sub) sub.innerText = `Contenido especializado para cada año de secundaria. Encuentra recursos exactamente donde estás.`;
    } else if (sectionId === 'areas') {
      const title = document.getElementById('areas-title');
      if (title) title.innerText = `Explora por Áreas`;
    }
  }

  // 5. Cerrar dropdowns si se hizo clic en ellos
  document.querySelectorAll('.nav-menu > li').forEach(li => {
    li.classList.remove('open');
  });

  // 6. Subir al inicio de la página suavemente
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para abrir/cerrar menús desplegables (Dropdowns)
function toggleDD(dropdownId) {
  const dropdownElement = document.getElementById(dropdownId);
  
  // Comprobar si ya está abierto
  const isOpen = dropdownElement.classList.contains('open');

  // Cerrar todos los dropdowns primero
  document.querySelectorAll('.nav-menu > li').forEach(li => {
    li.classList.remove('open');
  });

  // Si no estaba abierto, abrirlo
  if (!isOpen) {
    dropdownElement.classList.add('open');
  }
}

// Funciones para manejar Modales
function openModal(modalId) {
  // Cerramos otros modales por si acaso
  closeModal();
  const modal = document.getElementById('modal-' + modalId);
  if (modal) {
    modal.classList.add('open');
  }
}

function closeModal(event) {
  // Si se pasa un evento y el clic no fue en el overlay (fondo), no hacemos nada
  if (event && event.target.classList && !event.target.classList.contains('modal-overlay') && !event.target.classList.contains('modal-close')) {
    return;
  }
  
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('open');
  });
}

// Lógica de Animación al hacer Scroll (Intersection Observer)
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    threshold: 0.1, // Se activa cuando el 10% del elemento es visible
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Opcional: dejar de observar una vez revelado
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Seleccionamos todos los elementos con el atributo data-reveal
  document.querySelectorAll('[data-reveal]').forEach(element => {
    observer.observe(element);
  });
});