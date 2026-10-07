# Academy Lab Authoring Standard

[← Academy Home](ACADEMY.md) · [Curriculum Graph →](CURRICULUM.md)

This is the publication contract for new labs and the target standard for progressively modernizing older labs.

## Required lesson structure

### 1. Why this lab matters
Explain the operational or engineering problem before introducing commands.

### 2. Learning objectives
Use observable outcomes: *identify*, *submit*, *trace*, *compare*, *authorize*, *recover*, *validate*. Avoid objectives such as “understand X” unless the lab shows how that understanding is tested.

### 3. Prerequisites
Link the exact earlier lesson or course. Separate required knowledge from optional background.

### 4. Architecture context
Show where the component sits and who owns the adjacent responsibilities.

### 5. Theory before execution
Explain the control flow and important z/OS objects before asking the learner to type commands.

### 6. Experiment plan
State baseline, intended change, expected result, evidence to collect and rollback.

### 7. Procedure
Commands, JCL and source must be reproducible. Explain important operands rather than presenting unexplained command blocks.

### 8. Evidence walkthrough
Every important screenshot must have a caption and interpretation.

Use this pattern:

> **Evidence N — short title.**  
> **Observe:** what the learner can literally see.  
> **Interpret:** which component/state/message explains it.  
> **Why it matters:** what capability this proves.  
> **Boundary:** what this evidence does *not* prove.

Do not infer a successful end-to-end capability from configuration presence alone.

### 9. What happened inside z/OS
Trace the path at the appropriate depth. Examples:

```text
JCL → JES2 reader → conversion → execution → spool → RC
```

```text
socket → TCP/IP → SAF call → RACF decision → allow/deny
```

```text
SQL → Db2 subsystem → page set → VSAM data set → DASD
```

Where relevant, explain records, bytes, control blocks, address spaces, messages or return codes rather than treating the UI as the system itself.

### 10. Validation
Compare expected and observed results. Record RC, SQLCODE, message ID, state transition or other objective evidence.

### 11. Troubleshooting
Preserve useful failures. Explain symptom → hypothesis → evidence → cause → correction → retest.

### 12. Security and publication review
Never publish passwords, private keys, authentication material or unnecessary host-network identifiers. Redact host IP/MAC/interface details when they are not required to teach the z/OS concept.

### 13. Cross-domain connections
Link only relationships that have a technical reason. Label each one as validated, dependency, readiness or planned.

### 14. Knowledge check
End with 3–6 questions that require reasoning from the lab.

### 15. Continue learning
Provide one primary next lesson plus optional specialist branches. Also provide links back to the course root and Academy.

## Navigation footer

Use this pattern at the bottom of a lesson:

```markdown
---
### Continue learning
**Previous:** [...]
**Course:** [...]
**Next:** [...]
**Related:** [...]
**Academy:** [z/OS Engineering Academy](https://github.com/P-dot/P-dot/blob/main/docs/ACADEMY.md)
```

## Evidence quality test

Before publication, ask:

1. Can another learner reproduce the procedure?
2. Does each image teach something rather than merely prove that a screen existed?
3. Are claims no stronger than the evidence?
4. Is the z/OS component boundary clear?
5. Is a failure explained rather than hidden?
6. Is sensitive host or credential material excluded?
7. Does the learner know what to study next?

A lab that fails these checks remains useful working material, but it is not yet a mature Academy lesson.
