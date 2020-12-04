# TeamAppBackend

There are two types of running the server:
1. `npm start` - Windows 10 - development environment running only one thread session storage is in-memory. 
2. `npm run full` - Linux(WSL) - running multiple threads of the server and running redis for session storage. 

### Mysql configuration

configuration settings are present in **`prisma/.env`** file.



**You may change the config file** or change your local Mysql server config.

This is the default config.
```
DATABASE_URL="mysql://root:12345678@localhost:3306/teamapp"
```
Attribute|Value
-----|-----
User|`root`
Password|`12345678`
Scheme|`teamapp`
Port|`3306`

#### Create schema

You need to create the tables with the `schema.sql` file in `prisma` folder, you can open that file and execute it in Mysql server.

#### Activate prisma ORM

In folder, execute these commands:

1. `npm install`
2. `npx prisma introspect`
3. `npx prisma generate`

If no problems occurred, you can now run the server.