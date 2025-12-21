// import { useNavigate } from "react-router-dom";
import { use, useState } from "react";
import AddSection from "../components/AddSection";
import TasksSec from "../components/TasksSec";
import { Moon, Sun } from "react-feather";
import "../App.css";

const content = {
  english: {
    title: "Dot Note",
    
  },
  bangla: {
    title: "ডট নোট",
  },
  hindi: {
    title: "डॉट नोट",
  },
}

function Home() {
  // const navigate = useNavigate();

  const [dark, setDark] = useState(false);

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const [lang ,setLang]=useState("english");
  // const [active, setActive] = useState(1);
  
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
            {content[lang] ? content[lang].title : "No lang"}
          </h1>

          <button onClick={() => setLang("bangla")} className="border text-sm rounded-2xl p-2 hover:cursor-pointer dark:text-white">
            Bengali
          </button>
          <button onClick={() => setLang("english")} className="border text-sm rounded-2xl p-2 hover:cursor-pointer dark:text-white">
            English
          </button>
          <button onClick={() => setLang("hindi")} className="border text-sm rounded-2xl p-2 hover:cursor-pointer dark:text-white">
            Hindi
          </button>

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
