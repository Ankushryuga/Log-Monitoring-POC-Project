/**
 * This is service file of addFiles Controllers
 */

const {StatusCodes}=require('http-status-codes');
const logger=require("../Logger/fileLogger");
const users=require("../Models/users");
const {readFile}=require('fs/promises');
const addFilesService=async(files, username)=>{
    try{
        let data=[];
        for(let file of files){
            let input=(await readFile(file)).toString('UTF8').split('\n');

            data.push(input);
        }
        // console.log(data[0]);
        // console.log(data[0][0]);
           
            // console.log(firstObjectValue);
        // console.log(data.toString().json());
        // const jsonFormat=data.toString();
        // const result=JSON.stringify(jsonFormat);
        return {
            status:1,
            data:data
        };
    }catch(error){
        console.log(error);
    }
    // if(!username){
    //     return {
    //         status: 0,
    //         message: "Unknown user Please register first"
    //     };
    // }
    // const findUser= await users.findOne({where:{username}});
    // if(!findUser){
    //     return {
    //         status: 0,
    //         message: "Unknown user Please register first"
    //     }
    // }
    // for(const file of files){

    // }
};
// const files="../logs/info-rotate-2024-05-12.log";
// const username="ankush"
// addFilesService(files, username);


// const storeLogDataInDatabase=async(result)=>{
//     // console.log(result.data);
//     if(result.status===1){
//         let timestampF=result.data[0][0];
//         // console.log("FIRST LINE: ", timestampF);
//         // JSON.parse(timestampF);
//         // let timestamp=JSON.parse(timestampF);
//         // console.log("In add file service: ", timestamp.timestamp);
//         // console.log("In side add File Service file: ", result.data[0]);
//     }

//     // const extractedData = result.data.flatMap(innerArray => {
//     //     return innerArray.map(entry => {
//     //         const splitEntry = entry.split(' [');
            
//     //         // Check if the entry has the expected format
//     //         if (splitEntry.length === 2) {
//     //             const [timestamp, rest] = splitEntry;
                
//     //             // Use regular expression to extract level and message
//     //             const match = rest.match(/^\w+]\s(\w+):\s(.+)/);
                
//     //             if (match) {
//     //                 const [, level, message] = match;
                    
//     //                 return {
//     //                     timestamp,
//     //                     level,
//     //                     message
//     //                 };
//     //             } else {
//     //                 // Handle unexpected format
//     //                 // console.error(`Unexpected format for entry: ${entry}`);
//     //                 return null;
//     //             }
//     //         } else {
//     //             // Handle unexpected format
//     //             // console.error(`Unexpected format for entry: ${entry}`);
//     //             return null;
//     //         }
//     //     }).filter(Boolean); // Remove null entries
//     // });
    
//     const processData = (data) => {
//         // Check if the line is in JSON format
//         if (line.startsWith('{')) {
//             try {
//                 const { level, message, service, timestamp } = JSON.parse(line.toLowerCase());
//                 return { timestamp, level, service, message };
//             } catch (error) {
//                 console.error(`Error parsing JSON data: ${error.message}`);
//                 return null;
//             }
//         }
//         // Check if the line is in the second format
//         else {
//             const match = line.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)\s+\[([^\]]+)\]\s+(\w+):\s(.+)/);
//             if (match) {
//                 const [, timestamp, app, level, message] = match;
//                 return { timestamp, level, service: app, message };
//             } else {
//                 console.error(`Unexpected format for entry: ${line}`);
//                 return null;
//             }
//         }
//     };
    
//     const extractedData = result.data.flatMap(innerArray => {
//         return innerArray.map(processData).filter(Boolean);
//     });
    
//     // console.log(extractedData);
    
//     console.log(extractedData);
    
// return extractedData;
// }
// console.log(storeLogDataInDatabase);
const storeLogDataInDatabase = async (result) => {
    if (result.status === 1) {
        let extractedData = [];

        const processData = (line) => {
            // Check if the line is in JSON format
            if (line.startsWith('{')) {
                try {
                    const { level, message, service, timestamp } = JSON.parse(line.toLowerCase());
                    return { timestamp, level, service, message };
                } catch (error) {
                    console.error(`Error parsing JSON data: ${error.message}`);
                    return null;
                }
            }
            // Check if the line is in the second format
            else {
                const match = line.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)\s+\[([^\]]+)\]\s+(\w+):\s(.+)/);
                if (match) {
                    const [, timestamp, app, level, message] = match;
                    return { timestamp, level, service: app, message };
                } else {
                    console.error(`Unexpected format for entry: ${line}`);
                    return null;
                }
            }
        };

        result.data.forEach(innerArray => {
            extractedData = [...extractedData, ...innerArray.map(processData).filter(Boolean)];
        });

        console.log(extractedData);

        return extractedData;
    }
};

// Usage:
// const logData = await storeLogDataInDatabase(result);
// Now you can use the extracted log data for further processing or storage.



module.exports={
    addFilesService,
    storeLogDataInDatabase
}