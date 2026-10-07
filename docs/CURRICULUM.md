# z/OS Engineering Academy — Curriculum Graph

[← Academy Home](ACADEMY.md) · [← Portfolio](../README.md)

This curriculum is deliberately **dependency-driven**. z/OS is a system of cooperating subsystems, so the Academy teaches boundaries and handoffs rather than pretending that networking, storage, security, batch and applications are independent subjects.

## Foundation path

```text
00 Workstation / 3270 / Git / Zowe
             |
01 TSO/E + ISPF + datasets
             |
02 JCL + JES2 + SDSF
       /     |      \
      /      |       \
03 REXX   Scheduler   USS
      \      |       /
       \     |      /
        production automation
```

Start with [TSO/ISPF](https://github.com/P-dot/MVS_TSO_ISPF), continue through [JCL/JES2](https://github.com/P-dot/JCL_LABS), then branch into [REXX](https://github.com/P-dot/Rexx), [workload automation](https://github.com/P-dot/zos-batch-scheduler) and [USS](https://github.com/P-dot/UNIX_System_Services-).

## Data and application path

```text
DFSMS / allocation / catalog
            |
           VSAM
        /        \
 native files   Db2 physical storage
      |              |
    COBOL ---------- SQL
      \              /
       application logic
              |
             CICS
              |
      online transaction
```

The learner first understands datasets, catalogs and VSAM structures, then Db2 relational objects, then the application languages and CICS integration.

Courses: [VSAM](https://github.com/P-dot/vsam01) · [Db2](https://github.com/P-dot/DB2-) · [COBOL](https://github.com/P-dot/COBOL) · [PL/I](https://github.com/P-dot/PL-I) · [HLASM](https://github.com/P-dot/z_Assembly) · [CICS](https://github.com/P-dot/CICS) · [Integration](https://github.com/P-dot/mainframe-cobol-db2-cics-devops-lab).

## Network and security path

```text
TCP/IP stack / service
         |
 listener + started task
         |
 identity / SAF decision
         |
       RACF
     /      \
resource   certificate/key ring
 control          |
              Policy Agent
                  |
                AT-TLS
                  |
          protected transport
                  |
          SYSLOG / SMF evidence
```

Courses: [Communications Server](https://github.com/P-dot/zos-communications-server-network-lab) ↔ [RACF/SAF](https://github.com/P-dot/mainframe-racf-security-evidence) → [Problem Determination](https://github.com/P-dot/zos-problem-determination-diagnostics).

### Existing evidence bridge

```text
RACF Labs 31–33
certificate / key-ring lifecycle
          |
          v
Communications Lab 21
Policy Agent / AT-TLS readiness
          |
          v
Communications Lab 22
controlled TTLS enablement
          |
          v
Communications Lab 23
HTTP / AT-TLS integration and troubleshooting
```

This sequence is already supported by published portfolio evidence. Evidence state remains attached to each individual lab.

## Batch production path

```text
JCL
 |
JES2
 |
scheduler eligibility / dependencies
 |
application or utility
 |
VSAM / Db2
 |
RC / ABEND / messages
 |
SDSF / SYSLOG / diagnostics
 |
restart / rerun / recovery
```

Courses: [JCL/JES2](https://github.com/P-dot/JCL_LABS) → [Scheduler](https://github.com/P-dot/zos-batch-scheduler) → [Applications](https://github.com/P-dot/mainframe-cobol-db2-cics-devops-lab) → [Diagnostics](https://github.com/P-dot/zos-problem-determination-diagnostics).

A planned scheduler capability is not marked as validated merely because JES2 or JCL has been demonstrated elsewhere.

## USS service path

```text
RACF OMVS identity
       |
UID / GID
       |
zFS + POSIX permissions
       |
USS process / shell
       |
TCP/IP service
       |
network + SAF controls
```

Courses: [USS](https://github.com/P-dot/UNIX_System_Services-) ↔ [RACF/SAF](https://github.com/P-dot/mainframe-racf-security-evidence) ↔ [Communications Server](https://github.com/P-dot/zos-communications-server-network-lab).

## System programmer path

```text
IPL / PARMLIB
   |
JES2 / system services
   |
DFSMS / WLM / SMF
   |
APF / LNKLST / LPA
   |
HCD / IODF
   |
SMP/E
   |
XCF / GRS / availability
   |
diagnosis + controlled recovery
```

The canonical course is the [Core z/OS Engineering Laboratory](https://github.com/P-dot/zos-adcd-hercules-engineering-lab), with specialist repositories used whenever a topic crosses an ownership boundary.

## Graduation principle

There is no single final lab. The Academy's advanced objective is to demonstrate **production-like chains** that are:

- executable;
- secured through the correct z/OS control point;
- observable;
- diagnosable;
- recoverable;
- documented with publication-safe evidence.

[Lab authoring standard →](LAB-STANDARD.md)
