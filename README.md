# InfoSalud

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PrimeNG](https://img.shields.io/badge/PrimeNG-0288D1?style=for-the-badge&logo=primeng&logoColor=white)
![PrimeFlex](https://img.shields.io/badge/PrimeFlex-607D8B?style=for-the-badge&logo=primeng&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Descripción

Este proyecto es una aplicación frontend desarrollada en Angular y soportada por un backend en Node.js. Utiliza **PrimeNG** y **PrimeFlex** para componentes de interfaz de usuario y diseño flexible.

## Requisitos

- **Angular CLI**: 13.x o superior
- **Node.js**: 16.x o superior
- **NPM**: 8.x o superior

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/mi-proyecto-angular.git
    ```

2. Ve al directorio del proyecto:

    ```bash
    cd mi-proyecto-angular
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Ejecuta la aplicación:

    ```bash
    ng serve
    ```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los lineamientos establecidos en el archivo `CONTRIBUTING.md`.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.


## Estructura de carpetas

InfoSalud-Frontend/
│
├── e2e/                       # Pruebas end-to-end
│   ├── src/                   # Código fuente de las pruebas E2E
│   └── protractor.conf.js      # Configuración de Protractor
│
├── src/                       # Código fuente principal de la aplicación
│   ├── app/                   # Código de la aplicación Angular
│   │   ├── components/        # Componentes de la interfaz de usuario
│   │   ├── services/          # Servicios que manejan la lógica de negocio
│   │   ├── models/            # Modelos de datos e interfaces
│   │   └── app.module.ts      # Módulo principal de la aplicación
│   │
│   ├── assets/                # Archivos estáticos (imágenes, fuentes, etc.)
│   ├── environments/          # Configuraciones de entorno (dev, prod)
│   ├── index.html             # Archivo HTML principal
│   ├── main.ts                # Punto de entrada de la aplicación
│   ├── polyfills.ts           # Polyfills necesarios para soportar navegadores antiguos
│   └── styles.scss            # Estilos globales de la aplicación
│
├── angular.json               # Configuración del proyecto Angular
├── package.json               # Dependencias y scripts del proyecto
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Documentación del proyecto
|
