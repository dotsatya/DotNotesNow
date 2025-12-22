// import { useNavigate } from "react-router-dom";
import { use, useState } from "react";
import AddSection from "../components/AddSection";
import TasksSec from "../components/TasksSec";
import { Moon, Sun } from "react-feather";
import "../App.css";

const content = {
  english: {
    title: "Dot Notes",
  },
  bengali: {
    title: "ডট নোটস",
  },
  hindi: {
    title: "डॉट नोट्स",
  },
};

function Home() {
  // const navigate = useNavigate();

  const [dark, setDark] = useState(false);

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const [lang, setLang] = useState("english");
  const [editId, setEditId] = useState(null);

  const handleButton = (e) => {
    e.preventDefault();

    if (editId !== null) {
      setTasks(
        tasks.map((task) => {
          if (task.id === editId) {
            return { ...task, title, details };
          }
          return task;
        })
      );
      setEditId(null);
    } else {
      setTasks([...tasks, { id: count, title, details }]);
      setCount((count) => count + 1);
    }
    setTitle("");
    setDetails("");
  };

  const handleEdit = (id) => {
    const taskNote = tasks.find((t) => t.id === id);
    if (!taskNote) return;

    setTitle(taskNote.title);
    setDetails(taskNote.details);
    setEditId(id);
    setExpanded(true);
  };

  return (
    <div className={dark ? "" : "dark"}>
      <main className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-slate-900 transition-colors">
        <header className="w-[90%] fixed py-2 pb-3 flex items-center justify-between border-b border-slate-200  backdrop-blur-xl dark:border-slate-700">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {content[lang] ? content[lang].title : "No lang"}
          </h1>

          <div className="flex flex-row gap-2 text-gray-600">
            <button
              onClick={() => setLang("bengali")}
              className="border-b border-gray-400 text-sm rounded-lg p-2 hover:cursor-pointer dark:text-white"
            >
              <h6 className="text-gray-500  hover:text-gray-300">Bengali</h6>
            </button>
            <button
              onClick={() => setLang("english")}
              className="border-b border-gray-400 text-sm rounded-lg p-2 hover:cursor-pointer dark:text-white"
            >
              <h6 className="text-gray-500  hover:text-gray-300">English</h6>
            </button>
            <button
              onClick={() => setLang("hindi")}
              className="border-b border-gray-400 text-sm rounded-lg p-2 hover:cursor-pointer dark:text-white"
            >
              <h6 className="text-gray-500  hover:text-gray-300">Hindi</h6>
            </button>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="relative flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 active:scale-95"
          >
            {dark ? (
              <Sun
                size={18}
                className="text-yellow-400 rotate-0 transition-transform duration-300"
              />
            ) : (
              <Moon
                size={18}
                className="text-yellow-400 transition-transform duration-300"
              />
            )}
          </button>
        </header>

        <section className="w-[80%] mt-16 p-6">
          <AddSection
            title={title}
            setTitle={setTitle}
            details={details}
            setDetails={setDetails}
            handleButton={handleButton}
            editId={editId}
            setEditId={setEditId}
            expanded={expanded}
            setExpanded={setExpanded}
          />

          <TasksSec tasks={tasks} setTasks={setTasks} handleEdit={handleEdit} />
        </section>
      </main>
    </div>
  );
}

export default Home;
