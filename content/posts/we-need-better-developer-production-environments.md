---
title: "We Need Better Developer Production Environments"
date: 2020-08-31T10:46:32-03:00
draft: true
---

Lo que sigue son apuntes e ideas varias con el objetivo de algún día compaginar todo esto en un post o varios.


> But while programming languages are academically interesting, I think we more desperately need innovation in programming environments.

> The programming environment isn’t a single component of our workflow, but the total sum enabled by the tools working together harmoniously. The environment contains the programming language, but also includes the debugging experience, dependency management, how we communicate with other developers (both within source code and without), how we trace and observe code in production, and everything else in the process of designing APIs to recovering from failure.

Source: [It's the programming environment, not the programming language](https://thesephist.com/posts/programming-environment/)

> Most developers don’t understand open source to be a particular license that certain software artifacts are in compliance with, but an attitude, an ideology. And that ideology isn’t just about the consumption of the software, but also its production. An open source project should have a public bug tracker. There should be a mailing list, for discussion. You should be able to observe, and ideally participate in, the development of the software. Focusing on the code being open is putting the cart before the horse.

Source: [What comes after open source](https://steveklabnik.com/writing/what-comes-after-open-source)


Si bien SK habla de licencias y del consumo de OS code vs producción, ese párrafo está bueno porque muestra que no sólo
importa el code (que esté abiert / escribirlo) sino cómo se produce, qué tools se usan, qué procesos, cómo se organiza
un proyecto, cómo se interactúa dentro de él y con los users que por ejemplo reportan issues o hacen pull requests.

Va otra quote:

> I do a lot of work on open source, but my most valuable contributions haven’t been code. Writing a patch is the easiest part of open source. The truly hard stuff is all of the rest: bug trackers, mailing lists, documentation, and other management tasks. Here’s some things I’ve learned along the way.

Source: [How to be an open source gardener](https://steveklabnik.com/writing/how-to-be-an-open-source-gardener)

--

Yendo un poco más allá: tal vez haya que ampliar el título a "We need better production environments"". No sólo para
devs, y no sólo para open source projects. Tal vez esto tenga que ver también con lo que JS dice en su libro sobre
scrum: ["Work doesn’t have to suck. It can flow; it can be an expression of joy, an alignment toward a higher purpose."](https://matagus.alameda.dev/2020/08/work-doesnt-have-to-suck/). Una vez que uno pone comienza a visualizar y entender cómo nos organizamos, cómo colaboramos, y cómo ello tiene un peso grandísimo en la cantidad de trabajo que hacemos, ahí es cuando comenzamos a preocuparnos más por mejorar todo eso.

---

> Henry: And so either case, you don't think that you can do open source. And so what you're saying makes sense. How do we get people to realize they can contribute back? The whole point of open source is that you can actually be involved in the process, right?

Source: [Hope in Source: MA 4: Mikeal Rogers on Getting Old in Open Source](https://hopeinsource.com/getting-old/#t=25:29)

> Henry: How do we get people to realize they can contribute back? The whole point of open source is that you can actually be involved in the process, right?
>
> Mikeal: Yeah. And I mean I think smaller projects are much easier to contribute to. They don't have a lot of these bigger issues. But I do think that we were ... We're still to some extent really caught up in this BDFL notion. And it's like the fallback sort of governance model. And it just becomes really problematic really quickly if you're trying to encourage people to contribute and to stick around and help maintain it. It's not a good model.
>
> Mikeal: And so I put a lot of time into trying to come up with better practices and principles and document them. And to some extent, I mean it worked. We fixed Node. Node.js works under a lot of those principles. But I don't know that we've really changed the culture in a significant way.
>
> Henry: Right. Well, I guess it also is BDFL works for those small projects, right? And it's more that when they're trying to transition, how do they do that? And maybe it's because they're caught off guard where, like what you said, projects randomly get super popular and then your little pet project randomly becomes the thing everyone uses. And they weren't intending on it to be like that. And then there's no support structure. And we're trying to figure out how to create those guidelines to do that.

Source: [Hope in Source: MA 4: Mikeal Rogers on Getting Old in Open Source](https://hopeinsource.com/getting-old/#t=25:29)


Acá hay un buen punto: por qué la mayoría de las veces es difícil contribuir a un proyecto OS... porque no se trata
simplemente de arreglar una issue sino de que para entrar a contribuir hay toda una barrera de procesos y reglas
implícitos que no se ven, hay todo un setup del environment que es muy difícil, etc. Esa es una de las grandes barreras
creo.

Y yendo más allá: por qué es tan difícil cuando uno ingresa en una empresa empezar a ser productivo? por que no hay
onboardings, hacer el setup de tu environment es alta fiaca / no está documentado / etc, los procesos no son claros, no
hay documentación de las cosas, etc.

--

> Dear Github,
>
> You have done so much to grow the open source community and make it really accessible to users. Somehow you have us chasing stars and filling up squares, improving the world’s software in the process.
>
> However, many of us are frustrated. Those of us who run some of the most popular projects on GitHub feel completely ignored by you.

Source: [Dear Github](https://github.com/dear-github/dear-github)

Y sigue con una lista de issues / grandes problemas. Está bueno porque muestra que hacer open source no es siemplemente
escribir código. Es hacer reviews, es analizar, probar, etc Pull Requests, es manejar permisos y roles de los otros devs
que ayudan en el proyecto, es manejar releases, publicarlas, etc etc etc.

--

> Mikeal: And so Apache had to figure out a way to, one, not just be like a clearing house for branding things Apache, and, two, how do you integrate all of these new developers that had never done open source before? This is a very different time, right? So this project that is coming in to be what they eventually called the incubator and the whole Apache incubation process, a lot of the incubation process is not about the project but about the people. And you have this team of five people that made this project at a company. And they need to open up. They need to change how they work. They can't just do everything in an office together all the time. They need to communicate openly. They need to bring in more contributors.

Source: [Hope in Source: MA 4: Mikeal Rogers on Getting Old in Open Source](https://hopeinsource.com/getting-old/#t=29:22)

Esto Mikeal lo agrega para complementar lo que dice SK, o más bien para mostrar el SK no dice esto sobre la old-school
OS people a la que critica (y a la que pertenece la gente de Apache SF). Está bueno saber esto. Estaría bueno investigar
más sobre los procesos de la incubadra ASF. Luego M critica a la ASF en que mezcló procesos con valores y no dejó claro
que lo q importan son los valores, que los procesos (si bien importan) son mutables, con las circunstancias puede -y
hasta deben- mutar si es que los valores no se están llegando a cumplir.

--

En otro momento Henry dice:

> Henry: Yeah. I guess that gets into the nature of how do we retain information and knowledge transfer across people and our culture through these processes. And I think about the podcast we did on Hope in Source about liturgy. In a religious way, you have those processes and traditions as well. And what do we have in open source that helps us to do that?

Source: [Hope in Source: MA 4: Mikeal Rogers on Getting Old in Open Source](https://hopeinsource.com/getting-old/#t=31:20)


Relacionar esto con lo que dice Foucault sobre el cristianismo: que no es simplemente "la teoría". El cristianimos es
por sobre todas las cosas una serie de prácticas y rituales que nos condicionan, construyen, arman, etc.

--

[Hackers: Heroes of the Computer Revolution](https://en.wikipedia.org/wiki/Hackers:_Heroes_of_the_Computer_Revolution)

Leer caps 1 y 2, y los apéndices, sobre todo el de Stallman.

---

--> [Producing Open Source Software: How to Run a Successful Free Software Project](https://producingoss.com/) by [Karl Fogel](https://www.red-bean.com/kfogel/)


