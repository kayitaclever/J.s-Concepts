let add=()=>{
    let num=20;
    let subract=()=>{
        return 30-num;
    }
    return subract;
};

let nums=add();
console.log(nums());