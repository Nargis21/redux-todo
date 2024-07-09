import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-5">
                <Button className="bg-primary-gradient font-semibold">Add Todo</Button>
                <button>Filter</button>
            </div>
            <div className="bg-primary-gradient h-full w-full p-2 rounded-xl  ">
                <div className="p-5 space-y-3 bg-white rounded-lg">
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                </div>
                {/* <div className="flex justify-center items-center bg-white p-5 rounded-md">
                    <h1 className="font-bold">You have no pending task!</h1>
                </div> */}

            </div>
        </div>
    );
};

export default TodoContainer;