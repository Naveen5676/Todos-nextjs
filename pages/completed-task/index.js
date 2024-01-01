import { MongoClient } from "mongodb";
import Completedtodos from "../../components/Todos/Completedtodos";

export default function Completedtask(props){
return <Completedtodos completedtodos={props.todos}/>
}

export async function getStaticProps(props){

    const client = await MongoClient.connect(
        "mongodb+srv://new-user31:EXEY2T9sVmiwh1Nm@cluster0.pepc9yq.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
    
      const todosdata = db.collection("todos");
    
      const todos = await todosdata.find({completed:true}).toArray();
      client.close();

    return{
        props:{
            todos: todos.map((todo)=>({
                task:todo.task,
                id: todo._id.toString()
            }))
        },
    };
}