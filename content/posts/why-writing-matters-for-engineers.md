---
title: "Why Writing Matters for Engineers"
date: 2021-08-11T18:33:04-03:00
tags:
- writing
- documentation
- engineering
- heroku
- podcasts
description: Mientras estudio y tomo notas sobre "Writing & Documenting" en el marco del trabajo de un programador, me encontré con un episodio del podcast que hace la gente de Heroku Codeish titulado "Why writing matters for engineers" y me lo puse a escuchar y tomar notas. Acá van.
---

Mientras estudio y tomo notas sobre ["Writing & Documenting"](/2021/08/notes-on-writing-and-documenting/) en el marco del trabajo de un programador, me encontré con un episodio del podcast que hace la gente de Heroku, [Codeish](https://www.heroku.com/podcasts/codeish) titulado [Why writing matters for engineers](https://www.heroku.com/podcasts/codeish/118-why-writing-matters-for-engineers) y me lo puse a escuchar y tomar notas. Acá van:

* Tener claro por qué uno está trabajando en lo qe está trabajando, en qué contexto entra y "se engancha" lo que uno como dev está desarrollando, tener en claro el objetivo en el que el equipo se puso de acuerdo, hace que el trabajo sea más motivador, que el equipo se mueva más rápido, y por esto es importante que alguien "baje" a un lugar común todo eso en lo que nos pusimos de acuerdo, el contexto, etc. El famoso "to be on the same page" funciona mejor cuando es por escrito, porque al ponerlo por escrito y cada uno leerlo pueden saltar a la vista que hay diferentes perspectivas, incluso desacuerdos que hay que repensar entre todos, discutir y volver a reformular hasta verdaderamente llegar a una puesta en común.

* En Salesforce tienen un team llamado "Architecture Strategy", que se la pasa escribiendo, documentando, tratando de poner en palabras y explicar para todos qué decisiones de arquitectura se han ido tomando (o sea, no toma la decisiones creo entender *sino que las documenta*) a lo largo del tiempo en la companía.

* Ese mismo equipo también se encarga de "curar" mucha info que anda dando vueltas, decisiones que se toman, destacando ciertas soluciones o procesos o cosas que hayan tenido éxito o funcionado bien, de tal modo que otros equipos estén al tanto de ello y puedan aprovecharlo. Esto está bueno sobre todo en empresas grandes, y mucho más en las del tamaño de Salesforce, en las que es altamente probable que dos o más equipos estén tarbajando en el mismo problema. Por eso es que también se documentan, destacan y comunican las decisiones que se tomaron y que no resultaron bien, y cuáles sí lo hiceron. Eso ahorra mucho trabajo, muchos recursos, y hace que un equipo pueda "contribuir" a lo que hizo otro, construir sobre lo construído en vez de hacer todo de cero.

* Está bueno llevar un "decision record" o sea un registro o log de decisiones. Cada vez que uno decide algo importante, anotarlo, explicar el por qué decidimos hacerlo de esta manera y no de otra. La primera razón es que si uno mismo vuelve a su propio código meses despues, o peor, años despues, generalmente para arreglar un bug, mejorar algo que no anduvo del tood bien, o incluso hacer un gran refactor, vamos a tener todas las herramientas para recordar por qué hicimos lo que hicimos y poder decidir teniendo en cuenat eso. Sirve tmb no sólo para bugs o mejoras sino para cuando algo en el "mundo exterior" cambia, el negocio cambia, y debemos readaptar nuestro código.

* Otra alternativa mucho mejor es utilizar [RFCs (Requests for Comments)](https://es.wikipedia.org/wiki/Request_for_Comments), que es algo muy común en organizaciones de proyectos open source. Comparten con los "decision records" el hecho de que ambos describen cuál era la situación o problema, y qué alternativas se barajaron. Pero la diferencia más saliente entre ambos es que en el decision record una persona o un equipo simplemente registra todo eso e incluye tmb la decisión. En cambio en un RFC lo que uno hace es "pedir por otros puntos de vista, otras ideas, alternativas, etc" pero principalmente se busca la aprobación de todas esas partes a las que se involucra. O sea que la decisión que termina tomando es una decisión coordinada y consensuada.
 
