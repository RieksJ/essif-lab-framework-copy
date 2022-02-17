---
id: objective
title: "Objective"
scopeid: essifLab
type: concept
typeid: objective
stage: draft
hoverText: "Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action)."
glossaryText: "Something toward which a %%party^party%% (its %%owner^owner%%) directs effort (an aim, goal, or end of action)."
date: 20210601
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Short Description
An **Objective** is something toward which a %%party|party%% (its %%owner|owner%%) directs effort (an aim, goal, or end of action). Typically, the realization of an objective can be observed in terms of results, e.g. products that have been produced, services that are being provided, a situation or state (e.g. happiness) that has been continued etc. A %%party|party%% that has an objective does not necessarily produce these results itself; it may also seek to realize them in order to use (consume) them - thus, production and consumption of results are the two different perspectives from which an objective can be perceived.

The %%ownership|ownership%% of the objective is implied, as it is part of that party's %%knowledge|knowledge%% (which is %%owned|owned%% by that %%party|party%%). Consequently, a single objective cannot be shared, as it would imply it had multiple %%owners|owner%%. A %%party|party%% that %%owns|owner%% an %%objective|objective%% also (implicitly) owns the associated %%risk|risk%%.

In order to communicate its objectives, a %%party|party%% typically uses a text - a description of its intention, the aim, the goal, etc. In practice, people are known to confuse this description with the objective itself, which may cause them to think that two parties shared the same objective becasue these parties happen to use the same descriptive text. As mentioned before, that's not possible. However, it may be the case that two parties each have an objective that is similar to a very high degree. However, as each party can autonomously change the descriptive text, (the specification of) the results and any other attributes, it is obvious that what might seem to be the same objective is actually a set of (very) similar objectives.

