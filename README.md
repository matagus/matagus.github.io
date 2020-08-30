# Hi there!

This is the source code for my website. It's hosted on [Github Pages](https://pages.github.com/), DNS records by [Cloudflare.com](https://www.cloudflare.com/) and it has been built using some cool open source tools:

* [Hugo](https://github.com/gohugoio/hugo): The world’s fastest framework for building websites.
* [Hugo Ink Theme](https://github.com/knadh/hugo-ink): Crisp, minimal personal website and blog theme for Hugo.
* A [github workflow](https://github.com/matagus/matagus.github.io/blob/master/.github/workflows/gh-pages.yml) composed by three [Actions](https://github.com/features/actions):
 1. Repository checkout using [actions/checkout](https://github.com/actions/checkout)
 2. Hugo setup using [peaceiris/actions-hugo](https://github.com/peaceiris/actions-hugo)
 3. Gihub Page deploy and build using [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

Enjoy!
