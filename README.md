- _Started Date: 01 May 2023_

# Backend Development Practice 2023

_I'm learning backend development._

**Node Js**

**Express Js**

**MongoDB**

[![Node Js](https://img.shields.io/badge/Node%20Js-84BB00?style=for-the-badge)](#)
[![Express Js](https://img.shields.io/badge/Express_js-9785CF?style=for-the-badge&logo=express&logoColor=FFFFFF&labelColor=7B7B7B)](#)
[![MongoDB](https://img.shields.io/badge/Mongo_DB-3F9542?style=for-the-badge&logo=mongodb&logoColor=3F9542&labelColor=black)](#)

---

# **01 - Lesson - Node Js Module.**

Node js module like set of function.

**_3 types of Node js modules_**

- Local modules - (Own created modules)
- Built in modules/ internal modules - (Node Js own modules -> `http`, `url`, `path` & `fs`). _NB: No need to install these._
- External modules/ third party modules - (Managed by NPM (Node Package Manager) -> package.json)

---

# **02 - Lesson - Built-in Modules.**

**Some built-in modules**

- `fs`
- `os`
- `path`
- `http`
- `url`
- etc

### **`fs`** module method

```javascript
fs.writeFile(); // create a new file
fs.readFile();
fs.appendFile(); // update file
fs.rename();
fs.unlink(); // delete file
fs.deleteFile();
fs.exists();
```

---

### **`os` - Operating System** module method

```javascript
os.userInfo();
os.userInfo().username;
os.hostname();
os.platform();
os.homedir();
os.totalmem();
os.freemem();
// ...more
```

---

### **`path`** module method

```javascript
path.resolve("file.js"); // C:\Backend-Development\02-Built-in-modules\file.js
path.join(__dirname + "/file.js"); // C:\Backend-Development\02-Built-in-modules\file.js
// ...more
```
