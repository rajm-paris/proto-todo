const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const client = new todoPackage.Todo("localhost:40000", grpc.credentials.createInsecure());
client.createTodo({
    "id": -2,
    "text": "Doing.. Laundry"
}, (err, response)=>{
    console.log("Received from server"+ JSON.stringify(response));

});