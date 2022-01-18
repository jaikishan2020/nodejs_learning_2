const {readFile,writeFile}=require('fs')
console.log('start')

readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first=result;
    readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        const second=result;

        writeFile('./content/subfolder/result_async.txt',`Here is the result of async merging :${first},${second}`,
        (err,result)=>{
            if (err){
                console.log(err)
                return
            }
            console.log('done with the current task')
        })

    })
})
console.log('starting the next task')
