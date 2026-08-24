# Tactical vs Strategic Programming — Resources

**Active track:** Ousterhout (tactical vs strategic programming).  
**Out of scope:** DDD strategic/tactical design. Do not mix vocabularies.

## Knowledge

Tactical programming vs strategic programming: same scale of work, different primary goal.

- [Book: *A Philosophy of Software Design*, Chapter 3 — John Ousterhout](https://web.stanford.edu/~ouster/cgi-bin/book.php)
  Primary source. Use for: “working code isn’t enough,” 10–20% design investment, tactical tornado. Prefer the book over summaries.
- [Lecture notes: “Working Isn't Good Enough” — CS 190, Stanford](https://web.stanford.edu/~ouster/cgi-bin/cs190-winter18/lecture.php?topic=working)
  Ousterhout’s own lecture on the same chapter. Use for: compact official wording of tactical vs strategic programming.
- [Chinese notes of Chapter 3 — kyon.life](https://kyon.life/post/philosophy-of-software-design-3/)
  Close paraphrase of the chapter. Use for: Chinese wording; verify claims against the lecture notes / book.
- [Lecture notes: “The Nature of Complexity” — CS 190, Stanford](https://web.stanford.edu/~ouster/cgi-bin/cs190-winter18/lecture.php?topic=complexity)
  Ousterhout on complexity as incremental, caused by dependencies and obscurity. Use for: why tactical programming loses; later lesson on the three symptoms.

## Wisdom (Communities)

- [Software Engineering Radio #520 — John Ousterhout](https://se-radio.net/2022/07/episode-520-john-ousterhout-on-a-philosophy-of-software-design/)
  Author discussing the book’s claims in the open. Use for: whether the principles are situational.
- [The Pragmatic Engineer interview — Ousterhout](https://www.youtube.com/watch?v=lz451zUlF-k)
  Long-form conversation. Use for: how the ideas play out in industry, not as a substitute for Chapter 3.

## Out of scope — DDD (do not teach from here)

Strategic design (how the domain is carved) vs tactical design (how a model is built inside one context).

### Knowledge

- [Book: *Domain-Driven Design* — Eric Evans (2003), especially Part IV “Strategic Design”](https://www.domainlanguage.com/ddd/)
  Primary source for bounded context, context map, core domain, distillation. Evans named “strategic design”; the later label “tactical design” covers the building-block patterns in earlier parts.
- [Talk: “Eric Evans on DDD: Strategic Design” — InfoQ / JAOO 2007](https://www.infoq.com/presentations/strategic-design-evans/)
  Evans in his own words: context mapping, and when “good enough” is good enough vs when to push for excellence in the core domain.
- [Book: *Implementing Domain-Driven Design* — Vaughn Vernon (2013)](https://www.oreilly.com/library/view/implementing-domain-driven-design/9780133039900/)
  Primary source that popularised the strategic/tactical split as a teaching structure, and deepened aggregates. Use for: tactical building blocks (entity, value object, aggregate, repository, domain event).
- [Article: “DDD Part 1: Strategic Domain-Driven Design” — Petter Holmström / Vaadin](https://vaadin.com/blog/ddd-part-1-strategic-domain-driven-design)
  Careful secondary walkthrough grounded in Evans + Vernon. Use for: subdomain types, context map patterns, a worked EMR example. Not a substitute for Evans.
- [Article: “DDD Part 2: Tactical Domain-Driven Design” — Petter Holmström / Vaadin](https://vaadin.com/blog/ddd-part-2-tactical-domain-driven-design)
  Companion to part 1. Use for: value objects, entities, aggregates as implementable building blocks.
- [Series: “Effective Aggregate Design” — Vaughn Vernon](https://kalele.io/effective-aggregate-design/)
  Primary-author deep dive on the hardest tactical pattern. Use for: consistency boundaries, small aggregates, identity references.

### Wisdom (Communities)

- [Virtual Domain-Driven Design](https://virtualddd.com/)
  Live sessions and recordings (including “When to invest in Strategic design and when in Tactical design”). Use for: practitioners arguing about the polarity, not just definitions.
- [dddcommunity.org](https://www.dddcommunity.org/)
  Historic home of Evans-circle papers. Use for: Vernon’s aggregate series and other canonical essays.

## Gaps

- No primary source maps Ousterhout onto LLM agents. The agent mapping in lessons is a labeled analogy, to be tested in the user's own agent work — not canon.
- No Chinese primary source; kyon.life is a secondary paraphrase.
- No high-trust practitioner community that uses this exact lens on agents. Until one appears, wisdom practice is the user's real sessions, reviewed with the teacher.
