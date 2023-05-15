const fs = require('fs');
const names = ["Ayush", "Sunil", "Abhishek", "Karunesh", "Masood", "Tariq", "Arun", "Sunil Rawat", "Chandan"];

names.forEach((name) => {
  fs.unlink(name, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
