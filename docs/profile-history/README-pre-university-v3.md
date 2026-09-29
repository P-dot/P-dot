# IBM z/OS Mainframe Engineering Portfolio

Hands-on engineering portfolio focused on building a **connected z/OS laboratory**, where specialized repositories progressively converge into production-like workflows.

## Connected z/OS Engineering Laboratory

~~~mermaid
flowchart TB
    CORE["z/OS Core Engineering<br/>ADCD / Hercules"]

    TSO["MVS / TSO / ISPF"]
    JCL["JCL_LABS"]
    SCHED["z/OS Batch Scheduler"]
    JES2["JES2"]

    COBOL["COBOL"]
    PLI["PL/I"]
    REXX["REXX"]
    ASM["z/Assembly"]
    VSAM["VSAM"]
    DB2["Db2 for z/OS"]
    CICS["CICS"]

    RACF["RACF / SAF<br/>Security & Authorization"]
    USS["USS / OMVS"]
    TCPIP["TCP/IP"]
    COMMS["Communications Server"]

    SMF["SMF / WLM / SRM"]
    STORAGE["Storage / DASD"]
    RECOVERY["Backup / Restore"]
    END["Integrated Production-Like<br/>z/OS Workflows"]

    CORE --> TSO
    CORE --> JES2
    CORE --> USS
    CORE --> SMF
    CORE --> STORAGE

    TSO --> JCL
    TSO --> REXX
    JCL --> SCHED
    SCHED --> JES2

    JES2 --> COBOL
    JES2 --> PLI
    JES2 --> ASM

    COBOL --> VSAM
    COBOL --> DB2
    CICS --> COBOL
    CICS --> DB2

    RACF --> TSO
    RACF --> JES2
    RACF --> USS
    RACF --> CICS
    RACF --> COMMS

    USS --> TCPIP
    TCPIP --> COMMS
    STORAGE --> RECOVERY

    JES2 --> SMF
    CICS --> SMF
    COMMS --> SMF

    VSAM --> END
    DB2 --> END
    CICS --> END
    COMMS --> END
    SMF --> END
    RECOVERY --> END

    click CORE "https://github.com/P-dot/zos-adcd-hercules-engineering-lab"
    click TSO "https://github.com/P-dot/MVS_TSO_ISPF"
    click JCL "https://github.com/P-dot/JCL_LABS"
    click SCHED "https://github.com/P-dot/zos-batch-scheduler"
    click COBOL "https://github.com/P-dot/COBOL"
    click PLI "https://github.com/P-dot/PL-I"
    click REXX "https://github.com/P-dot/Rexx"
    click ASM "https://github.com/P-dot/z_Assembly"
    click VSAM "https://github.com/P-dot/vsam01"
    click DB2 "https://github.com/P-dot/DB2-"
    click CICS "https://github.com/P-dot/CICS"
    click RACF "https://github.com/P-dot/mainframe-racf-security-evidence"
    click USS "https://github.com/P-dot/UNIX_System_Services-"
    click COMMS "https://github.com/P-dot/zos-communications-server-network-lab"
    click END "https://github.com/P-dot/mainframe-cobol-db2-cics-devops-lab"
~~~

> **Architecture principle:** Scheduler decides and controls → JCL describes the workload → JES2 executes it → applications process data → RACF/SAF protects access → SMF and system facilities provide operational evidence.

## Integration Paths

| Track | Connected path |
|---|---|
| **Enterprise Batch** | Scheduler → JCL → JES2 → COBOL → VSAM / Db2 → RC / recovery |
| **Online Transaction** | RACF → CICS → COBOL → Db2 → SMF |
| **Secure Network Service** | RACF → USS → TCP/IP → Communications Server |
| **Operations Automation** | MVS / TSO / ISPF → REXX → ISPF services → operations |
| **Storage Recovery** | DASD → data → backup → restore → validation |
| **Low-Level Development** | MVS / TSO / ISPF → JCL → z/Assembly → HLASM / load module |

## Laboratory Map

