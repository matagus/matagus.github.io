---
title: "Notes on Writing and Documenting"
date: 2021-08-11T09:34:44-03:00
tags:
- writing
- documentation
- notes
---

Dado que me estoy yendo de la empresa en la que trabajé casi 10 años de mi vida y que la tarea que me toca es mi propio *offboarding*, es decir, hacerme absolutamente prescindible documentando todo lo que sólo yo sé o que sólo y puedo explicar, me dieron ganas de estudiar varios artículos sobre cómo escribir mejor en general y tmb sobre cómo armas buena documentación, de tal modo que la documentación que escriba cumpla lo mejor posible su objetivo.

Así que voy a estar leyendo los siguientes artículos que fuí acumulando en [Pocket](https://getpocket.com/) a lo largo de estos últimos 3 años -algunos de los cuales leí e incluso compartí con amigos porque me parecieron muy buenos-, y tomando notas, incluyendo citas, etc:


* [You are what you document](https://www.ybrikman.com/writing/2014/05/05/you-are-what-you-document/) by Yevgeniy Brikman
* [Working Backwards (the Amazon Method)](https://www.productplan.com/glossary/working-backward-amazon-method/) -- ProductPlan blog
* [README-driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) by Tom Preston Werner
* [How Stripe Built a Writing Culture](https://slab.com/blog/stripe-writing-culture/) by RC Victorino
* [Series: Writing Great Documentation](https://jacobian.org/series/great-documentation/) by Jacob Kaplan-Moss
* [Scaling Engineering Teams via RFCs: Writing Things Down](https://blog.pragmaticengineer.com/scaling-engineering-teams-via-writing-things-down-rfcs/) by Gergely Orosz
* [Become a Better Engineer Through Writing](https://academy.realm.io/posts/altconf-kristina-thai-better-engineer-through-writing/) by Kristina Thai
* [Five tips for improving your technical writing and documentation](https://medium.com/@tracymakes/five-tips-for-improving-your-technical-writing-and-documentation-47353723c8a7) by Tracy Osborn
* [The importance of a handbook-first approach to documentation](https://about.gitlab.com/company/culture/all-remote/handbook-first-documentation/) --Gitlab blog
* [Communicating effectively and responsibly through text](https://about.gitlab.com/company/culture/all-remote/effective-communication/) --Gitlab blog

---

## You are what you document

[La razón número uno por la que tantos starups fallan no es el producto sino su distribución](http://blakemasters.com/post/22405055017/peter-thiels-cs183-startup-class-9-notes-essay): no importa qué tan bueno sea el producto si nadie lo usa. Y cuando se trata de software, la documentación *es* la distribución: no importa qué tan bueno sea el código si nadie lo usa. Y [si no está doucmentado entonces no existe!](http://www.mikepope.com/blog/DisplayBlog.aspx?permalink=1680)

La clave es no pensar la documentación como el típio y aburrido "manual de usuario" sino como la parte que hará que tu sofware sea "aprendible": buenas prácticas / ejemplos de uso, tutoriales, white papers, todo lo que sea marketing (landing page, por ejemplo), la comunidad, y obvio la experiencia del usuario.

Habla de tres tipos de documentación. Cada una resuelve / ataca diferentes problemas, razón por la cual todo proyecto de software debe incluir las tres.

### Documentación Escrita

1. **README file**

Todo proyecto debe incluir uno. Es [el archivo más importante del codebase](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) porque es el primer punto de contacto del usuario con el código. O como dice Zach Holman: [el código más importante no es código](http://zachholman.com/posts/documentation/).

Así que el objetivo del README es presentarle el proyecto lo más rápido posible, convencerlo de por qué vale la pena usarlo y por ende aprenderlo bien, y guiarlo para que entienda cómo empezar a utilizarlo y dónde obtener el resto de la información que necesita.

Cosas que debería tener un README:

* Descripción del proyecto
* Breves ejemplos
* Tutorial básico sobre cómo empezar a usarlo / instalarlo
* Links a más docs más avanzados o con más detalle
* Info del proyecto (autores, cómo contribuir, cómo reportar bugs)
* "Legales" (licencia, copyright, etc)


### Tutoriales, instrucciones "paso a paso" y guías

El README le presenta al usuario el proyecto: el tutorial en cambio le muestra algunos casos de uso muy comunes, le
destaca patrones de uso, buenas prácticas y las características principales del mismo. La intención no es ir en
profundidad pero sí mostrarle todo lo importante del proyecto y dejarle links a otras partes de la documentación que
explican cada tópico o feature en detalle.

Si bien en proyectos chicos lo más común es "insertar" un mini-tutorial en el README, en el resto, dada la extensión de
la documentación, lo usual es usar una wiki, un blog con muchos posts al respecto, tener un sitio web entero dedicado a
ella y/o uno o varios videos, incluso un podcast [agrego yo].

Ejemplos de documentación muy buena (todos en inglés):

* [Las guías de Ruby on Rails](http://guides.rubyonrails.org/)
* [Django Docs](https://docs.djangoproject.com/en/3.2/)
* [Los Quickstarts de Twillio](https://www.twilio.com/docs/quickstart)

Lo mejor, sin embargo, son los tutoriales interactivos, que nos permiten ir aprendiendo haciendo algo paso a paso. Por
ejemplo:

* [A Tour of Go](https://tour.golang.org/welcome/1)
* [Try Git](https://try.github.io/)


### Documentación de Referencia

También conocida en inglés como "Reference", la documentación de referencia tiene el propósito de ser el lugar al que
quien está aprendiendo algo (un lenguage, un framework, una herramienta, una librería, etc) va a buscar un concepto,
tópico, qué hace cierta función, método, clase, cualquier otra información útil y detallada. Algunos ejemplos:

* [Documentación de Stripe](https://stripe.com/docs)
* De nuevo la [Doc de Django](https://docs.djangoproject.com/en/3.2/)
* La de [Sqlite](https://www.sqlite.org/docs.html)

Para proyectos muy extensos, escribir y luego mantener al día documentación de referencia para cada parte del mismo es
todo un desafío y mucho trabajo: por eso lo aconsejable es insertar documentación de cada una en el código, incluyendo
también ejemplos de uso, y luego usar alguna herramienta o script que recorra todo el código y nos arme la doc de
referencia. Así cada vez que el programador cambia el código notará que debe también cambiar el comentario-documentación
y el ejemplo :)


### Sitio Web del Proyecto

Tener un sitio web entero dedicado a un proyecto de software es un gran ejemplo de
[documentación como marketing](https://zachholman.com/posts/open-source-marketing/) del mismo: así nuestro proyecto
puede tener su propia identidad, con su estilo, su look and feel, y todo su contenido es linkeable, indexable
y por ende compartible en redes sociales o mensajería. Algunos ejemplos:

* [Bootstrap](https://getbootstrap.com/)
* [Jekyll](https://jekyllrb.com/)
* [Yeoman](http://yeoman.io/)

Una forma muy simple de hostear un sitio web para nuestro proyecto es utilizar [Github Pages](https://pages.github.com/).


### White Papers y libros


