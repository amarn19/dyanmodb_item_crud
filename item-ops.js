const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' });

const docClient = new AWS.DynamoDB.DocumentClient();
const dynamodb = new AWS.DynamoDB();

// //creating table

// dynamodb.createTable({
//     TableName: "demo",
//     AttributeDefinitions: [
//         {
//             AttributeName: "user_id",
//             AttributeType: "S"
//         },
//         {
//             AttributeName: "timestamp",
//             AttributeType: "N"
//         },
//     ],
//     KeySchema: [
//         {
//             AttributeName: "user_id",
//             KeyType: "HASH"
//         },
//         {
//             AttributeName: "timestamp",
//             KeyType: "RANGE"
//         }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 1,
//         WriteCapacityUnits: 1
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//creating new record
// docClient.put({
//     TableName: 'demo',
//     Item: {
//         user_id: 'amar',
//         timestamp: 2,
//         title: 'the two tales'
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

//updating record

// docClient.update({
//         TableName: 'demo',
//         Key: {
//             user_id: 'amar',
//             timestamp: 2
//         },
//         UpdateExpression: 'SET #t = :t',
//         ExpressionAttributeNames: {
//             '#t': 'title'
//         },
//         ExpressionAttributeValues: {
//             ':t': 'The two states'
//         }
//     }, (err, data)=>{
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
// });

//deleting item record
// docClient.delete({
//     TableName: 'demo',
//     Key: {
//         user_id: 'amar',
//         timestamp: 2
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//multiple item crud operations
docClient.batchWrite({
    RequestItems: {
        'demo': [
            {
                PutRequest: {
                    Item: {
                        user_id: 'amar1',
                        timestamp: 1,
                        title: 'Title 11',
                        content: 'Content 11'
                    }
                }
            },
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'madhu',
                        timestamp: 3
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'sukesh',
                        timestamp: 2,
                        title: 'Title 22',
                        content: 'Content 22'
                    }
                }

            }
        ]
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//batchwrite cannot update items, to update item use updateitem