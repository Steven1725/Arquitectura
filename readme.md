# 🏥 Sistema de Gestión de Pacientes

Este es un sistema empresarial para la administración de pacientes. Está diseñado con una separación estricta de responsabilidades entre el servidor y el cliente para garantizar un rendimiento óptimo, alta seguridad y escalabilidad.

---

## 🛠️ Tecnologías Utilizadas

*   **Backend:** Node.js, [NestJS](https://nestjs.com) (Framework Pro), TypeScript, JWT (Seguridad).
*   **Frontend:** [Angular](https://angular.dev) (Framework Enterprise), TypeScript, Formularios Reactivos.

---

## 🟢 Arquitectura del Backend (NestJS)

El backend utiliza una **Arquitectura Modular Orientada al Dominio**. Cada entidad de negocio (Autenticación, Pacientes, Citas) se auto-contiene en su propio módulo con tres capas fundamentales: **Controlador, Servicio y Entidad**.

### 📂 Estructura de Carpetas del Servidor

```text
backend-nestjs/
├── src/
│   ├── app.module.ts         # Módulo raíz que orquesta toda la API
│   ├── main.ts               # Punto de entrada (Inicializa el servidor)
│   ├── common/               # Middlewares, Guards de seguridad y filtros globales
│   ├── config/               # Conexión a Base de Datos y variables de entorno
│   └── modules/              # Módulos del dominio del negocio
│       ├── autenticasion/             # Módulo de Seguridad 
│       ├── pacientes /         # Módulo de Catálogo e Historial de Pacientes
│       └── citas/     # Módulo de Agenda, Calendario y Horarios Médicos
```

### ⚙️ Responsabilidad de sus Componentes

1.  **Módulos (`*.module.ts`):** Son las cajas organizadoras. Conectan las piezas internas del módulo y deciden qué servicios "prestar" o exportar a otros módulos.
2.  **Controladores (`*.controller.ts`):** Actúan como recepcionistas de la API. Escuchan las peticiones HTTP del frontend (`GET`, `POST`, `PUT`, `DELETE`), extraen los datos y delegan el trabajo al servicio.
3.  **Servicios (`*.service.ts`):** Son los trabajadores principales. Contienen la lógica de negocio pura (por ejemplo: encriptar claves, validar que un médico no tenga citas cruzadas u operaciones en la base de datos).
4.  **Entidades (`*.entity.ts`):** El plano o mapa de las tablas de la base de datos. Define qué columnas e información se guarda en el disco duro.
5.  **DTOs (`*.dto.ts`):** El guardia de seguridad de los datos. Revisa que la información que envía el frontend tenga el formato correcto antes de entrar al servidor.

---

## 🔵 Arquitectura del Frontend (Angular)

El frontend está estructurado bajo el patrón **Core, Shared y Features (Características)**. Esto evita el desorden visual y permite reutilizar componentes de interfaz gráfica de manera inteligente.

### 📂 Estructura de Carpetas del Cliente

```text
frontend-angular/
├── src/
│   ├── main.ts               # Punto de entrada de la aplicación en el navegador
│   └── app/
│       ├── app.routes.ts     # Enrutador y sistema de navegación global
│       ├── core/             # Servicios globales únicos (Autenticación e Interceptores HTTP)
│       ├── shared/           # Elementos visuales reutilizables (Navbar, Sidebar, Tablas, Modals)
│       └── features/         # Las pantallas de trabajo (Páginas de la aplicación)
│           ├── dashboard/    # Panel con estadísticas de la clínica
│           ├── patients/     # Pantallas de Lista y Formulario de Pacientes
│           └── appointments/ # Pantallas de Calendario y Detalle de Consulta
```



1. El mismo lenguaje y sintaxis (TypeScript)Ambos frameworks utilizan TypeScript de forma nativa. Esto te permite compartir interfaces de datos, modelos y tipos entre el frontend y el backend

2. Misma arquitectura y curva de aprendizaje cero
 Ambos estructuran el código exactamente igual mediante:Módulos: Para organizar el proyecto en bloques limpios.Controladores / Componentes: Para manejar lo que ve el usuario o lo que recibe la API.Servicios: Para separar la lógica de negocio.Inyección de Dependencias: Ambos usan el mismo sistema para gestionar cómo se comunican las clases entre sí.

 frontend 
Panel de Bienvenida 
Es la primera pantalla que ves al entrar al sistema. Te ofrece un resumen rápido y visual de la clínica a través de tarjetas con números importantes, como el total de pacientes del mes o cuántas citas médicas están programadas para el día de hoy.

historial
 Es un buscador central de personas. Te muestra la lista completa de todos los pacientes registrados en la clínica


Formulario de historial
Es la hoja digital de registro.

Calendario de Citas 
Es una agenda visual interactiva 


Detalle de la reportes 
Es el bloc de notas privado del doctor. Es la pantalla donde el médico atiende la cita, puede cambiar el estado de la reunión a "Completada" y escribir con total libertad el diagnóstico clínico, los síntomas detectados y la receta de medicamentos para el paciente.

Usuarios
Detalla informacion de los pacientes y doctores


backend

Controlador de Autenticación
Es la puerta de entrada para los usuarios al servidor. Recibe las peticiones para registrarse o iniciar sesión, y se encarga de recibir las credenciales (usuario y contraseña) para enviárselas al servicio médico correspondiente.


Módulo paciente 
Es la caja contenedora de esta sección. Se encarga de agrupar y conectar el controlador, el servicio y la base de datos de pacientes, y tiene la función crucial de "prestar" sus servicios a otros módulos (como el de citas) que necesiten validar datos de pacientes.

modulo Citas 
Es la ventanilla digital de la agenda del hospital. Recibe las solicitudes del frontend para apartar una hora médica, consultar los huecos disponibles del calendario o cancelar un turno por pedido del paciente.