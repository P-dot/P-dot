# z/OS Engineering Academy — Course Catalog

[← Academy](ACADEMY.md) · [Curriculum Graph](CURRICULUM.md) · [Lab Standard](LAB-STANDARD.md) · [← Portfolio](../README.md)

The Academy is organized as a set of **schools**. Each school owns one technical domain, but every course deliberately links to the z/OS components it depends on.

| School | Course | Start here | Outcome |
|---|---|---|---|
| Foundations | TSO/E & ISPF | [MVS_TSO_ISPF](https://github.com/P-dot/MVS_TSO_ISPF) | Navigate, edit, manage data sets and operate interactively |
| Batch | JCL & JES2 | [JCL_LABS](https://github.com/P-dot/JCL_LABS) | Describe work, submit it, read spool and reason about RCs |
| Automation | REXX | [Rexx](https://github.com/P-dot/Rexx) | Automate repeatable z/OS workflows |
| Automation | Scheduling | [zos-batch-scheduler](https://github.com/P-dot/zos-batch-scheduler) | Reason about dependencies, eligibility and restart |
| UNIX | USS | [UNIX_System_Services-](https://github.com/P-dot/UNIX_System_Services-) | Work with USS processes, filesystems and shell |
| Storage | VSAM | [vsam01](https://github.com/P-dot/vsam01) | Define, load, access and recover VSAM organizations |
| Data | Db2 for z/OS | [DB2-](https://github.com/P-dot/DB2-) | Connect SQL objects to z/OS execution and storage |
| Development | COBOL | [COBOL](https://github.com/P-dot/COBOL) | Build and execute z/OS application logic |
| Development | PL/I | [PL-I](https://github.com/P-dot/PL-I) | Build PL/I programs in the batch/data ecosystem |
| Development | HLASM | [z_Assembly](https://github.com/P-dot/z_Assembly) | Understand instructions, registers and representation |
| Transactions | CICS | [CICS](https://github.com/P-dot/CICS) | Understand online transaction execution and handoffs |
| Integration | COBOL · Db2 · CICS | [integration lab](https://github.com/P-dot/mainframe-cobol-db2-cics-devops-lab) | Join language, data, batch and transaction layers |
| Networking | Communications Server | [network lab](https://github.com/P-dot/zos-communications-server-network-lab) | Inspect TCP/IP services, policy and transport protection |
| Security | RACF / SAF | [security evidence](https://github.com/P-dot/mainframe-racf-security-evidence) | Reason about identity, authorization and trust |
| Reliability | Problem determination | [diagnostics](https://github.com/P-dot/zos-problem-determination-diagnostics) | Move from symptom to evidence and recovery |
| Systems | Core z/OS engineering | [core lab](https://github.com/P-dot/zos-adcd-hercules-engineering-lab) | Operate the platform as a system programmer |

## Three ways to use the Academy

### I am new to z/OS
Follow the [Curriculum Graph](CURRICULUM.md) in order. Do not skip TSO/ISPF, JCL/JES2 and data-set fundamentals.

### I already work with mainframes
Enter through the school you need, then use each lesson's **Related** links to cross subsystem boundaries.

### I am reviewing this as an employer or engineer
Start at the [Portfolio](../README.md), choose a production track, and inspect the evidence states. **VALIDATED** means backed by lab evidence; **READINESS**, **PARTIAL** and **PLANNED** are deliberately weaker claims.

## What makes this an Academy rather than a repository list

A course must answer four questions:

1. **What should I learn first?**
2. **What is happening inside z/OS?**
3. **What evidence proves the result?**
4. **Where do I go next?**

If a lesson cannot answer all four yet, it is a modernization target rather than a finished Academy lesson.
