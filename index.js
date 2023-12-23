//  for  creating files in directory.
const fs = require('fs')
// file1
fs.writeFileSync("file1.txt","Node.js is an open source server environment")
// file2
fs.writeFileSync("file2.txt","Node.js runs on various platforms Windows, Linux, Unix, Mac OS X, etc.")
// file3
fs.writeFileSync("file3.txt","Node.js uses JavaScript on the server")

// for deleting the all three file we use
// fs.unlinkSync("file1.txt")
// fs.unlinkSync("file2.txt")
// fs.unlinkSync("file3.txt")
