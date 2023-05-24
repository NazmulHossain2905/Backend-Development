# **02 - Lesson - Built-in Modules.**

**Some built-in modules**

- `fs`
- `os`
- `http`
- `url`
- `path`
- etc

### **`fs` - File System** module method

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