| Area | Repository | Role |
|---|---|---|
| **Core z/OS** | [zos-adcd-hercules-engineering-lab](https://github.com/P-dot/zos-adcd-hercules-engineering-lab) | System engineering, JES2, SMF, WLM/SRM, storage, diagnostics and recovery |
| **Security** | [mainframe-racf-security-evidence](https://github.com/P-dot/mainframe-racf-security-evidence) | RACF/SAF, authorization, least privilege, audit and evidence |
| **Communications** | [zos-communications-server-network-lab](https://github.com/P-dot/zos-communications-server-network-lab) | TCP/IP, TN3270, FTP, diagnostics, hardening and AT-TLS readiness |
| **TSO / ISPF** | [MVS_TSO_ISPF](https://github.com/P-dot/MVS_TSO_ISPF) | Interactive z/OS environment |
| **Batch** | [JCL_LABS](https://github.com/P-dot/JCL_LABS) | JCL, procedures, datasets, utilities, IDCAMS and GDGs |
| **Scheduling** | [zos-batch-scheduler](https://github.com/P-dot/zos-batch-scheduler) | Workload orchestration and recovery |
| **USS** | [UNIX_System_Services-](https://github.com/P-dot/UNIX_System_Services-) | OMVS, POSIX filesystem, permissions and processes |
| **COBOL** | [COBOL](https://github.com/P-dot/COBOL) | Mainframe application programming |
| **VSAM** | [vsam01](https://github.com/P-dot/vsam01) | ESDS, KSDS, RRDS and LDS |
| **Db2** | [DB2-](https://github.com/P-dot/DB2-) | Db2 for z/OS and SQL |
| **CICS** | [CICS](https://github.com/P-dot/CICS) | Online transaction processing |
| **REXX** | [Rexx](https://github.com/P-dot/Rexx) | TSO/E and ISPF automation |
| **PL/I** | [PL-I](https://github.com/P-dot/PL-I) | PL/I development |
| **Assembler** | [z_Assembly](https://github.com/P-dot/z_Assembly) | HLASM and low-level programming |
| **Integration** | [mainframe-cobol-db2-cics-devops-lab](https://github.com/P-dot/mainframe-cobol-db2-cics-devops-lab) | Cross-domain scenarios |

## Engineering Method

~~~text
Build → Execute → Observe → Diagnose → Correct → Validate → Document
~~~

Labs are developed with reproducible procedures, commands/JCL, execution evidence, return-code analysis, troubleshooting, controlled changes and publication-safe documentation.

## Engineering Domains & Operational Lifecycle

Architecture V2 adds a second view of the same ecosystem: not only **what technologies are connected**, but **how z/OS engineering work is organized, matured and integrated**.

~~~mermaid
flowchart TB
    ZOS["IBM z/OS Engineering"]

    CORE2["Core Platform<br/>Engineering"]
    OPS["Operations &<br/>Service Management"]
    STOR2["Storage & DFSMS<br/>Engineering"]
    BATCH2["Workload & Batch<br/>Engineering"]
    MAINT["Software<br/>Maintenance"]
    PERF["Performance & Capacity<br/>Engineering"]
    DIAG["Problem Determination<br/>& Diagnostics"]
    SYSPLEX["Sysplex & Availability<br/>Engineering"]
    RECOV2["Recovery<br/>Engineering"]
    SEC2["Security<br/>Engineering"]
    NET2["Communications<br/>Engineering"]
    USS2["UNIX System<br/>Services"]
    APP2["Application & Data<br/>Engineering"]
    AUTO2["Automation & Modern<br/>Operations"]
    INT2["Integration<br/>Engineering"]
    PROD["Production-Like<br/>Workflows"]

    ZOS --> CORE2
    ZOS --> OPS
    ZOS --> STOR2
    ZOS --> BATCH2
    ZOS --> MAINT
    ZOS --> PERF
    ZOS --> DIAG
    ZOS --> SYSPLEX
    ZOS --> RECOV2
    ZOS --> SEC2
    ZOS --> NET2
    ZOS --> USS2
    ZOS --> APP2
    ZOS --> AUTO2

    CORE2 --> INT2
    OPS --> INT2
    STOR2 --> INT2
    BATCH2 --> INT2
    MAINT --> INT2
    PERF --> INT2
    DIAG --> INT2
    SYSPLEX --> INT2
    RECOV2 --> INT2
    SEC2 --> INT2
    NET2 --> INT2
    USS2 --> INT2
    APP2 --> INT2
    AUTO2 --> INT2

    INT2 --> PROD
~~~

Cross-cutting engineering planes:

~~~text
Security      → protects identities, authority, resources and audit boundaries
Observability → provides SMF, SYSLOG, LOGREC, RMF, SDSF and Health Checker evidence
Automation    → progressively reduces manual operation through REXX, JCL, Scheduler, shell, workflows and APIs
~~~

The common Architecture V2 lifecycle is:

~~~mermaid
flowchart LR
    D["Discover"] --> B["Baseline"]
    B --> C["Configure"]
    C --> O["Operate"]
    O --> OB["Observe"]
    OB --> DG["Diagnose"]
    DG --> R["Recover"]
    R --> I["Improve"]
    I --> A["Automate"]
    A --> IN["Integrate"]
~~~

This lifecycle is applied across domains without renumbering or discarding historical labs. Existing evidence remains in place while future work gains clearer ownership, maturity and integration targets.

The Architecture V2 model is documented in the central engineering repository:

[Architecture V2 — Engineering Domains, Lab Taxonomy, Operational Maturity and Production Tracks](https://github.com/P-dot/zos-adcd-hercules-engineering-lab/tree/main/docs/architecture/v2)

## Current Direction

~~~text
Scheduler
   ↓
JCL / JES2
   ↓
COBOL
   ↓
VSAM / Db2
   ↓
RC / ABEND
   ↓
Diagnosis → Restart / Rerun
   ↓
Monitoring / Audit / Recovery
~~~

The long-term objective is a coherent **production-like z/OS engineering environment**, where systems, security, batch, networking, storage, databases, transaction processing and automation are understood as parts of the same platform.

### Main technologies

`z/OS` · `TSO/E` · `ISPF` · `SDSF` · `JCL` · `JES2` · `RACF` · `SAF` · `SMF` · `WLM` · `DFSMS` · `USS` · `TCP/IP` · `VSAM` · `COBOL` · `Db2` · `CICS` · `REXX` · `PL/I` · `HLASM`
