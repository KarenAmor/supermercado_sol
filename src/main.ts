import './style.css';
import axios from 'axios'; // Importar Axios para realizar solicitudes HTTP

// Función para obtener los datos del endpoint GET
async function fetchData() {
  try {
    const response = await axios.get('https://negocio-supermercado.onrender.com'); // Reemplaza con la URL de tu endpoint GET
    return response.data; // Devuelve los datos obtenidos
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return null; // Manejo de errores
  }
}

// Función para renderizar los datos en la interfaz de usuario
async function renderData() {
  const data = await fetchData(); // Obtener los datos
  if (data) {
    const appDiv = document.querySelector<HTMLDivElement>('#app');
    if (appDiv) {
      // Renderizar el título en la esquina superior izquierda
const appHeader = document.createElement('header');
appHeader.innerHTML = `
  <h1>Plataforma para la gestión de empleados y productos</h1>
`;
document.body.appendChild(appHeader);

// Resto de tu código HTML...
appDiv.innerHTML = `
  <nav>
    <a href="#inicio-sesion"><i class="fas fa-lock"></i> Iniciar sesión </a>
  </nav>
  <main>
    <div class="data-container">
    <pre style="font-size: 30px;">
    ${JSON.stringify(data, null, 2)}
  </pre>  
    </div>
  </main>
`;
    }
  }
}

// Llamar a la función para renderizar los datos cuando la página se cargue
document.addEventListener('DOMContentLoaded', renderData);