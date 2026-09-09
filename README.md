# IBM z/OS Mainframe Engineering Portfolio

Hands-on engineering portfolio focused on **IBM z/OS systems, operations, security, networking, storage, data, application development and automation**.

The repositories below form a connected mainframe laboratory rather than a collection of isolated exercises.

## Mainframe Engineering Map

~~~mermaid
flowchart TB

    ZOS["IBM z/OS Engineering Lab"]

    ZOS --> SYS["Systems & Operations"]
    ZOS --> SEC["Security"]
    ZOS --> NET["Networking"]
    ZOS --> DATA["Data & Storage"]
    ZOS --> DEV["Application Development"]
    ZOS --> AUTO["Automation & Tooling"]

    SYS --> CORE["ADCD / Hercules Engineering"]
    SYS --> JCL["JCL / JES2 Batch"]
    SYS --> TSO["TSO / ISPF"]
    SYS --> SCHED["Batch Scheduling"]
    SYS --> USS["z/OS UNIX System Services"]

    SEC --> RACF["RACF / SMF / Audit Evidence"]
    SEC --> USS
    SEC --> NET

    NET --> COMMS["z/OS Communications Server"]
    NET --> USS

    DATA --> VSAM["VSAM"]
    DATA --> DB2["Db2 for z/OS"]
    DATA --> CORE

    DEV --> COBOL["COBOL"]
    DEV --> PLI["PL/I"]
    DEV --> ASM["z/Architecture Assembler"]
    DEV --> CICS["CICS"]
    DEV --> REXX["REXX"]

    COBOL --> JCL
    COBOL --> VSAM
    COBOL --> DB2

    PLI --> JCL
    ASM --> JCL

    CICS --> COBOL
    CICS --> DB2

    REXX --> TSO
    REXX --> AUTO

    AUTO --> USS
    AUTO --> REXX
    AUTO --> SCHED
    AUTO --> DEVOPS["COBOL / Db2 / CICS DevOps"]

    click CORE "https://github.com/P-dot/zos-adcd-hercules-engineering-lab"
    click JCL "https://github.com/P-dot/JCL_LABS"
    click TSO "https://github.com/P-dot/MVS_TSO_ISPF"
    click SCHED "https://github.com/P-dot/zos-batch-scheduler"
    click USS "https://github.com/P-dot/UNIX_System_Services-"

    click RACF "https://github.com/P-dot/mainframe-racf-security-evidence"

    click COMMS "https://github.com/P-dot/zos-communications-server-network-lab"

    click VSAM "https://github.com/P-dot/vsam01"
    click DB2 "https://github.com/P-dot/DB2-"

    click COBOL "https://github.com/P-dot/COBOL"
    click PLI "https://github.com/P-dot/PL-I"
    click ASM "https://github.com/P-dot/z_Assembly"
    click CICS "https://github.com/P-dot/CICS"
    click REXX "https://github.com/P-dot/Rexx"

    click DEVOPS "https://github.com/P-dot/mainframe-cobol-db2-cics-devops-lab"
~~~

## Core Engineering Areas

| Area | Repository | Focus |
|---|---|---|
| z/OS Engineering | [zos-adcd-hercules-engineering-lab](https://github.com/P-dot/zos-adcd-hercules-engineering-lab) | System operations, storage, recovery and configuration |
| Security | [mainframe-racf-security-evidence](https://github.com/P-dot/mainframe-racf-security-evidence) | RACF, SMF, auditing and security validation |
| Networking | [zos-communications-server-network-lab](https://github.com/P-dot/zos-communications-server-network-lab) | Communications Server, TCP/IP and diagnostics |
| JCL / JES2 | [JCL_LABS](https://github.com/P-dot/JCL_LABS) | Batch workloads and data set processing |
| TSO / ISPF | [MVS_TSO_ISPF](https://github.com/P-dot/MVS_TSO_ISPF) | Interactive mainframe operations and productivity |
| USS | [UNIX_System_Services-](https://github.com/P-dot/UNIX_System_Services-) | z/OS UNIX System Services |
| Scheduling | [zos-batch-scheduler](https://github.com/P-dot/zos-batch-scheduler) | Batch scheduling and automation |
| VSAM | [vsam01](https://github.com/P-dot/vsam01) | ESDS, KSDS, RRDS and LDS |
| Db2 | [DB2-](https://github.com/P-dot/DB2-) | Db2 for z/OS and SQL |
| COBOL | [COBOL](https://github.com/P-dot/COBOL) | Mainframe application development |
| CICS | [CICS](https://github.com/P-dot/CICS) | Online transaction processing |
| PL/I | [PL-I](https://github.com/P-dot/PL-I) | Enterprise PL/I development |
| Assembler | [z_Assembly](https://github.com/P-dot/z_Assembly) | z/Architecture and HLASM |
| REXX | [Rexx](https://github.com/P-dot/Rexx) | TSO/E scripting and automation |

## Engineering Approach

The laboratory is built around:

- reproducible technical procedures;
- documented commands and JCL;
- execution evidence and return codes;
- troubleshooting and failure analysis;
- system administration and operational workflows;
- controlled security experimentation;
- progressive automation;
- security-conscious publication of infrastructure evidence.

The objective is to progressively reproduce the relationships found in a real **IBM z/OS enterprise environment**, showing how systems, security, networking, storage, databases, batch processing and application development interact.

## Current Direction

Current work focuses on deeper integration between these repositories, improving automation of repetitive operator and administrator tasks, and documenting increasingly realistic end-to-end z/OS scenarios.

---

### Main technologies

`z/OS` · `JCL` · `JES2` · `TSO/E` · `ISPF` · `SDSF` · `RACF` · `SMF` · `DFSMS` · `VSAM` · `USS` · `TCP/IP` · `COBOL` · `Db2` · `CICS` · `REXX` · `PL/I` · `HLASM`
