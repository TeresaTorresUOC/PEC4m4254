
 **PEC3**

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

**Ejercicio 3:**

En esta parte utilicé la directiva `ngIf` para mostrar u ocultar los botones de control en función de la disponibilidad del producto, de modo que si el artículo no estaba en venta, los botones no aparecían. Además, apliqué estilos condicionales al precio, haciéndolo visible en gris cuando el artículo no estaba disponible para la venta.

### **Ejercicio 4:**

En este ejercicio creé el componente `article-list`, encargado de gestionar un conjunto de artículos. Utilicé `ngFor` para listar varios elementos en pantalla y establecí comunicación entre el componente padre y el hijo mediante `Output`. La lógica de incrementar y decrementar cantidades se trasladó desde `article-item` hacia `article-list`, tal como pedía el ejercicio, centralizando la gestión dentro del componente padre.

### **Ejercicio 5:**

Aquí desarrollé una barra de navegación que permite alternar entre diferentes secciones de la aplicación utilizando `*ngIf`. Integré correctamente los componentes `article-list`, `article-new-template` y `article-new-reactive`, de manera que cada uno se muestra únicamente cuando corresponde según la opción seleccionada en el menú.

### **Ejercicio 6:**

Este ejercicio consistió en implementar un formulario basado en plantillas utilizando un `FormGroup`. Añadí validaciones como campos obligatorios, validación numérica para el precio y validación mediante expresión regular para comprobar URLs válidas. Los mensajes de error aparecen de forma dinámica cuando el usuario interactúa con los campos o cuando se intenta enviar el formulario sin cumplir los requisitos. También se gestionó correctamente el estado `touched` y la lógica asociada a `submitted`.

### **Ejercicio 7:**

En el último ejercicio desarrollé un formulario completamente reactivo empleando `FormBuilder`. Creé una validación personalizada llamada `NameArticleValidator` que impide introducir ciertos nombres como “Prueba”, “Test”, “Mock” o “Fake”. Además, añadí la validación de precio mínimo de 0.1 €, una expresión regular para verificar la validez de la URL de la imagen y la gestión de errores según la interacción del usuario o el intento de envío. Al enviar un formulario válido, los datos se muestran en la consola, sin añadirse aún a la lista de artículos, tal y como establece el enunciado.

**Dificultades encontradas**

Durante el desarrollo han surgido varias dificultades:

Yo había trabajado anteriormente con Angular 15, donde todavía se usaban módulos, y con Angular 19 donde el enfoque es 100% standalone y cambia la estructura de los componentes.
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


