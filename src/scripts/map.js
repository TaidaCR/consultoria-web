//MAPA
document.addEventListener('astro:page-load', () => {
    const mapContainer = document.getElementById('map');
    let zoom = 3;
    if (window.innerWidth < 768) {
        zoom = 2;         // Menos zoom para que quepa más mapa
    }
    if (mapContainer) {
        const map = L.map('map', {
            minZoom: 2,
            worldCopyJump: true,
            noWrap: true
        }).setView([20, -40], zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        const hospitales = [
            // --- ESPAÑA ---
            { nombre: "Hospital General Universitario Gregorio Marañón", ubicacion: [40.4192, -3.6716], pais: "España", ciudad: "Madrid", url: "https://www.comunidad.madrid/hospital/gregoriomaranon/" },
            {
                nombre: "Hospital Universitario de Cruces",
                ubicacion: [43.2826, -2.9844],
                pais: "España",
                ciudad: "Barakaldo",
                url: ""
            },
            {
                nombre: "Hospital del Alto Deba en Mondragón",
                ubicacion: [43.0631, -2.4832],
                pais: "España",
                ciudad: "Mondragón",
                url: ""
            },
            { nombre: "Hospital Universitario Costa del Sol", ubicacion: [36.5078, -4.8274], pais: "España", ciudad: "Marbella", url: "https://www.hcs.es/" },
            { nombre: "Hospital Universitario Fundación Jiménez Díaz", ubicacion: [40.4389, -3.7191], pais: "España", ciudad: "Madrid", url: "https://www.fjd.es/" },
            { nombre: "Hospital Universitario Quirónsalud Madrid", ubicacion: [40.4027, -3.7834], pais: "España", ciudad: "Pozuelo de Alarcón", url: "https://www.quironsalud.es/hospital-madrid" },
            { nombre: "Hospital Universitari Dexeus", ubicacion: [41.3850, 2.1256], pais: "España", ciudad: "Barcelona", url: "https://www.quironsalud.es/dexeus-barcelona" },
            { nombre: "Hospital Quirónsalud Córdoba", ubicacion: [37.8720, -4.8018], pais: "España", ciudad: "Córdoba", url: "https://www.quironsalud.es/cordoba" },
            { nombre: "Hospital Quirón Barcelona", ubicacion: [41.4159982, 2.1385009], pais: "España", ciudad: "Barcelona", url: "https://www.quironsalud.es/sagrat-cor" },
            {
                nombre: "Hospital Quirónsalud Torrevieja",
                ubicacion: [38.0044, -0.6865],
                pais: "España",
                ciudad: "Torrevieja",
                url: "https://www.quironsalud.es/torrevieja"
            },
            { nombre: "Centro Médico Teknon", ubicacion: [41.4055, 2.1287], pais: "España", ciudad: "Barcelona", url: "https://www.teknon.es/" },
            { nombre: "Hospital La Luz", ubicacion: [40.4431, -3.7144], pais: "España", ciudad: "Madrid", url: "https://www.quironsalud.es/hospital-la-luz" },
            { nombre: "Hospital Universitario Sanitas La Zarzuela", ubicacion: [40.4578, -3.7786], pais: "España", ciudad: "Madrid", url: "https://www.sanitas.es/zarzuela" },
            { nombre: "Hospital Universitario Sanitas La Moraleja", ubicacion: [40.4951, -3.6559], pais: "España", ciudad: "Madrid", url: "https://www.sanitas.es/lamoraleja" },
            { nombre: "Hospital CIMA - Sanitas", ubicacion: [41.3934, 2.1215], pais: "España", ciudad: "Barcelona", url: "https://www.hospitalcima.es/es/" },
            { nombre: "Hospital Vithas Xanit Internacional", ubicacion: [36.5982, -4.5385], pais: "España", ciudad: "Benalmádena", url: "https://vithas.es/centro/vithas-xanit-internacional/" },
            {
                nombre: "Hospital Sanitas Virgen del Mar",
                ubicacion: [40.4533, -3.6745],
                pais: "España",
                ciudad: "Madrid",
                url: "https://www.hospitalvirgendelmar.es/"
            },
            {
                nombre: "Hospital Vithas Almería",
                ubicacion: [36.8454, -2.4335],
                pais: "España",
                ciudad: "Almería",
                url: "https://vithas.es/centro/vithas-hospital-almeria/"
            },
            {
                nombre: "Hospital Vithas Granada",
                ubicacion: [37.1554, -3.5932],
                pais: "España",
                ciudad: "Granada",
                url: "https://vithas.es/centro/vithas-hospital-granada/"
            },
            {
                nombre: "Hospital Vithas Madrid Nuestra Señora de América",
                ubicacion: [40.4485, -3.6552],
                pais: "España",
                ciudad: "Madrid",
                url: ""
            },
            {
                nombre: "Hospital Clínica Benidorm (HCB)",
                ubicacion: [38.5422, -0.1247],
                pais: "España",
                ciudad: "Benidorm",
                url: "https://www.hcbhospitales.com/"
            },
            { nombre: "Hospital Universitario IMQ Zorrotzaurre", ubicacion: [43.2725, -2.9497], pais: "España", ciudad: "Bilbao", url: "https://www.imq.es/" },
            { nombre: "Clínica Universidad de Navarra (Pamplona)", ubicacion: [42.8066, -1.6616], pais: "España", ciudad: "Pamplona", url: "https://www.cun.es/sedes/sede-pamplona" },
            { nombre: "Clínica Universidad de Navarra (Madrid)", ubicacion: [40.4447, -3.6267], pais: "España", ciudad: "Madrid", url: "https://www.cun.es/sedes/sede-madrid" },


            //AMBULATORIOS ESPAÑA
            {
                nombre: "Clínica ServiDigest",
                ubicacion: [41.4035, 2.1512],
                pais: "España",
                ciudad: "Barcelona",
                url: "https://www.servidigest.com/"
            },
            {
                nombre: "Clínica Emby - Reproducción Asistida",
                ubicacion: [43.3644, -5.8511],
                pais: "España",
                ciudad: "Oviedo",
                url: "https://clinicaemby.es/"
            },

            //MODELO ACREDITACIÓN DE CENTROS DE ATENCIÓN PRIMARIA
            {
                nombre: "Centro de Salud Oñati (Osakidetza)",
                ubicacion: [43.0335, -2.4116],
                pais: "España",
                ciudad: "Oñati",
                url: ""
            },
            {
                nombre: "Centro de Salud El Llano (SESPA)",
                ubicacion: [43.5303, -5.6565],
                pais: "España",
                ciudad: "Gijón",
                url: ""
            },
            // --- PERÚ ---
            {
                nombre: "Hospital Alberto Barton (Grupo IBT)",
                ubicacion: [-12.0528, -77.1281],
                pais: "Perú",
                ciudad: "Callao",
                url: ""
            },
            {
                nombre: "Hospital Guillermo Kaelin (Grupo IBT)",
                ubicacion: [-12.1642, -76.9385],
                pais: "Perú",
                ciudad: "Villa María del Triunfo",
                url: "https://kaelin.pe/hospital-guillermo-kaelin-de-la-fuente/"
            },
            {
                nombre: "Clínica San Pablo Surco",
                ubicacion: [-12.1064, -76.9745],
                pais: "Perú",
                ciudad: "Lima",
                url: "https://www.sanpablo.com.pe/"
            },
            {
                nombre: "Clínica Jesús del Norte (Grupo San Pablo)",
                ubicacion: [-11.9936, -77.0612],
                pais: "Perú",
                ciudad: "Independencia",
                url: "https://www.sanpablo.com.pe/"
            },
            {
                nombre: "Clínica San Gabriel (Grupo San Pablo)",
                ubicacion: [-12.0788, -77.0934],
                pais: "Perú",
                ciudad: "San Miguel",
                url: "https://www.sanpablo.com.pe/"
            },
            {
                nombre: "Clínica Ricardo Palma",
                ubicacion: [-12.0917, -77.0233],
                pais: "Perú",
                ciudad: "San Isidro",
                url: "https://www.crp.com.pe/"
            },

            // --- COLOMBIA ---
            {
                nombre: "Grupo Colsanitas (Grupo Keralty)",
                ubicacion: [4.7071398, -74.0523755],
                pais: "Colombia",
                ciudad: "Bogotá",
                url: "https://clinicareinasofia.com/"
            },
            // --- CHILE ---
            { nombre: "Hospital Padre Hurtado (Domicilio)", ubicacion: [-33.5414, -70.6277], pais: "Chile", ciudad: "Santiago", url: "https://www.hph.cl/" }
        ];

        hospitales.forEach(hosp => {
            L.marker(hosp.ubicacion)
                .addTo(map)
                .bindPopup(`
                <p class="map__nombreHosp"><strong>${hosp.nombre}</strong></p>
                ${hosp.url
                        ? `<a class="map__hospLink" href="${hosp.url}" target="_blank" rel="noopener noreferrer">Visitar sitio web</a>`
                        : ''
                    }
            `);
        });

    }
})