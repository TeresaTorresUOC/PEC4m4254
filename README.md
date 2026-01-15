**PEC3 / PEC4**

**Login UOC:** ttorrestorre

**Nombre y apellidos:** Teresa Torres Torres


**Descripción general de la práctica**

En esta PEC he desarrollado una aplicación Angular completa llamada ecommerce, siguiendo todos los ejercicios indicados en el enunciado, desde la instalación de Angular CLI hasta la creación de componentes, directivas, formularios template-driven y formularios reactivos.

La aplicación contiene:

* Un sistema de navegación navbar  que permite cambiar entre diferentes vistas sin usar routing.
* Una lista de artículos article-list generada dinámicamente mediante `ngFor`.
* Un componente individual de artículo article-item optimizado con ChangeDetectionStrategy.OnPush y comunicación padre/hijo mediante `Input` y `Output`.
* Directivas `ngIf` y `ngClass` para mostrar/ocultar botones y cambiar estilos según las condiciones.
* Un formulario template-driven con FormGroup en el  ejercicio 6.
* Un formulario reactivo con FormBuilder** y un validador custom en el Ejercicio 7.
* Gestión completa de validaciones: campos obligatorios, numéricos, regex para URL y restricción de nombres no permitidos.

Todo el proyecto se ha desarrollado con Angular 18, formato standalone components, sin módulos tradicionales.

## Ejecución (PEC4)

El backend `server-articles` se encuentra fuera del proyecto Angular, en la misma carpeta padre que `ecommerce`.

### Backend (server-articles)

```bash
cd ../server-articles
npm i
npm start
```

Endpoints esperados:

* `GET http://localhost:3000/api/articles`
* `POST http://localhost:3000/api/articles`
* `PATCH http://localhost:3000/api/articles/:id` con `{ changeInQuantity: number }`
* `POST http://localhost:3000/user/login`
* `POST http://localhost:3000/user/register`

Si hay problemas de CORS, habilitar acceso desde `http://localhost:4200` en el backend.

### Frontend (ecommerce)

```bash
npm i
npm start
```

La app consume el backend en `http://localhost:3000` con:

* Articles: `http://localhost:3000/api/articles`
* Auth: `http://localhost:3000/user/login` y `http://localhost:3000/user/register`


**Tecnologías y características utilizadas**

* Angular 18 Standalone components
* Angular CLI
* FormBuilder y ReactiveFormsModule
* Validaciones nativas + validadores personalizados
* Directivas estructurales y de atributo
* Comunicación entre componentes
* Estilos inline y CSS propio
* Control de vistas con `*ngIf`
* Git para seguimiento de cambios



**Resumen de los ejercicios realizados**

**Ejercicio 1:**

En este ejercicio se creó el proyecto Angular utilizando Angular CLI, generando la estructura inicial y ejecutando la aplicación para mostrar el Hola Mundo en el navegador. Aunque el proceso se realizó correctamente, me di cuenta de que olvidé realizar los comandos de Git en este punto inicial, algo que fui corrigiendo en ejercicios posteriores.
 
**Ejercicio 2:**

En este ejercicio desarrollé el componente `article-item`, encargado de mostrar un artículo individual. También creé el modelo `Article` con sus propiedades correspondientes. Implementé estilos condicionales usando `ngClass` para destacar los artículos en oferta y añadí la funcionalidad de incrementar y decrementar la cantidad de artículos mediante botones, permitiendo un comportamiento dinámico y actualizado en tiempo real dentro del componente.

@@ -75,26 +109,25 @@ Yo había trabajado anteriormente con Angular 15, donde todavía se usaban módu
Al usar Angular 18 he tenido que adaptarme al formato standalone components, imports manuales de cada componente y estructura sin módulos.

He tenido algunos problemas con imports y rutas. Al avanzar los ejercicios, especialmente al agregar `article-list`, `article-new-template` y `article-new-reactive`, algunos componentes no se importaban correctamente, especialmente por la diferencia entre:

* `ArticleNewTemplateComponent`
* `ArticleNewTemplate`

Tuve que corregir rutas, revisar nombres de clases y mantener coherencia en las importaciones.

 Adaptación del ejercicio 3

Al adaptarme al ejercicio 3, tuve que mover la lógica del `article-item` al componente padre en el Ejercicio 4, lo cual inicialmente produjo errores porque `article-item` seguía teniendo código antiguo. Eliminé esa lógica y reorganicé correctamente la comunicación padre → hijo → padre.



Otro de las dificultades que he tenido es especialmente el validator personalizado del Ejercicio 7, combinando el validador custom con validador regex, touched, submit y FormBuilder.

**Mejoras realizadas**

* Uso de colores personalizados para destacar productos en oferta.
* Diseño del navbar más visual y organizado.
* Separación limpia de componentes para mayor claridad.
* Validaciones visuales muy claras, igual que en los ejemplos.
* Código organizado por carpetas (models, validators).

