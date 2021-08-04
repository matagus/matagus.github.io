---
title: "When Pinterest Was Initially Scaling Their Site"
date: 2021-08-04T09:14:35-03:00
tags:
- scalability
- simplicity
- architecture
---

> When Pinterest was initially scaling their site back in 2011 to handle rapid growth, they used 6 different storage technologies (MySQL, Cassandra, Membase, Memcache, Redis, MongoDB) across a backend team of only 3 engineers. 1 Each new technology they experimented with promised on paper to address some limitation of their existing system. But instead, they found that each new solution just failed in its own special way and took more time and effort to manage and maintain. Eventually, the team learned that it would be simpler to scale by adding more machines rather than more technologies, so they eliminated systems like Cassandra and MongoDB and strengthened the remaining components of their architecture.

source: [The Hidden Costs That Engineers Ignore](http://www.effectiveengineer.com/blog/hidden-costs-that-engineers-ignore?utm_source=pocket-ff-recs) by Edmond Lau
