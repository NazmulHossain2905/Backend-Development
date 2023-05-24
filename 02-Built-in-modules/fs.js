const fs = require("fs");

// ############# WRITE FILE #################
// ========> method 1
// fs.writeFile(
//   "test1.txt",
//   "I'm Nazmul Hossain",
//   (error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("File created successfully");
//     }
//   }
// );

// =============> method 2 -> first create a function than implement file system method inside the function.
const createNewFile = () =>
  fs.writeFile(
    "test2.txt",
    "I'm Nazmul Hossain. I'm 23 years old.",
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("File created successfully");
      }
    }
  );

createNewFile();

// ############## UPDATE FILE ####################
const updateFile = () =>
  fs.appendFile("test1.txt", " I live at Jessore in Bangladesh.", (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("File updated successfully");
    }
  });

// updateFile();

// ############## READ FILE ####################
const readFile = () => {
  fs.readFile("test1.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(data);
    }
  });
};

// readFile();

// ############## RENAME FILE ####################
const renameFile = () => {
  fs.rename("test3.txt", "test2.txt", (err) => {
    const result = err ? err.message : "File renamed successfully";
    console.log(result);
  });
};

// renameFile();

// ############## DELETE FILE ####################
const deleteFile = () => {
  fs.unlink("test2.txt", (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("File deleted successfully");
    }
  });
};

// deleteFile();

// ############## ALREADY EXIST FILE ####################
const isExistFile = () => {
  fs.exists("test2.txt", (exist) => {
    if (exist) {
      console.log("File already exist");
    } else {
      console.log("File not exist");
    }
  });
};

// isExistFile();
