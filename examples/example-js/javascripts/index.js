import ArrayEx from "./array.js";
import StringEx from "./string.js";
import ObjectEx from "./object.js";

console.log("----------- Array --------------");

const array = new ArrayEx();
array.init();

console.log("----------- String --------------");
const string = new StringEx();
string.init();

console.log("----------- Object --------------");
const object = new ObjectEx();
const obj = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
object.toString(obj);
console.log(object.getLength(obj));
object.deteleKey(obj, "name");
console.log(object.getLength(obj));

const librarys = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
    libraryID: 1254,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
    libraryID: 4264,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
    libraryID: 3245,
  },
];
function displayLibrary() {
  librarys.forEach((item) => {
    if (item.readingStatus) {
      console.log("Book " + item.title + ", Author " + item.author);
    } else {
      console.log("You need read book " + item.title);
    }
  });
}
displayLibrary();

function sortLibrary() {
  librarys.sort((a, b) => {
    return a.libraryID < b.libraryID ? 1 : -1;
  });
  console.log(librarys);
}
sortLibrary();

console.log("----------- Callbacks --------------");
