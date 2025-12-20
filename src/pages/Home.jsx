import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddSection from "../components/AddSection";
import TasksSec from "../components/TasksSec";
import { Moon, Sun } from "react-feather";
import "../App.css";

function Home() {
  // নোট অ্যাপ
  // नोट ऐप
  // Note app

  const navigate = useNavigate();

  const [dark, setDark] = useState(false);

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const [edited, setEdited] = useState(null);

  const handleButton = (e) => {
    e.preventDefault();

    setCount((count) => count + 1);
    setTasks([...tasks, { id: count, title, details }]);

    setTitle("");
    setDetails("");
  };

  const handleEdit = (id) => {};

  return (
    <div className={dark ? "" : "dark"}>
      <main className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-slate-900 transition-colors">
        <header className="w-[90%] fixed p-4 flex items-center justify-between border-b border-slate-200  backdrop-blur-xl dark:border-slate-700">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Dot Notes App
          </h1>

          {/* <button className="border rounded-2xl p-2 hover:cursor-pointer">
                        Bengali
                    </button>
                    <button className="border rounded-2xl p-2 hover:cursor-pointer">
                        English 
                    </button>
                    <button className="border rounded-2xl p-2 hover:cursor-pointer">
                        Hindi
                    </button> */}

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
                className="text-slate-800 dark:text-white transition-transform duration-300"
              />
            )}
          </button>
        </header>

        <section className="w-[80%] mt-20 p-6">
          <AddSection
            title={title}
            setTitle={setTitle}
            details={details}
            setDetails={setDetails}
            handleButton={handleButton}
          />

          <TasksSec tasks={tasks} setTasks={setTasks} handleEdit={handleEdit} />
        </section>
      </main>
    </div>
  );
}

export default Home;
