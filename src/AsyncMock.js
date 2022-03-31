const products = [
    {
        id: "1",
        nombre: "M1065",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1200,
        cantidad: 15,
        img: "/img/m1065.jpg",
        detalle: `La AXIS M1065-L incluye un micrófono integrado para grabar audio,
        un minialtavoz que puede emitir mensajes grabados previamente y un sensor de
        movimiento infrarrojo pasivo (PIR) para detectar el movimiento incluso en la
        oscuridad. Esta cámara con alimentación a través de Ethernet (PoE) ofrece una
        resolución HDTV 1080p a velocidad de imagen máxima, funcionalidad día/noche con
        filtro bloqueador IR mecánico e iluminación de infrarrojos. Es fácil de instalar
        con la escuadra para pared y esquina; y ofrece un campo de visión horizontal de 110°.
        La cámara presenta también WDR y es compatible con tarjetas microSD para almacenamiento local.`
    },
    {
        id: "2",
        nombre: "M1134",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1500,
        cantidad: 10,
        img: "/img/m1134.jpg",
        detalle: `La AXIS M1134 es una cámara de red compacta y asequible que es fácil
        de instalar y manejar. Admite PoE y alimentación de CC redundante, por lo que sus
        datos están protegidos en caso de que se produzca una interrupción en la alimentación.
        Gracias a la tecnología Axis Lightfinder y Axis Forensic WDR, ofrece colores verdaderos
        y gran nivel de detalle en condiciones de iluminación difícil o casi oscuridad. Incluye una montura CS que le
        permite cambiar con facilidad los objetivos para cubrir sus necesidades específicas.
        Además, un micrófono integrado le permite grabar vídeo con sonido. Por otra parte,
        ofrece Axis Zipstream con H. 264/H. 265 para reducir los requisitos de ancho de banda y almacenamiento,
        así como una funcionalidad de seguridad mejorada`
    },
    {
        id: "3",
        nombre: "M1137",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1000,
        cantidad: 13,
        img: "/img/m1137.jpg",
        detalle: `La AXIS M1137 es una cámara de red compacta y asequible que es fácil de
        instalar y manejar. Admite PoE y alimentación de CC redundante, por lo que sus datos
        están protegidos en caso de que se produzca una interrupción en la alimentación.
        Gracias a la tecnología Axis Lightfinder y Axis Forensic WDR, ofrece colores
        verdaderos y gran nivel de detalle en condiciones difíciles de iluminación o casi
        oscuridad. Incluye una montura CS que le permite cambiar con facilidad el
        objetivo para cubrir sus necesidades específicas. Además, un micrófono integrado
        le permite grabar vídeo con sonido. Por otra parte, ofrece Axis Zipstream con H.264/H.265
        para reducir los requisitos de ancho de banda y almacenamiento,
        así como una funcionalidad de seguridad mejorada.`
    },
    {
        id: "4",
        nombre: "P1375",
        tipo: "Bullet",
        categoria:"Camara",
        marca: "Axis",
        precio: 1000,
        cantidad: 21,
        img: "/img/p1375.jpg",
        detalle: `La cámara de red AXIS P1375 Network Camera ofrece una excelente calidad
        de vídeo incluso en condiciones de vibración e incorpora perfiles de escena para
        configuraciones ajustadas automáticamente para adaptarse a escenas específicas.
        Funciones de seguridad mejoradas como el firmware firmado y el arranque seguro
        garantizan la integridad y la autenticidad del firmware de la cámara. Además,
        características como alarma antimanipulación e indicador de transmisión de
        vídeo garantizan un control total del vídeo. Con Lightfinder y Forensic WDR, la
        cámara ofrece detalles incluso en condiciones de iluminación difíciles y gracias
        a la tecnología Zipstream, el almacenamiento y el ancho de banda se reducen
        significativamente. La montura CS de la cámara permite flexibilidad para cambiar
        a objetivos de mayor tamaño o más inteligentes, como objetivos i-CS.`
    },
    {
        id: "5",
        nombre: "M3058",
        tipo: "Panoramica",
        categoria:"Camara",
        marca: "Axis",
        precio: 1100,
        cantidad: 30,
        img: "/img/m3058.jpg",
        detalle: `La AXIS M3058-PLVE Network Camera proporciona una calidad de vídeo excepcional
        con cualquier tipo de luz, gracias a las tecnologías Forensic WDR y Lightfinder, desarrolladas
        por Axis. La iluminación OptimizedIR, integrada y adaptable automáticamente, permite a esta
        versátil cámara incluso ver en la oscuridad. La cámara ofrece visión completa de 360° así como
        vistas con corrección del efecto de lente esférica. La AXIS M3058-PLVE presenta un diseño discreto
        y a prueba de agresiones (IK10). El embellecedor opcional negro, que se puede repintar fácilmente,
        se puede utilizar para fusionar aún más la cámara con su entorno. La cámara incluye buena capacidad
        para los análisis. Incorpora enfoque de fábrica y se ha diseñado para una instalación sencilla.`
    },
    {
        id: "6",
        nombre: "P3807",
        tipo: "Panoramica",
        categoria:"Camara",
        marca: "Axis",
        precio: 900,
        cantidad: 5,
        img: "/img/p3807.jpg",
        detalle: `La AXIS P3807-PVE Network Camera es una cámara domo fija con varios sensores que proporciona
        una instalación sencilla, rentable y fiable con una sola cámara, lo que reduce el tiempo de instalación,
        así como los costes de cableado y licencias VMS. Gracias a sus excelentes sensores de imagen, junto con
        Forensic WDR y la tecnología Lightfinder, la cámara ofrece una magnífica calidad de vídeo con cualquier
        tipo de luz. Sus cuatro sensores proporcionan una vista panorámica de 180° y hasta 30 imágenes por segundo
        con una resolución de 8,3 MP. La cámara resulta fácil de instalar empotrada, en superficie, colgando o de
        manera consecutiva; y se entrega con posiciones predefinidas de la cámara ajustables.`
    },
    {
        id: "7",
        nombre: "P3717",
        tipo: "Panoramica",
        categoria:"Camara",
        marca: "Axis",
        precio: 1020,
        cantidad: 11,
        img: "/img/p3717.jpg",
        detalle: `La AXIS P3717 Network Camera es una cámara compacta de 15 megapíxeles con cuatro objetivos
        varifocales (4 x Quad HD) que permite una vigilancia general y detallada. Con una dirección IP y un cable de red,
        la unidad de cuatro cámaras en una proporciona una solución flexible y rentable para la vigilancia multidireccional.
        La iluminación deinfrarrojos de 360° y el WDR ofrecen una magnífica calidad de vídeo con cualquier tipo de luz. Cada
        cabezal de la cámara se puede montar de forma individual (horizontal, vertical, giro y rotación) junto con una guía
        circular. Gracias al enfoque y zoom remotos es sencillo instalar la cubierta transparente, sin bordes pronunciados,
        que garantiza una visión no distorsionada en todas las direcciones. La cámara incluye un parasol integrado.`
    },
    {
        id: "8",
        nombre: "Q6100",
        tipo: "Panoramica",
        categoria:"Camara",
        marca: "Axis",
        precio: 1000,
        cantidad: 10,
        img: "/img/q6100.jpg",
        detalle: `Con cuatro sensores de 5 MP, AXIS Q6100-E ofrece una vista completa de 360° con una excelente capacidad de uso de
        imagen de día y de noche. Se puede usar con cualquier cámara de la serie AXIS Q61 o AXIS Q63, habilita el control PTZ
        de un solo clic y el piloto automático para hacer el seguimiento de PTZ en las zonas de visualización. Los incidentes de
        audio activan la detección de audio direccional, que dirige la cámara PTZ hacia la fuente del sonido. Cada sensor tiene
        objetivos intercambiables con enfoque automático, por lo que la flexibilidad es máxima y la configuración muy precisa.
        AXIS Camera Heater Power Supply es necesaria cuando se utiliza AXIS Q6315-LE.`
    },
    {
        id: "9",
        nombre: "Firepower1000",
        tipo: " Smaller businesses",
        categoria:"Firewall",
        marca: "Cisco",
        precio: 1000,
        cantidad: 17,
        img: "/img/firepower1000.jpg",
        detalle: `Con los firewalls de la serie 1000 y Cisco Defense Orchestrator, obtiene una seguridad líder en su clase
        mientras dedica menos tiempo a la administración del firewall.Defense Orchestrator actualiza los firewalls con un
        solo click, elimina automáticamente los conflictos entre las políticas de seguridad superpuestas e incluso centraliza
        la administración de sus reglas de seguridad de imágenes de AWS VPC. La serie Firepower 1000 protege contra malware,
        con actualizaciones de seguridad diarias automáticas de Cisco Talos. Con su arquitectura única, la serie Firepower 1000
        mantiene el rendimiento en condiciones reales, incluso cuando se activa la inspección de amenazas IPS de próxima generación.`
    },
    {
        id: "10",
        nombre: "Firepower2100",
        tipo: "Smaller businesses",
        categoria:"Firewall",
        marca: "Cisco",
        precio: 1000,
        cantidad: 19,
        img: "/img/firepower2100.jpg",
        detalle: `Los firewalls de la serie 2100, parte de la plataforma de seguridad abierta de Cisco, amplían su visibilidad,
        control e inversión en seguridad. Con la serie 2100, la seguridad no se logra a expensas del rendimiento de la red. La
        arquitectura innovadora de Firepower optimiza el desempeño simultáneo de firewall, criptografía e inspección de amenazas,
        manteniéndolo al mando del desempeño de la red. Firepower y Cisco Identity Services Engine se integran y le permiten contener
        rápidamente los puntos finales comprometidos con la cuarentena automática de dispositivos.`
    },
    {
        id: "11",
        nombre: "Firepower4100",
        tipo: "Datacenter",
        categoria:"Firewall",
        marca: "Cisco",
        precio: 1000,
        cantidad: 22,
        img: "/img/firepower4100.webp",
        detalle: `Diseñados para grandes campus y centros de datos, los dispositivos de la serie 4100 le permiten crear firewalls
        lógicos separados para flexibilidad de implementación y optimización de recursos. nspeccione rápidamente el tráfico web
        encriptado, obtenga visibilidad en todas las aplicaciones, detecte y bloquee intrusiones en la red, implemente VPN escalables
        y disfrute de protección integrada contra ataques DDoS. Posee dispositivos de clúster para rendimiento y alta disponibilidad
        para escalar a medida que crece. Posee seguridad de alto rendimiento que permite inspeccionar rápidamente el tráfico web cifrada
        con TLS a través de la aceleración de hardware. Bloqueea los ataques DDoS con Radware Virtual DefensePro (vDP) de grado empresarial, integrado`
    },
    {
        id: "12",
        nombre: "Isa3000",
        tipo: "Industrial",
        categoria:"Firewall",
        marca: "Cisco",
        precio: 1000,
        cantidad: 27,
        img: "/img/isa3000.webp",
        detalle: `ISA 3000 es un dispositivo de seguridad industrial resistente montado en riel DIN que proporciona servicios de firewall,
        defensa contra amenazas y VPN. El término Riel DIN describe un riel de metal de un tipo estándar ampliamente utilizado para montar
        interruptores automáticos y equipos de control industrial dentro de bastidores de equipos. El término deriva de las especificaciones
        originales publicadas por el Deutsches Institut für Normung (DIN) en Alemania. El dispositivo puede ejecutar el sistema operativo ASA
        o Firepower Threat Defense. El Cisco ISA 3000 es de bajo consumo, sin ventilador, con Gigabit Ethernet y un puerto de administración dedicado.`
    },
    {
        id: "13",
        nombre: "NSA2650",
        tipo: "Smaller businesses",
        categoria:"Firewall",
        marca: "Sonicwall",
        precio: 1000,
        cantidad: 14,
        img: "/img/nsa2650.jpg",
        detalle: `SonicWall NSa 2650 ofrecen una prevención de amenazas eficiente en miles de conexiones cifradas y no cifradas para organizaciones
        medianas y empresas distribuidas. Con múltiples puertos GbE, puertos USB duales y módulos de almacenamiento, SonicWall NSa 2650 está diseñado
        para satisfacer las necesidades de cualquier red de tamaño mediano. el NSa 2650 cuenta con un rendimiento de firewall de hasta 3,5 Gbps cuando
        no hay servicios de seguridad activos, y el rendimiento de protección contra amenazas más realista pone al NSa 2650 a 1,5 Gbps, admitiendo velocidades
        Gigabit según la velocidad que recibe de su ISP.`
    },
    {
        id: "14",
        nombre: "NSA2700",
        tipo: "Smaller businesses",
        categoria:"Firewall",
        marca: "Sonicwall",
        precio: 1000,
        cantidad: 10,
        img: "/img/nsa2700.jpg",
        detalle: `El firewall de próxima generación (NGFW) SonicWall Network Security Appliance (NSa) 2700
        ofrece a medianas y grandes empresas un rendimiento líder en la industria con el costo total de propiedad
        más bajo de su clase. Con funciones de seguridad integrales, como prevención de intrusiones, VPN, control de
        aplicaciones, análisis de malware, filtrado de URL y servicios de reputación de IP, protege el perímetro de amenazas
        avanzadas sin convertirse en un cuello de botella. El NSa 2700 se ha construido desde cero con los últimos componentes
        de hardware, todos diseñados para ofrecer un rendimiento de prevención de amenazas de varios gigabits, incluso
        para el tráfico cifrado. Con una alta densidad de puertos (incluidos 16 puertos de 1 GbE y tres puertos de 10 GbE),
        la solución admite redundancia de red y hardware con alta disponibilidad, agrupamiento y fuentes de alimentación duales.`
    },
    {
        id: "15",
        nombre: "NSA6700",
        tipo: "Datacenter",
        categoria:"Firewall",
        marca: "Sonicwall",
        precio: 1000,
        cantidad: 40,
        img: "/img/nsa6700.jpg",
        detalle: `El NUEVO NSa 6700 es un NGFW Gen 7 con conectividad de alta velocidad y protección contra amenazas de varios gigabits.
        Robusto y compacto, el firewall SonicWall 6700 1U tiene interfaces 16 x 1 GbE Cu, 4 x 10G/5G/2.5G/1G CU, 4 x 10G/5G/2.5G/1G SFP+,
        más 25G (8 x) y 40G ( 2x) conectividad para protección contra amenazas de varios gigabits. Ideal para empresas grandes o en crecimiento,
        el NSa 6700 es compatible con SD-WAN y se puede administrar de forma centralizada. Es un cortafuegos de 36 Gbps con UTM completo de 19 Gbps
        y  SonicOS 7. `
    },
    {
        id: "16",
        nombre: "NSA9650",
        tipo: "Datacenter",
        categoria:"Firewall",
        marca: "Sonicwall",
        precio: 30000,
        cantidad: 31,
        img: "/img/nsa9650.jpg",
        detalle: `El SonicWall NSa 9650 brinda a las empresas y centros de datos distribuidos una seguridad profunda y escalable a velocidades de varios gigabits.
        Proporciona seguridad escalable para empresas distribuidas y grandes redes. Con un rendimiento de firewall de 17,1 Gb/s y manteniendo 5,5 Gb/s
        con todos los servicios de seguridad activados, SonicWall NSa 9650 ofrece seguridad profunda a velocidades de varios gigabits. Al utilizar tecnologías
        innovadoras de aprendizaje profundo en SonicWall Capture Cloud Platform, la serie NSa ofrece la detección automatizada y en tiempo real de infracciones
        y la prevención que necesitan las organizaciones.`
    },
    {
        id: "17",
        nombre: "4000-series",
        tipo: "Branch",
        categoria:"Router",
        marca: "Cisco",
        precio: 2000,
        cantidad: 4,
        img: "/img/4000-series.webp",
        detalle: `Los enrutadores de servicios integrados de la serie Cisco 4000 brindan enrutamiento, hosting, seguridad, conmutación y visibilidad de aplicaciones,
        todo en una plataforma única y confiable. Cree su sucursal digital para que sea segura, rápida y escalable. Adopte rápidamente tecnologías avanzadas, como SD-WAN,
        visibilidad mejorada de aplicaciones y computación perimetral, mientras satisface las demandas de alto rendimiento de la red impulsadas por las aplicaciones en la
        nube y la transformación digital. Arquitectónicamente, los ISR de la familia 4000 admiten varios módulos, que se comunican con velocidades internas de hasta 10 Gbps.
        Descritos como una arquitectura multinúcleo distribuida, los modelos 4000 admiten lo que se ha denominado el primer plano de servicios internos de la industria,
        que se distingue del separar lógicamente los datos y los planos de control. El plano de servicios incorpora el procesamiento de software de un amplio espectro de
        servicios orientados a WAN, que pueden ejecutarse simultáneamente, compartir eficientemente la memoria y la CPU de la plataforma, y ​​funcionan de manera tan confiable
        como si se ejecutaran en dispositivos dedicados.`
    },
    {
        id: "18",
        nombre: "8200-series",
        tipo: "Branch",
        categoria:"Router",
        marca: "Cisco",
        precio: 3000,
        cantidad: 10,
        img: "/img/8200-series.webp",
        detalle: `Las plataformas perimetrales de la serie Cisco Catalyst 8200 con el software Cisco IOS XE SD-WAN ofrecen la solución SD-WAN segura
        y escalable en la nube de Cisco para la sucursal pequeña. Las plataformas están diseñadas específicamente para el rendimiento y los servicios
        SD-WAN integrados junto con la flexibilidad para brindar servicios de seguridad y redes juntos desde la nube o en las instalaciones. Tienen una
        amplia variedad de opciones de interfaz para elegir, con compatibilidad con versiones anteriores de los módulos WAN, LAN y de voz existentes.
        Con la tecnología de Cisco IOS XE, una arquitectura de software completamente programable y compatibilidad con API, la serie Catalyst 8200 puede
        facilitar la automatización a escala para lograr una capacidad de TI sin contacto mientras se migran las cargas de trabajo a la nube. Las plataformas
        también vienen con una infraestructura de soluciones 2.0 confiable que las protege contra amenazas y vulnerabilidades a través de la verificación de
        integridad avanzada y la remediación de amenazas. La serie 8200 es ideal para branchs de pequeñas y medianas empresas a una relación precio/rendimiento
        óptima con servicios SD-WAN integrados.`
    },
    {
        id: "19",
        nombre: "8200-uCPE",
        tipo: "Branch",
        categoria:"Router",
        marca: "Cisco",
        precio: 2000,
        cantidad: 16,
        img: "/img/8200-ucpe.webp",
        detalle: `El Cisco Catalyst 8200 Series Edge uCPE (equipo universal para las instalaciones del cliente) está diseñado para la virtualización de Brachs,
        lo que permite la consolidación de funciones de red y seguridad, administración de red simplificada y menos desplazamientos para la entrega de servicios
        complementarios. Cisco® Catalyst® 8200 Series Edge uCPE es la próxima generación de Cisco Enterprise Network Compute System (ENCS) 5100 Series. La plataforma
        es fundamental para la virtualización de sucursales, ya que combina el enrutamiento, la conmutación y el alojamiento de aplicaciones en un dispositivo compacto
        de una unidad de rack (1RU) para la sucursal virtualizada pequeña y eficiente. Cisco proporciona una solución de virtualización de extremo a extremo con el
        software de infraestructura de virtualización de funciones de red (NFVIS) de hipervisor propio de Cisco, funciones de red virtual de enrutamiento (VNF) y
        múltiples opciones de orquestación. Con ocho núcleos de CPU x86 con aceleración de hardware para tráfico criptográfico IPsec, Catalyst 8200 uCPE permite
        que las sucursales ejecuten múltiples VNF. Junto con una mayor cantidad de puertos WAN, la plataforma incluye una ranura de módulo de interfaz de red (NIM)
        para módulos WAN y LAN adicionales, así como una ranura de módulo de interfaz conectable (PIM) para módulos WAN inalámbricos para capacidades LTE Advanced y
        LTE Advanced Pro. Con soporte para Cisco Managed Services Accelerator (MSX), Network Services Orchestrator (NSO) y vManage, la plataforma simplifica la administración
        y orquestación de redes y NFV para SD-WAN e implementaciones tradicionales.`
    },
    {
        id: "20",
        nombre: "8300-series",
        tipo: "WAN-Aggregation",
        categoria:"Router",
        marca: "Cisco",
        precio: 4000,
        cantidad: 8,
        img: "/img/8300-series.webp",
        detalle: `Las plataformas de borde de la serie Cisco Catalyst 8300 son las mejores plataformas de borde en la nube, preparadas para 5G, diseñadas para servicios
        acelerados, seguridad multicapa, agilidad nativa de la nube e inteligencia de borde para acelerar su viaje a la nube. Las plataformas perimetrales de la serie Cisco
        Catalyst 8300 (Catalyst 8300) con el software Cisco IOS XE SD-WAN ofrecen la solución SD-WAN segura y escalable en la nube de Cisco para branch. La serie Catalyst
        8300 está diseñada específicamente para servicios SD-WAN integrados y de alto rendimiento junto con flexibilidad para brindar servicios de seguridad y redes juntos
        desde la nube o en las instalaciones. Proporciona una mayor densidad de puertos WAN y una capacidad de fuente de alimentación redundante. Las plataformas perimetrales
        de la serie Catalyst 8300 tienen una amplia variedad de opciones de interfaz para elegir, que van desde una densidad de módulo más baja y más alta con compatibilidad
        con versiones anteriores hasta una variedad de módulos de WAN, LAN, voz y cómputo existentes. Con la tecnología de Cisco IOS XE, la arquitectura de software completamente
        programable y el soporte de API, estas plataformas pueden facilitar la automatización a escala para lograr una capacidad de TI sin intervención mientras se migran las cargas
        de trabajo a la nube. Las plataformas perimetrales de la serie Catalyst 8300 también vienen con la infraestructura Trustworthy Solutions 2.0 que protege las plataformas contra
        amenazas y vulnerabilidades con verificación de integridad y remediación de amenazas. Las plataformas perimetrales de la serie Catalyst 8300 son ideales para sucursales de
        empresas medianas y grandes para un alto rendimiento WAN IPSec con servicios SD-WAN integrados..`
    },
    {
        id: "21",
        nombre: "NCS-500",
        tipo: "WAN-Aggregation",
        categoria:"Router",
        marca: "Cisco",
        precio: 4000,
        cantidad: 11,
        img: "/img/ncs-500.webp",
        detalle: `La serie NCS 500 ofrece una plataforma de enrutamiento de acceso segura y de alta disponibilidad para los proveedores de servicios. Tanto los factores de forma
        fijos como los modulares admiten automatización avanzada y capacidad de programación para proporcionar 5G, PHY remoto, Carrier Ethernet y FTTx. Los NCS 540 y NCS 560 están
        diseñados para 5G con sincronización avanzada, latencia ultrabaja y capacidad ultraalta. Brindan la base para la banda ancha móvil (MBB) generalizada, IoT masivo, Internet
        táctil, ciudades inteligentes y AR/VR. Los servicios de red convergen de manera inteligente en una única plataforma con la serie NCS 500 altamente escalable y energéticamente
        eficiente. Escale la capacidad de forma flexible con puertos que admiten 1/10/25/40/100 GbE.`
    },
    {
        id: "22",
        nombre: "NCS-5000",
        tipo: "WAN-Aggregation",
        categoria:"Router",
        marca: "Cisco",
        precio: 5000,
        cantidad: 33,
        img: "/img/ncs-5000.webp",
        detalle: `El Cisco® Network Convergence System 5000 Series ofrece un enrutador de agregación MPLS de factor de forma pequeño y alta densidad para agregación metropolitana.
        Está diseñado para escalar económicamente arquitecturas de redes de centros de datos de grandes empresas, over-the-top (OTT) y proveedores de servicios. La serie Cisco NCS
        5000 es una extensión de la cartera de plataformas de enrutamiento de Cisco, que permite a los proveedores de servicios y arquitecturas de centros de datos habilitadas para
        MPLS ofrecer redes elásticas con agilidad comercial mejorada y operaciones simplificadas para brindar servicios móviles, de video y en la nube de gran ancho de banda. También
        puede funcionar como un estante de extensión de los enrutadores de servicios de agregación de la serie Cisco ASR 9000 utilizando tecnología de virtualización de red (nV),
        consolidando múltiples capas en la red y reduciendo drásticamente los costos operativos. Cisco NCS 5001 y NCS 5002 (Figura 1) son sistemas de agregación GE/10GE densos de
        factor de forma pequeño. Impulsado por el sistema de operación de enrutamiento líder en la industria, el software Cisco IOS® XR, el sistema también ofrece funciones ricas
        como el alojamiento de aplicaciones de terceros, la interfaz de máquina a máquina, la telemetría y la entrega flexible de paquetes.`
    },
    {
        id: "23",
        nombre: "NCS-5500",
        tipo: "WAN-Aggregation",
        categoria:"Router",
        marca: "Cisco",
        precio: 4000,
        cantidad: 18,
        img: "/img/ncs-5500.webp",
        detalle: `La serie NCS 5500 ofrece una densidad de puertos de 100 GbE y 400 GbE líder en la industria para manejar el crecimiento masivo del tráfico. Está diseñado para
        la simplicidad operativa y para satisfacer de manera eficiente las necesidades de escalamiento de las grandes empresas, la web y los proveedores de servicios. Cree
        experiencias de red únicas con Segment Routing y EVPN con la tecnología de IOS XR mejorado en la nube. Controle el crecimiento del tráfico con sistemas fijos o
        modulares que ofrecen una densidad de 100G y 400G sin precedentes. Reduzca los impactos ambientales con sistemas que ofrecen un menor consumo de energía (hasta 0,3 vatios/Gb)
        e integrando herramientas de automatización para reducir las operaciones manuales e in situ.`
    },
    {
        id: "24",
        nombre: "NCS-5700",
        tipo: "WAN-Aggregation",
        categoria:"Router",
        marca: "Cisco",
        precio: 5000,
        cantidad: 19,
        img: "/img/ncs-5700.jpg",
        detalle: `Las tarjetas de línea y los enrutadores NCS 5700 brindan escalabilidad y flexibilidad a las redes de proveedores. El enrutamiento de segmento integrado admite
        ofertas de servicios basadas en el rendimiento y los puertos 400G de alta densidad brindan un crecimiento de la red a largo plazo. Escale con la demanda con configuraciones
        de tarjetas de línea disponibles de 3,6, 4,8, 7,2 o 9,6 Tbps por ranura. La nueva generación de tarjetas de línea de la serie NCS 5700
        consta de tarjetas de línea optimizadas de 400 GE y 100 GE tanto en la versión básica como en la versión de escala (SE). La versión a escala admite necesidades de configuración
        mejoradas con base de información de reenvío (FIB) ampliada, calidad de servicio (QoS), listas de control de acceso (ACL), etc. Estas tarjetas de línea son capaces de reenvío
        avanzado de paquetes, enrutamiento de segmentos, administración de red programable y telemetría, junto con las características sólidas y maduras que ya están presentes en el
        software Cisco IOS® XR de 64 bits. Tenga en cuenta que las tarjetas de línea de última generación requieren que se instalen en el sistema tarjetas de fabric y bandejas de
        ventiladores de segunda generación para el chasis modular NCS 5500..`
    },
    {
        id: "25",
        nombre: "Catalyst-9300",
        tipo: "Core",
        categoria:"Switch",
        marca: "Cisco",
        precio: 5000,
        cantidad: 22,
        img: "/img/catalyst_9300.jpg",
        detalle: `La serie Cisco Catalyst 9300, incluido el nuevo modelo Catalyst 9300X, proporciona hasta 1 Tbps de capacidad
        y UPOE+ de 90 vatios en una plataforma de conmutación apilable. Los switches Catalyst 9000 forman la base de Cisco
        Software-Defined Access, nuestra arquitectura empresarial líder para seguridad, IoT y la nube. Los switches Cisco®
        Catalyst® de la serie 9300 son la plataforma de conmutación de acceso empresarial apilable líder de Cisco y, como parte
        de la familia Catalyst 9000, están diseñados para transformar su red para manejar un mundo híbrido donde el lugar de
        trabajo está en cualquier lugar, los puntos finales pueden ser cualquier cosa y las aplicaciones están alojadas. por todo
        el lugar. La serie Catalyst 9300, incluidos los nuevos modelos Catalyst 9300X, continúa dando forma al futuro con una
        innovación continua que lo ayuda a reimaginar las conexiones, reforzar la seguridad y redefinir la experiencia para su
        fuerza de trabajo híbrida, grande y pequeña.`
    },
    {
        id: "26",
        nombre: "Catalyst-9400",
        tipo: "Core",
        categoria:"Switch",
        marca: "Cisco",
        precio: 5000,
        cantidad: 7,
        img: "/img/catalyst_9400.jpg",
        detalle: `Los switches Cisco® Catalyst® de la serie 9400 son la plataforma de conmutación de acceso empresarial modular
        líder de Cisco y, como parte de la familia Catalyst 9000, están diseñados para transformar su red para manejar un mundo
        híbrido donde el lugar de trabajo está en cualquier lugar, los terminales pueden ser cualquier cosa y las aplicaciones
        están alojadas. por todo el lugar. La serie Catalyst 9400, incluido el nuevo supervisor y las tarjetas de línea Catalyst
        9400 SUP-2/2XL, continúa dando forma al futuro con una innovación continua que lo ayuda a reimaginar las conexiones,
        reforzar la seguridad y redefinir la experiencia para su fuerza de trabajo híbrida, grande y pequeña. Las amenazas de
        seguridad persistentes avanzadas, el crecimiento exponencial de los dispositivos de Internet de las cosas (IoT), la
        movilidad en todas partes y la adopción de la nube requieren una estructura de red que integre innovaciones avanzadas
        de hardware y software para automatizar, proteger y simplificar las redes de los clientes. El objetivo de este tejido de
        red es permitir el crecimiento de los ingresos de los clientes acelerando la implementación de los servicios comerciales.`
    },
    {
        id: "27",
        nombre: "Catalyst-9500",
        tipo: "Core",
        categoria:"Switch",
        marca: "Cisco",
        precio: 5000,
        cantidad: 9,
        img: "/img/catalyst_9500.jpg",
        detalle: `La serie Catalyst 9500, incluidos los nuevos modelos Catalyst 9500X, continúa dando forma al futuro con una innovación
        continua que lo ayuda a reimaginar las conexiones, reforzar la seguridad y redefinir la experiencia para su fuerza de trabajo
        híbrida, grande y pequeña. Los switches de la serie Cisco Catalyst 9500 basados en el circuito integrado específico de la aplicación
        (ASIC) de Cisco Unified AccessData Plane (UADP) son la plataforma de conmutación de agregación y núcleo empresarial fijo líder de Cisco
        y, como parte de la familia Catalyst 9000, están diseñados para transformar su red para manejar un mundo híbrido donde el lugar de trabajo
        está en cualquier lugar, los terminales pueden ser cualquier cosa y las aplicaciones están alojadas en todas partes.El conmutador Cisco
        Catalyst 9500X basado en Cisco Silicon One Q200 ASIC está diseñado específicamente para el núcleo de próxima generación con una canalización
        programable (P4) y es el primer silicio de red que ofrece una capacidad de conmutación de hasta 25,6 Tbps en la empresa.`
    },
    {
        id: "28",
        nombre: "Catalyst-9600",
        tipo: "Core",
        categoria:"Switch",
        marca: "Cisco",
        precio: 5000,
        cantidad: 10,
        img: "/img/catalyst_9600.jpg",
        detalle: `Los switches Cisco Catalyst de la serie 9600 están diseñados específicamente para brindar resiliencia a escala con la seguridad más
        completa de la industria y permiten que su negocio crezca al costo operativo total más bajo. Construido sobre la base del Catalyst 9000, el
        Catalyst 9600 Series ofrece escalabilidad y seguridad cuando es imprescindible estar siempre activo. Como elemento fundamental de la arquitectura
        de red digital de Cisco, el switch de la serie Catalyst 9600 ayuda a los clientes a simplificar la complejidad, optimizar la TI y reducir los
        costos operativos al aprovechar la inteligencia, la automatización y la experiencia humana que ningún otro proveedor puede ofrecer, independientemente
        del lugar en el que se encuentre. viaje de redes basado en la intención. Los switches de la serie Catalyst 9600 brindan características de seguridad
        que protegen la integridad del hardware, así como del software y todos los datos que fluyen a través del switch. Proporciona resiliencia que mantiene
        su negocio en funcionamiento sin problemas. Combine eso con las API abiertas de Cisco IOS XE y la capacidad de programación de las tecnologías UADP
        y Silicon1 ASIC, los switches de la serie Catalyst 9600 le brindan lo que necesita ahora con protección de inversión en innovaciones futuras.`
    },
    {
        id: "29",
        nombre: "SWS12-8",
        tipo: "LAN-Access",
        categoria:"Switch",
        marca: "Cisco",
        precio: 5000,
        cantidad: 15,
        img: "/img/sws12-8.jpg",
        detalle: `El SWS12-8PoE tiene una capacidad de conmutación de 20 Gbps. el conmutador SonicWall SWS12-8PoE es compatible con cualquier firewall SonicWall
        de la generación actual y puede ser administrado por completo, ya sea SOHO 250, serie TZ, serie NSa o serie NSsp. El switch SonicWall ofrece conmutación
        de red de alta velocidad a la vez que proporciona un rendimiento y una capacidad de gestión sin igual. Su postura de seguridad unificada, alta densidad de
        puertos y capacidades de rendimiento de varios gigabits lo hacen ideal para implementaciones de pequeñas y medianas empresas (SMB) y sucursales definidas
        por software (SD-Branch). Esto permite que las empresas, grandes o pequeñas, experimenten una transformación digital y se mantengan al día con el panorama
        cambiante de redes y seguridad.`
    },
    {
        id: "30",
        nombre: "SWS12-10",
        tipo: "LAN-Access",
        categoria:"Switch",
        marca: "Cisco",
        precio: 5000,
        cantidad: 14,
        img: "/img/sws12-8.jpg",
        detalle: `El SWS12-10FPoE tiene una capacidad de conmutación de 24 Gbps. Como parte integral de la transformación de sucursales de próxima generación, los
        conmutadores SonicWall se administran a través de firewalls para una administración unificada y de panel único de toda la infraestructura de SonicWall. Al
        integrarse estrechamente con los firewalls, la solución se beneficia de una postura de seguridad unificada y ofrece una solución de seguridad integral que
        simplifica la implementación, la administración y la resolución de problemas.`
    },
    {
        id: "31",
        nombre: "SWS12-24",
        tipo: "LAN-Access",
        categoria:"Switch",
        marca: "Cisco",
        precio: 5000,
        cantidad: 10,
        img: "/img/sws14-24.jpg",
        detalle: `El conmutador SWS14-24 SonicWall ofrece conmutación de red de alta velocidad a la vez que proporciona un rendimiento y una capacidad de gestión sin
        igual. Prioriza cierto tráfico en la red como VOIP para videoconferencias mientras trabaja desde casa, con funciones como QoS. Este switch es ideal para implementaciones
        de pequeñas y medianas empresas (SMB) y de sucursales definidas por software (SD-Branch). SonicWall Switch ofrece la capacidad de implementación sin intervención
        con la capacidad de desplegar rápidamente dispositivos en ramas que se distribuyen a nivel mundial. Los administradores pueden implementar estos conmutadores de
        forma rápida y segura en nuevas ubicaciones sin necesidad de contar con un personal de TI en el lugar que sea costoso. Hardware: Gigabit Ethernet Ports: 24 | SFP+ Ports: 4
        | Total Interfaces: 28 | Memoria (MB): 512 | Flash (MB): 128 | Conmutación: 128 Gbps`
    },
    {
        id: "32",
        nombre: "SWS12-48",
        tipo: "LAN-Access",
        categoria:"Switch",
        marca: "Cisco",
        precio: 5000,
        cantidad: 11,
        img: "/img/sws14-48.jpg",
        detalle: `Posee un número total de puertos de red: 52. Es modular; Detalles de la ranura de puerto/expansión: 48 x Gigabit Ethernet Detalles de la ranura de
        puerto/expansión: 4 x 10 Gigabit Ethernet. Tipo de medios soportados: fibra óptica. Garantiza una seguridad perfecta y elimina la brecha en la postura de seguridad
        que puede surgir con conmutadores de terceros. En conjunto, SonicWall Switch ofrece la capacidad de implementación Zero-Touch con la capacidad de implementar rápidamente
        dispositivos en sucursales repartidas por todo el mundo. Los administradores pueden implementar estos conmutadores de manera rápida y segura en nuevas ubicaciones sin
        necesidad de personal de TI costoso en el sitio. Priorice cierto tráfico en la red como VOIP para videoconferencias mientras trabaja desde casa, con funciones como QoS.
        Segmente fácilmente los dispositivos en la red y mantenga el cumplimiento. La segregación se puede lograr mediante la creación de políticas o VLAN. Funciones como la
        autenticación 802.1X permiten a las empresas mantener el cumplimiento de PCI`
    },
      
]

export const getProducts = () => {
    
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

export const getItem = (id) =>{

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            resolve( products.find( element => element.id === id))
        },2000)
    })
}

export const getCategoryById= (id) =>{

    return new Promise((resolve,reject) => {
        
        setTimeout(() => {
            resolve( products.filter( element => element.categoria.toLocaleLowerCase() === id))
        },2000)
        
    })
}

export const getStock = ( (id) => {

    
    return new Promise((resolve, reject)=>{

        setTimeout(() => {

            resolve(products.find(element => element.id === id))
        },500)
    })
})

