# z/OS Engineering Academy

> A hands-on, evidence-driven learning system built around a real z/OS laboratory. The Academy is organized by capabilities and dependency chains, not by isolated repositories.

[← Academy Portal](../README.md) · [Curriculum Graph](CURRICULUM.md) · [Lab Standard](LAB-STANDARD.md) · [Core Platform](https://github.com/P-dot/zos-adcd-hercules-engineering-lab) · [Architecture V2](https://github.com/P-dot/zos-adcd-hercules-engineering-lab/tree/main/docs/architecture/v2)

## How to learn here

Every module follows the same learning loop:

```text
CONCEPT → PREREQUISITES → LAB → OBSERVE → EXPLAIN EVIDENCE
        → TROUBLESHOOT → VALIDATE → CONNECT → NEXT MODULE
```

A screenshot is not evidence by itself. Academy labs should explain **what is visible, which z/OS component produced it, why it matters, what conclusion is justified, and what is not proved by the image**.

## Curriculum map

| Level | School | Learn | Primary laboratory |
|---|---|---|---|
| 0 | Workstation & access | 3270, Git, Zowe, controlled evidence | [Core z/OS](https://github.com/P-dot/zos-adcd-hercules-engineering-lab) |
| 1 | Operator foundations | TSO/E, ISPF, SDSF, datasets | [TSO / ISPF](https://github.com/P-dot/MVS_TSO_ISPF) |
| 2 | Batch engineering | JCL, JES2, spool, RC, procedures | [JCL / JES2](https://github.com/P-dot/JCL_LABS) |
| 3 | Automation | REXX, scheduler concepts, USS shell | [REXX](https://github.com/P-dot/Rexx) · [Scheduler](https://github.com/P-dot/zos-batch-scheduler) · [USS](https://github.com/P-dot/UNIX_System_Services-) |
| 4 | Storage & data | DFSMS, catalogs, VSAM, Db2 physical storage | [VSAM](https://github.com/P-dot/vsam01) · [Db2](https://github.com/P-dot/DB2-) |
| 5 | Application engineering | COBOL, PL/I, HLASM, CICS, Db2 | [Integration](https://github.com/P-dot/mainframe-cobol-db2-cics-devops-lab) |
| 6 | Networking | TCP/IP, services, TN3270, FTP, policy | [Communications Server](https://github.com/P-dot/zos-communications-server-network-lab) |
| 7 | Security | SAF/RACF, identities, resource classes, trust | [RACF / SAF](https://github.com/P-dot/mainframe-racf-security-evidence) |
| 8 | Diagnostics & recovery | SYSLOG, messages, LOGREC, dumps, recovery | [Problem Determination](https://github.com/P-dot/zos-problem-determination-diagnostics) |
| 9 | System programming | PARMLIB, WLM, SMF, SMP/E, HCD, XCF/GRS | [Core z/OS](https://github.com/P-dot/zos-adcd-hercules-engineering-lab) |
| 10 | Production integration | secure, observable, recoverable end-to-end flows | [Production tracks](../README.md#tracks) |

## The important cross-domain bridges

### Network → Security → Cryptography → Diagnostics

```text
TCP/IP service
  → started-task identity
  → SAF / SERVAUTH decision
  → RACF user/resource authority
  → certificate + key ring
  → Policy Agent / AT-TLS
  → protected connection
  → SMF / SYSLOG / diagnostic evidence
```

Study this chain through [Communications Server](https://github.com/P-dot/zos-communications-server-network-lab) and [RACF/SAF](https://github.com/P-dot/mainframe-racf-security-evidence). The existing RACF certificate/key-ring work and Communications AT-TLS work form an explicit Academy bridge rather than two unrelated courses.

### Storage → VSAM → Db2 → Applications → Recovery

```text
DASD / DFSMS
  → catalogs + allocation
  → VSAM data sets
  → Db2 page sets / table spaces / index spaces
  → COBOL / CICS / SQL workload
  → RACF protection
  → backup / recovery / diagnosis
```

This path explains both **native VSAM application data** and why VSAM knowledge matters beneath Db2 for z/OS. Db2 page sets are backed by VSAM data sets; the Academy therefore teaches the physical layer before treating Db2 only as SQL.

### JCL → JES2 → Scheduler → Application → Evidence

```text
JCL semantics
  → JES2 submission and spool
  → scheduler state / dependencies
  → COBOL or utility execution
  → VSAM / Db2 data
  → RC / ABEND
  → SDSF / SYSLOG / diagnostic evidence
  → restart or rerun
```

This is the production-batch learning path. The scheduler does not replace JCL or JES2; it orchestrates work that those layers execute.

### USS → Networking → Security

```text
OMVS identity
  → POSIX UID/GID and filesystem permissions
  → USS process/service
  → TCP/IP socket
  → SAF/RACF controls
  → network policy and encrypted transport
```

This path prevents the common mistake of treating USS as a separate Linux machine. It is a z/OS runtime with z/OS identity, security and networking relationships.

### CICS → COBOL → Db2 / VSAM → RACF

```text
terminal / client
  → CICS transaction
  → program
  → COBOL business logic
  → Db2 SQL or VSAM access
  → SAF/RACF authorization
  → logs / messages / recovery
```

The language repositories teach syntax and execution; the integration repository teaches how those skills become a transaction or batch application.

## Academy lab contract

A mature lab page should contain, in this order:

1. **Why this matters** — production relevance in plain English.
2. **Learning objectives** — observable skills, not vague topics.
3. **Prerequisites** — concepts and earlier Academy labs.
4. **Architecture context** — where the component sits in z/OS.
5. **Theory before typing** — the minimum conceptual model needed to understand the commands.
6. **Experiment plan** — what will change, what will remain unchanged, expected result and rollback.
7. **Procedure** — reproducible commands/JCL/source.
8. **Evidence walkthrough** — every important screenshot/output explained.
9. **What happened inside z/OS** — control flow, address spaces, datasets, SAF checks, bytes/records/messages where relevant.
10. **Validation** — expected versus observed result and RC/ABEND interpretation.
11. **Troubleshooting** — failure modes encountered or realistically connected to the exercise.
12. **Security/publication review** — redact host networking, credentials, keys and unrelated identifiers.
13. **Cross-domain connections** — exact related Academy labs and why they connect.
14. **Knowledge check** — a few questions the learner should now be able to answer.
15. **Next lab** — one primary continuation and optional specialist branches.

## Evidence states

| State | Meaning |
|---|---|
| **Validated locally** | Executed and evidenced in the laboratory |
| **Validated in related domain** | Proven elsewhere and consumed here as a dependency |
| **Readiness** | Prerequisites/design assessed; implementation not claimed |
| **Partial / controlled stop** | Useful progress with a documented blocker |
| **Planned** | Curriculum or architecture target, not evidence |

## Academy rule

The repositories are the **schools**, labs are the **lessons**, evidence is the **proof**, and cross-repository links are the **curriculum graph**. A learner should never reach the bottom of a lesson and wonder where to go next.
