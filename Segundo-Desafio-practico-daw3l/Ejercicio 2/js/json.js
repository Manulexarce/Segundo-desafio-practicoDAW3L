/*Guaradndo datos variable*/
const form = document.querySelector('form');

      /*sumatoria*/
      form.addEventListener('submit', obtenerTotal);

      function obtenerTotal(event) {
        /*evita enviar el formulario par que no se actualice la página*/
        event.preventDefault();

        // obtener todos los input radio
        const formData = new FormData(event.target);

        const combo1 = parseFloat(formData.get('combo-1') || '0', 10);
        const combo2 = parseFloat(formData.get('combo-2') || '0', 10);
        const combo3 = parseFloat(formData.get('combo-3') || '0', 10);
        /*Ahora los productos restantes*/
        const pro1 = parseFloat(formData.get('producto1') || '0', 10);
        const pro2 = parseFloat(formData.get('producto2') || '0', 10);
        const pro3 = parseFloat(formData.get('producto3') || '0', 10);
        const pro4 = parseFloat(formData.get('producto4') || '0', 10);
        const pro5 = parseFloat(formData.get('producto5') || '0', 10);
        const pro6 = parseFloat(formData.get('producto6') || '0', 10);
        const pro7 = parseFloat(formData.get('producto7') || '0', 10);
        const pro8 = parseFloat(formData.get('producto8') || '0', 10);
        const pro9 = parseFloat(formData.get('producto9') || '0', 10);
        const pro10 = parseFloat(formData.get('producto10') || '0', 10);

        const result = combo1 + combo2 + combo3 + pro1 +pro2 + pro3 + pro4 + pro5 + pro6 + pro7 + pro8 + pro9 + pro10 ;
        document.getElementById('result'). innerHTML = result;
      }