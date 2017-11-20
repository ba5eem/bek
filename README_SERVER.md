Welcome to the back-end README_SERVER.md

Use this guide to setup your back-end:

1. Entry point: server.js

PORT = 8080

Servers-up!

For Config file: - please copy into your config file 
~/server/config.json

```json
{
  "development": {
    "username": "bekuser",
    "password": "bekc19",
    "database": "bekdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "bekuser",
    "password": "bekc19",
    "database": "bekdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "bekuser",
    "password": "bekc19",
    "database": "bekdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

Commands for setting up the database
open terminal
psql

copy and paste into your terminal.

```sql
CREATE user bekuser with password 'bekc19';
CREATE DATABASE bekdb with owner bekuser;
```



