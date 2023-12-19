let student = {

    "fname" : "Shashank",
    "lname" : "Thapa",
    "branch" : "Computer",
    "sub" : {
        f_s : "DSA",
        s_s : "Maths",
        t_s : "ML"
    }
    
};

let {fname,branch,sub : {f_s, s_s, t_s}} = student;

console.log(`${fname} ${branch} ${f_s} ${s_s}`);
