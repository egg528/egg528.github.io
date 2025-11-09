---
title: "System Design Interview Chapter 7: Design a Unique ID Generator in Distributed Systems"
description: "Comprehensive analysis of unique ID generation methods in distributed systems, comparing database auto-increment, UUID, ticket server, Twitter snowflake, and other approaches"
date: "2023-06-28"
draft: false
---
## 1. Considerations When Designing ID Generators for Distributed Systems
- ID characteristics: Uniqueness, sortability, etc.
- Record generation method: Previous data + 1, etc.
- ID composition: Numeric composition, etc.
- System scale: Generate 10,000 IDs per second, etc.

<br></br>

## 2. Types of ID Generators

### Multi-Master Replication
- Uses auto_increment feature but increases ID by the number of DB servers in use.
  - Server 1 generates IDs: 1, 3, 5, 7, 9 ...
  - Server 2 generates IDs: 2, 4, 6, 8, 10 ...
- Can somewhat solve scalability issues.
- Disadvantages:
  - Cannot scale across multiple data centers
  - Cannot guarantee IDs increase with time
  - Difficult to make it work well when adding/removing servers (adding servers affects existing server ID generation methods)

### UUID
- UUID: A 128-bit number created to uniquely identify information.
- Advantages:
  - Simple generation with no coordination needed between servers
  - Naturally easy to scale
- Disadvantages:
  - IDs are long
  - Cannot be sorted chronologically
  - May contain non-numeric values

### Ticket Server
- Method using one DB server (Ticket server) with auto_increment functionality as unique ID generator
- Advantages:
  - Can easily create IDs that guarantee uniqueness and consist only of numbers
  - Easy to implement and suitable for small to medium scale
- Disadvantages:
  - Ticket server becomes SPOF

### Twitter Snowflake Approach
![Snowflake ID Structure](./diagram-1.webp)
- Divides ID into 5 sections
- Sign: Currently meaningless but can be used later for distinguishing negative/positive values
- Timestamp: Value indicating how many ms have passed since epoch time
- Data Center ID: Data center identifier
- Server ID: Server identifier
- Sequence Number: Increases by 1 with each ID generation and resets to 0 every 1ms

<br></br>

## 3. Additional Considerations
- How to ensure all servers use the same clock?
- If using Snowflake, how to optimize the length of each part?
- How to provide high availability