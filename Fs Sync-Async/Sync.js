const fs=require("fs")

fs.writeFileSync("hello.txt","intro to node js ");

fs.appendFileSync("hello.txt","module system");

const a = fs.readFileSync("hello.txt");

console.log(a.toString());

fs.renameSync("hello.txt","hy.txt");

fs.unlinkSync("hy.txt");