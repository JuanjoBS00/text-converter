# TextConverter

Esta aplicación tiene la principal finalidad de crear mediante el uso del framework Angular una SPA (Single Page Application), la cual gestione el paso de información entre componentes padres e hijos. 

Para ello, se ha creado un convertidor de texto, aplicación la cual manipula un texto inicialmente introducido por el usuario mediante la elección de varias opciones disponibles. Por ejemplo, puede convertir a mayúscula o minúscula el texto introducido, así como transformar el mismo en un enunciado exclamativo o interrogativo.

En el caso de este proyecto, se han creado tres componentes que se comunican entre sí: entryarea (cuadro en el que el usuario introduce el texto que desee), outcomearea (cuadro en el que se muestra el texto transformado una vez elegida la operación) y actionsarea (engloba los botones que permiten elegir las diferentes opciones de manipulación). Asimismo, se ha creado un servicio (Actions Service) que permite la transferencia de información entre dichos componentes.

Las operaciones que se pueden realizar con el texto introducido son:

- Mayúscula: Convierte el texto introducido a mayúscula.
- Minúscula: Covierte el texto introducido a minúscula.
- Exclamación: Transforma el texto introducido por el usuario en un enunciado exclamativo. P.Ej: Qué tal --> ¡Qué tal!
- Interrogación: Transforma el texto introducido por el usuario en un enunciado interrogativo. P.Ej: Qué tal --> ¿Qué tal?
- Cuenta A: Muestra la cuenta de los caracteres "a" o "A" encontrados  en el texto introducido por el usuario.
- Vaciar: Vacía el texto introducido en el cuadro habilitado para la edición del usuario.

Enlace de la aplicación desplegada: https://juanjobs00.github.io/text-converter/

¡Espero que te guste!
