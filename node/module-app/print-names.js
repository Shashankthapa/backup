const stud = require("./names");
const [func1,func2] = require("./functions");

// console.log(`${stud.student1} and ${stud.student2} are very sincere students.`);

func1(stud.student1);
func2("Web development");

func1(stud.student2);
func2("Video Editing.");