Querida Sol, 

Felicitaciones por tan hermoso trabajo. Tengo que destacar el esfuerzo que pusiste en el maquetado: se nota aca no solo tu talento sino lo bien que fuiste incorporando las distintas herramientas que vimos. Se que el tiempo no estuvo de tu lado en este TP y me alegra notar que, en general, priorizaste entregar un trabajo funcional a agregar funcionalidades que no pudiste terminar y que quedaran a medias. 

A nivel visual, tu web se ve impecable para desktop. El responsive no esta implementado, y te diria que, de querer continuar mejorando este proyecto, deberia ser lo primero que encares. Tambien valdria la pena que pongas algun estilado cuando los botones de primera o ultima pagina esten deshabilitados. 

A nivel comportamiento, hay varias cositas que faltan, pero insisto en que al privilegiar entregarme algo funcional, esta falta no se siente a menos que estemos buscandolas. Me parece bien esta decision si queres compartir este trabajo (deberias compartirlo en tus redes y agregarlo a tu portfolio una vez que este el responsive!). Algunas de las cosas que noto que se deberian arreglar son:

- Al buscar el detalle de un comic o personaje, deberiamos hacer un nuevo fetch a la API. 
- En la descripcion del comic, si la descripcion es faltante aparece vacia. No parece estar implementada la busqueda de autores o fecha. Fijate de anticipar estos faltantes en la API o en tu codigo con la logica del tipo: si no hay descripcion, entonces agrego un `<p>` que diga "no hay descripcion", etc. 
- El detalle de un personaje deberia ser distinto al de un comic. 
- No se ven los personajes en el detalle de un comic, ni los comics en el detalle de un personaje. Esto implica otro fetch, y era uno de los puntos mas ambiciosos del TP: te recomendaria encararlo cuando tengas tiempo ya que vas a aprender mucho haciendolo.
- Los botones de "prox pagina" siguen estando en el detalle de un personaje o de un comic, y si los oprimo voy a ver la busqueda. 
- Siempre veo "0 resultados". Esto no deberia ser un arreglo dificl, ya que la API informa cuantos resultados vienen en cada fetch.
- El offset se mantiene en todas las busquedas: es decir, si busco comics de la A a la Z, voy a la ultima pagina, busco comics de la Z a la A, terminas haciendo la busqueda con el offset de la anterior. 
- El filter no esta implementado correctamente, ya que estas filtrando sobre los 20 comics que tengo actualmente en la pagina en lugar de hacer el fetch correspondiente a la API de Marvel. 

No se bien si comentarte una o varias de estas cosas en mas detalle. Tengo entendido que lo que te faltó fue tiempo, y no que no pudieras hacer estas cosas, pero en caso de que hayas tenido una traba de tipo tecnico para poder resolver estas cosas, no dejes de consultarme. 

A nivel codigo, 

Tu HTML esta muy bien. Usas buen las etiquetas semanticas, la accesibilidad esta aceptable. Usaste bien las clases. Tu Sass esta muy desaprovechado: si bien me demuestra que entendiste los conceptos vistos (salvo mixins), hay una sola variable y ningun intento de aplicar arquitectura. Todo lo que es font, todo lo que es tamaños, todo lo que es margenes, etc, deberia estar en alguna variable. Eso incluye los estilos mobile. Separar los estilos en archivos para cada componente lo hace mucho mas mantenible, ni hablar de aplicar la arquitectura 7-1 que vimos. Noto muchas desprolijidades a lo largo del HTML y del Scss, codigo comentado, identado desprolijo. 

Tu JS esta bien. Usas correctamente los conocimientos vistos a lo largo del modulo, tu codigo en general es prolijo y bien funcionalizado. Hay cierta dependencia del codigo de un TP anterior, que quiza no haya sido la mejor opcion aqui. 

La parte mas jugosa de este TP estaba en la comunicacion con la API de marvel, que tiene muchas variables e implica mucha logica. Eso es lo que mas falta en tu TP, y lo que mas se lamenta: te diria que, con tiempo, trates de completarlo ya que vas a aprender mucho. QUiza no con JS... puede ser un proyecto para hacer con React!

Con respecto a tu github, celebro que hayas ido trabajando correctamente commit a commit y que tengas varias branches. el readme es bueno: Quiza quieras mencionar tambien que el usuario va a tener que tener LiveServer para ejecutarlo en local. 

La calidad de tu trabajo es alta: tengo claro que la mayor limitacion fue el tiempo. Dicho eso, tengo que ponerte una nota "no tan buena", a pesar de que tu codigo esta excelente, por las funcionalidades que faltan.

 
  ✔️ Respeta la consigna
  ✅ Respeta el diseño dado
  ✔️ Respeta el funcionamiento
  ❌ Responsive funciona correctamente

  ✅ HTML semántico
  ✅ Código bien indentado
  ✅ Buenos nombres de clases
  ✅ Buenos nombres de funciones y variables
  ✔️ Uso de variables (SASS)

  ❌ Buena estructura y separación de archivos (SASS)
  ✅ Correcto uso de estilos anidados (SASS)
  ✅ Nombres de branchs adecuados

  ❌  Componentización de estilos (SASS)
  ✅ Funciones pequeñas
  ✅ Lógica clara y simple
  ✅ Separación clara de manejo de datos y visualización

  ✅ Reutilización de lógica / funciones
  ✅ Commits con mensajes adecuados

Nota final: **7**
