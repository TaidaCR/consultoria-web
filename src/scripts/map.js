//MAPA
document.addEventListener('astro:page-load', () => {
    const mapContainer = document.getElementById('map');

    if (mapContainer) {
        const map = L.map('map', {
            minZoom: 2,
            worldCopyJump: true,
            noWrap: true
        }).setView([20, -40], 3);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        const hospitales = [
            // --- PERÚ ---
            { nombre: "Hospital Barton Grupo Ibt", ubicacion: [-12.052, -77.128], pais: "Perú", ciudad: "Callao", url: "https://www.hospitalbarton.com.pe/" },
            { nombre: "Hospital Villa María del Triunfo (Kaelin)", ubicacion: [-12.162, -76.938], pais: "Perú", ciudad: "Lima", url: "https://www.hospitalkaelin.com.pe/" },
            { nombre: "Hospital Clínica San Pablo Surco", ubicacion: [-12.115, -76.980], pais: "Perú", ciudad: "Lima", url: "https://www.sanpablo.com.pe/sede/surco/" },
            { nombre: "Hospital Jesús del Norte", ubicacion: [-11.992, -77.062], pais: "Perú", ciudad: "Lima", url: "https://www.sanpablo.com.pe/sede/jesus-del-norte/" },
            { nombre: "Hospital San Gabriel", ubicacion: [-12.091, -77.018], pais: "Perú", ciudad: "Lima", url: "https://www.sangabriel.com.pe/" },

            // --- COLOMBIA ---
            { nombre: "Clínica Reina Sofia - Colsanitas", ubicacion: [4.701, -74.063], pais: "Colombia", ciudad: "Bogotá", url: "https://www.colsanitas.com/infografias-clinicas/clinica-reina-sofia" },
            { nombre: "Clínica Sanitas Materno Infantil", ubicacion: [4.653, -74.061], pais: "Colombia", ciudad: "Bogotá", url: "https://www.colsanitas.com/clinicas-y-centros-medicos" },
            { nombre: "Centro Ambulatorio Colsanitas", ubicacion: [4.698, -74.058], pais: "Colombia", ciudad: "Bogotá", url: "https://www.colsanitas.com/" },

            // --- ESPAÑA: PÚBLICOS ---
            { nombre: "Hospital Universitario Costa del Sol", ubicacion: [36.505, -4.834], pais: "España", ciudad: "Marbella", url: "https://www.hcs.es/" },
            { nombre: "Hospital Univ. Gregorio Marañón (Materno)", ubicacion: [40.419, -3.671], pais: "España", ciudad: "Madrid", url: "https://www.comunidad.madrid/hospital/gregoriomaranon/" },
            { nombre: "Hospital del Alto Deba", ubicacion: [43.064, -2.486], pais: "España", ciudad: "Mondragón", url: "https://www.osakidetza.euskadi.eus/hospitall-alto-deba/" },
            { nombre: "Hospital Universitario de Cruces", ubicacion: [43.284, -2.986], pais: "España", ciudad: "Baracaldo", url: "https://www.osakidetza.euskadi.eus/hospital-universitario-cruces/" },
            { nombre: "Fundación Jiménez Díaz (Quirón)", ubicacion: [40.435, -3.715], pais: "España", ciudad: "Madrid", url: "https://www.fjd.es/" },

            // --- ESPAÑA: PRIVADOS ---
            { nombre: "Clínica Universidad de Navarra (Pamplona)", ubicacion: [42.808, -1.663], pais: "España", ciudad: "Pamplona", url: "https://www.cun.es/" },
            { nombre: "Clínica Universidad de Navarra (Madrid)", ubicacion: [40.444, -3.626], pais: "España", ciudad: "Madrid", url: "https://www.cun.es/sedes/madrid" },
            { nombre: "Hospital Clínica Benidorm", ubicacion: [38.541, -0.134], pais: "España", ciudad: "Benidorm", url: "https://www.clinicabenidorm.com/" },
            { nombre: "Hospital Zorrotzaurre", ubicacion: [43.272, -2.955], pais: "España", ciudad: "Bilbao", url: "https://www.imq.es/clinicas/clinica-imq-zorrotzaurre/" },
            { nombre: "Clínica Servidigest", ubicacion: [41.402, 2.146], pais: "España", ciudad: "Barcelona", url: "https://www.servidigest.com/" },

            // --- GRUPO QUIRÓN ---
            { nombre: "Hospital Quirón Pozuelo", ubicacion: [40.428, -3.799], pais: "España", ciudad: "Madrid", url: "https://www.quironsalud.com/hospital-madrid" },
            { nombre: "Hospital Clínica Dexeus", ubicacion: [41.385, 2.127], pais: "España", ciudad: "Barcelona", url: "https://www.quironsalud.com/dexeus-barcelona" },
            { nombre: "Hospital Quirón Córdoba", ubicacion: [37.876, -4.792], pais: "España", ciudad: "Córdoba", url: "https://www.quironsalud.com/hospital-cordoba" },
            { nombre: "Hospital Quirón Barcelona", ubicacion: [41.412, 2.140], pais: "España", ciudad: "Barcelona", url: "https://www.quironsalud.com/hospital-barcelona" },
            { nombre: "Hospital Quirón Torrevieja", ubicacion: [38.001, -0.672], pais: "España", ciudad: "Alicante", url: "https://www.quironsalud.com/torrevieja" },
            { nombre: "Hospital Universitario La Luz", ubicacion: [40.443, -3.712], pais: "España", ciudad: "Madrid", url: "https://www.hospitalalaluz.es/" },

            // --- GRUPO BUPA-SANITAS ---
            { nombre: "Hospital La Zarzuela", ubicacion: [40.463, -3.778], pais: "España", ciudad: "Madrid", url: "https://www.sanitas.es/sanitas/seguros/es/particulares/medicos-centros/hospital-la-zarzuela/" },
            { nombre: "Hospital La Moraleja", ubicacion: [40.505, -3.649], pais: "España", ciudad: "Madrid", url: "https://www.sanitas.es/sanitas/seguros/es/particulares/medicos-centros/hospital-la-moraleja/" },
            { nombre: "Hospital CIMA", ubicacion: [41.393, 2.119], pais: "España", ciudad: "Barcelona", url: "https://www.sanitas.es/sanitas/seguros/es/particulares/medicos-centros/hospital-cima/" },
            { nombre: "Hospital Nuestra Señora del Mar", ubicacion: [40.448, -3.655], pais: "España", ciudad: "Madrid", url: "https://www.sanitas.es/sanitas/seguros/es/particulares/medicos-centros/hospital-virgen-mar/" },

            // --- GRUPO VITHAS ---
            { nombre: "Hospital VITHAS XANIT Internacional", ubicacion: [36.598, -4.532], pais: "España", ciudad: "Málaga", url: "https://vithas.es/centro/vithas-xanit-internacional/" },
            { nombre: "Hospital Vithas Almería", ubicacion: [36.848, -2.433], pais: "España", ciudad: "Almería", url: "https://vithas.es/centro/hospital-vithas-almeria/" },
            { nombre: "Hospital Vithas Granada", ubicacion: [37.161, -3.593], pais: "España", ciudad: "Granada", url: "https://vithas.es/centro/hospital-vithas-granada/" },
            { nombre: "Hospital Vithas Madrid Aravaca", ubicacion: [40.457, -3.791], pais: "España", ciudad: "Madrid", url: "https://vithas.es/centro/vithas-madrid-aravaca/" }
        ];

        hospitales.forEach(hosp => {
            L.marker(hosp.ubicacion)
                .addTo(map)
                .bindPopup(`<a target="blank" href=${hosp.url}><b>${hosp.nombre}</b><br>Centro Acreditado JCI en ${hosp.pais}</a >`);
        });

    }
})




