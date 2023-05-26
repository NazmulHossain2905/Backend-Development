# **HTML RESPONSE**

#### We can send many type of response.

- `res.sendFile()`
- `res.json()`
- `res.send()`
- `res.cookie()`
- `res.append()`
- `res.status()`...more

**Send `HTML` File**

```javascript
res.sendFile("path/index.html");
```

**Send `JSON` File**

```javascript
res.json({
  message: "This is JSON message",
  success: false,
  statusCode: 200,
});
```

**Use `send()`**

```javascript
res.send({
  message: "This is JSON message",
  success: false,
  statusCode: 200,
});

or, res.send("<h1>Hello</h1>");

or, res.send("Any message");
```

**Send `cookie()`**

```javascript
res.cookie("name", "Nazmul Hossain");
```

**Send `status()`**

```javascript
res.status(200);
```
