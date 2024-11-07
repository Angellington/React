import { ChevronRightIcon } from "lucide-react";

function Task(props) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-tr-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button  className="bg-slate-400 text-white rounded-md p-2 w-full">{task.title}</button>
                    <button className="bg-slate-400 text-white rounded-md p-2"> <ChevronRightIcon /></button>
                </li>
            ))}
        </ul>
    );
}

export default Task;