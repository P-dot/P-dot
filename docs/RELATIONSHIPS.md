# z/OS Academy — Cross-Domain Relationship Matrix

[← Academy](ACADEMY.md) · [Courses](COURSES.md) · [Curriculum](CURRICULUM.md)

This page explains **why repositories link to one another**. Links are based on subsystem handoffs, shared z/OS control points or data/runtime dependencies.

| From | To | Technical bridge | Academy meaning |
|---|---|---|---|
| TSO/ISPF | JCL/JES2 | Edit/submit jobs; inspect results | Interactive work becomes batch execution |
| JCL/JES2 | Scheduler | Scheduler orchestrates jobs executed through JES | Workload description vs orchestration |
| JCL/JES2 | VSAM/Db2 | DDs/utilities/jobs manipulate data resources | Batch drives data lifecycle |
| REXX | TSO/ISPF/JCL | REXX automates interactive and batch workflows | Manual operation becomes automation |
| VSAM | Db2 | Db2 page sets use VSAM data sets | SQL has a physical z/OS storage layer |
| VSAM | zFS/USS | zFS aggregates are VSAM linear data sets | UNIX filesystems sit on z/OS storage primitives |
| COBOL | VSAM | Application record I/O | Language meets native record storage |
| COBOL | Db2 | SQL application access | Language meets relational data |
| CICS | COBOL | Transaction invokes application programs | Online runtime meets business logic |
| CICS | Db2/VSAM | Transactional programs access data | Online workload meets persistence |
| Communications | RACF/SAF | SAF resource checks and SERVAUTH | Network access becomes z/OS authorization |
| Communications | RACF certificates | AT-TLS/System SSL consumes trust material | Transport meets cryptographic trust |
| USS | RACF | OMVS identity, UID/GID and authorization | POSIX view remains tied to z/OS identity |
| USS | Communications | USS processes use z/OS TCP/IP | UNIX runtime meets the network stack |
| JES2 | RACF/SAF | JES security decisions can pass to SAF | Batch has security boundaries |
| All domains | Diagnostics | Messages, spool, logs and state | Every subsystem must be observable |

## Secured network service

    client
      |
    TCP/IP
      |
    service / port
      |
    SAF resource check
      |
    RACF authority
      |
    Policy Agent / AT-TLS
      |
    certificate + key ring
      |
    protected traffic
      |
    SYSLOG / diagnostic evidence

## Online business transaction

    terminal/client
         |
        CICS
         |
    COBOL / PL/I
       /      \
     VSAM     Db2
               |
         VSAM page sets
         |
    RACF boundary
         |
    logs / recovery

## Production batch workload

    scheduler
        |
       JCL
        |
       JES2
        |
    program / utility
       /       \
     VSAM      Db2
        |
    RC / ABEND / messages
        |
      SDSF
        |
    diagnosis → restart / rerun

## Relationship states

**Dependency** means prerequisite knowledge or an underlying service.  
**Handoff** means an artifact or runtime responsibility crosses domain ownership.  
**Validated bridge** means published evidence exists for a concrete integration.  
**Readiness bridge** means the relationship is real but end-to-end proof is incomplete.

The relationship label must never be stronger than the evidence.
