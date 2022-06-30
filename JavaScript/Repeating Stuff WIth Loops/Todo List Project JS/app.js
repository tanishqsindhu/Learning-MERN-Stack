let list=[];//array for storing list.
while(true){
    let answer=prompt("What you want to Do?").toLowerCase();
    if(answer==='new'){
        let task =prompt("What task do you want to add?")
        list.push(task);
    }
    if(answer==='list'){
        for(let index in list){
            console.log(`${index} : ${list[index]}`);
        }
    }
    if(answer==='delete'){
        let index =parseInt(prompt("What is the index you want to delete?"))
        while(index>list.length||index<0){let index =parseInt(prompt("What is the index you want to delete?"))}
        list=list.slice(0,index);
    }
    if(answer==='quit'){
        console.log("You are Free!!!!")
        break;
    }
}