There are various ways for %%parties|party%% to come to grips with specifying and %%managing|management%% (or %%governing|governance%%) their %%objectives|objective%%. Here are some examples:
- %%Organizations|organization%% (specifially those with a rather large %%scope of control|scope-of-control%%) are known to classify their %%objectives|objective%% according to (business) topics such as finance, (information) security, safety, quality, legal, human resources etc. This allows them to specify %%objectives|objective%% that are particular to such topics, and define equally specific %%management|management%% and/or %%governance|governance%% processes for their realization.
- %%Organizations|organization%% that realize that their departments (and sub-departments) are actually %%parties|party%% that each have their %%own|owner%% set of %%objectives|objective%%, may require such departments to specify their own %%objectives|objective%% and associated %%management|management%% and/or %%governance|governance%% process(es). The %%organization|organization%% would, however, need to specify %%objectives|objective%% that state what it expects of such departments, and an associated %%governance|governance%% process to ensure the expected results are produced.
- %%Organizations|organization%% are also known to create %%objectives|objective%% for (primary and/or secundary) business processes; such %%objectives|objective%% can be grouped around a process, or cluster of related processes, for efficient and effictive %%management|management%%. Examples include %%compliance objectives|compliance-objective%% (i.e. %%objectives|objective%% of a %%compliance|compliance%% process), and %%risk objectives|risk-objective%% (i.e. %%objectives|objective%% of a %%risk management|risk-management%% process).
- %%Organizations|organization%% may classify their %%objectives|objective%% using the [formalization of objectives](./objective#formalization) (and the %%governance and management pattern|pattern-governance-and-management%%), e.g.
  - expectations, i.e. %%objectives|objective%% the result of which is consumed, but not produced by the %%organization|organization%%. Such %%objectives|objective%% are not %%managed|management%% but %%governed|governance%%, and hence require communications with the %%parties|party%% that produce the expected results;
  - obligations, i.e. %%objectives|objective%% the result of which is produced by the %%organization|organization%% and consumed by (at least) one other %%party|party%%. Such %%objectives|objective%% are %%managed|management%%, and also require communication with the consuming %%parties|party%%, e.g. in terms of advertising the results so that consuming %%parties|party%% will request the produced results, or in terms of responding to %%parties|party%% that request to produce certain results;
  - controls, i.e. %%objectives|objective%% the result of which is produced and (only) consumed by the %%organization|organization%% itself. These %%objectives|objective%% must be %%managed|management%% and %%governed|governance%% by the %%party|party%% that %%owns|owner%% them, and any 'communication' would be between %%actors|actor%% of that %%party|party%%.

We refer you to the %%Governance and Management pattern|pattern-governance-and-management%% for a description of how to think about objectives in contexts where there are multiple %%parties|party%%.

### Purpose
The ability to distinguish between (non)objectives is relevant as objectives are the drivers behind the reasoning and decisions that %%parties|party%% make, the %%policies|policy%% and working instructions that they specify so that its %%agents|agent%% know what to do, when to do it, and how to do it. Moreover, objectives are 1-1 associated with %%risks|risk%%. Finally, objectives must be known in order to obtain (personal) data according to the [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj).

### Criterion
An **objective** is something
- that is %%owned|owned%% by a single %%party|party%%;
- toward which its %%owner|owner%% directs its efforts: an aim, goal, or end of action - this action is related to the the owner producing the associated results (%%management|management%%) and/or consuming the results (%%governance|governance%%);
- that can be realized, and this realization can be seen in terms as the coming into existence of results (e.g. products, services, a situation or state (e.g. happiness));
- that may have a description (text, that represents and identifies the objective within the %%knowledge|knowledge%% of its %%owner|owner%%).

### Examples
- generically: anything that, according to a %%party|party%% c.q. its way of thinking, is important to be realized or maintained, qualifies as an objective (and identifies its %%owner|owner%% as that %%party|party%%).
- most people have an objective that could be described as "to stay alive".
- the equivalent in %%organizations|organization%% is 'continuation of its existence' (many %%organizations|organization%% operate 'business-continuity processes' to realize this, and to identify and mitigate any associated %%risks|risk%%).

### Formalization

Here is a visual representation of the formalization of this concept, using the following **[notations and conventions](../notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="A Party's Objectives"
  src={useBaseUrl('images/essif-lab-objective.png')}
/>

*Figure 1. Parties and their objectives.*

The figure shows that every objective has a single %%owner|owner%%, which is the %%party|party%% that aims to realize the associated result(s).

This %%party|party%% may describe the %%objective|objective%%, typically in terms of a text (or speech), using its own wording. This description identifies the objective in the context/%%knowledge|knowledge%% of its %%owner|owner%%, implying that it may be misinterpreted by others. In particular (and specifically if the description is limited to a single phrase/sentence), %%parties|party%% may (or may not) be right in thinking they have a similar objective, or even erroneously think they share that objective in the sense that they both own the objective, which is not possible in this way of thinking.

Whether or not an objective is realised should be determinable, also by other %%parties|party%%, by the results that must (continue to) exist. Such results can be products that have been produced, services that are (continuously) being provided, a situation or state (e.g. happiness) that has been continued etc. Results are typically auditable, and depending on the kind of result an auditor might establish their existence (and as the case may be: their (proper) design and/or operation). But it is not necessarily the owner of the objective that has produced them, as we shall see.

An objective can be seen from two different perspectives. In the %%governance|governance%% perspective, a %%party|party%% ensures that the associated results become (or remain) available so that the %%party|party%% can actually use them. In this perspective, a %%party|party%% does not care who produces the results, nor how they are being produced. We say that the %%party|party%% %%governs|governance%% the objective, and will be consuming the associated results.
In this %%governance|governance%% perspective, a %%party|party%% will typically determine which (possibly other) %%party|party%% will be producing (and/or providing it with) these results. Also, it may think of a [fallback scenario](https://en.wikipedia.org/wiki/Best_alternative_to_a_negotiated_agreement), e.g. select alternative producers it may contact in case the producer fails to deliver.
However, it can (try to) communicate with the producing %%party|party%%, and see if the properties of the results it requires (so that they are fit for the purposes for which they are going to be used) match the properties of the results that are provided.

In the %%management|management%% perspective, a %%party|party%% ensures that the associated results become (or remain) available by producing them (or obtaining them in some other way), and making them available to (possibly) other %%parties|party%% that will be using them. This means planning (of budgets and other resources, timelines, etc.), specifying the results that it will be producing, organizing (the efficiency of) the actual production, instructing its %%agents|agent%% that do the actual production, etc. Managing these results also includes marketing thereof, trying to find %%parties|party%% that will actually want to use them. And it can communicate with (prospective) consumers, and see if the properties of the results it will be producing match the properties required by its customers.

### Chaining, Managing and Governing Objectives,

%%Objectives|objective%% can be 'chained', which is equivalent with saying that the result that is produced to realize one %%objective|objective%% is subsequently consumed by another one. This is shown in the figure below

<img
  alt="High-level transaction negotiation"
  src={useBaseUrl('images/essif-lab-objective-symbolnotation.png')}
/>

*Figure 2: Chaining Objectives - results produced in one objective are consumed in another*

The figure shows four %%parties|party%% (Red, Yellow, Blue and Green) and their associated %%scopes of control|scope-of-control%%. Within these, they %%own|owner%% the %%objectives|objective%% (the figure shows 6 %%objectives|objective%% owned by red and one for each of the other %%parties|party%%). The figure in the top right hand corner of the rectangle that represents an %%objective|objective%%, is the %%party|party%% that the %%owner|owner%% of the %%objective|objective%% expects to produce the %%objective's|objective%% results. It is not necessary that such a %%party|party%% is known all the time (e.g. %%objective|objective%% Obj-1a).

The arrows indicate that results produced to realize a certain %%objective|objective%% (at the source of the arrow) are (to be) used to produce the results of another %%objective|objective%% (at the end/tip of the arrow).

%%Parties|party%% that %%own|owner%% %%objectives|objective%% need to distinguish between the following kinds:

1. An **expectation** of a %%party|party%% is an %%objective|objective%% that it %%owns|owner%%, but does not itself produce the associated results for. As a consequence, it will then need to decide from what other %%party|party%% it will obtain the results. In other words, expectations must be %%governed|governance%%.
2. An **obligation** of a %%party|party%% is an %%objective|objective%% that it %%owns|owner%%, but does not itself consume the associated results. It does produce the results because there is not point in owning an %%objective|objective%% unless one produces and/or consumes it. Therefore, obligations must be %%managed|management%%.
3. A %%control objective|control-objective%% is one where the %%owner|owner%% both produces and consumes the results. The process for managing the production and governing the consumption of results are best integrated.

For more information, e.g. about how different %%parties|party%% interact in their roles of producer and consumer, we refer you to the %%Governance and Management pattern|pattern-governance-and-management%%.