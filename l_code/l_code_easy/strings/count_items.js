let items = [["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"]]

let ruleValue = "qqqq"

let ruleKey = "name"

let det = ["type", "color", "name"];


console.log(items.reduce((acc,itr) => 
    acc += itr[det.indexOf(ruleKey)] == ruleValue
,0));

