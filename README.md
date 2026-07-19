# Formularios Reactivos con Validaciones — Angular v19

Proyecto del taller de Reactive Forms para la asignatura de Desarrollo Web - Angular.

## Descripción

Formulario de registro de usuario construido con **Reactive Forms** (`FormBuilder` +
`FormGroup`), con validaciones integradas en tiempo real y un **validador
personalizado a nivel de grupo (cross-field)** que compara los campos de
contraseña y confirmación de contraseña.

### Funcionalidades principales
- Formulario de registro con 7 campos: nombre completo, correo, nombre de
  usuario, contraseña, confirmar contraseña, edad y aceptación de términos.
- Validaciones integradas de Angular (`required`, `email`, `minLength`,
  `pattern`, `min`, `max`, `requiredTrue`).
- Validador de grupo reutilizable que verifica que las contraseñas coincidan.
- Mensajes de error específicos por campo, visibles solo tras interacción
  del usuario (`touched`/`dirty`).
- Botón de envío deshabilitado mientras el formulario sea inválido.
- Resumen en pantalla de los datos registrados tras un envío exitoso (sin
  mostrar la contraseña).
- **Opcional implementado:** mostrar/ocultar contraseña mediante un ícono
  de ojo interactivo.
- Formulario básico de inicio de sesión (correo + contraseña).

## Requisitos previos
- Node.js instalado
- Angular CLI (versión 20.3.27, usada para generar este proyecto)

## Instalación

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.