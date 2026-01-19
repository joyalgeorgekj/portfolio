import { useRef } from "react";
import "../index.css";
import useViewportCheck from "../hooks/useViewportCheck";
import { useNavigate } from "react-router-dom";

function ProjectCard({
    index,
    id,
    name,
    description,
    image,
    projectType,
    visitLink,
    codeLink,
    techStack,
}) {
    const cardRef = useRef(null);
    const navigate = useNavigate();
    const isVisible = useViewportCheck(cardRef);

    return (
        <div
            onClick={() => {
                navigate("/project/" + id);
            }}
            ref={cardRef}
            className={`h-fit fadeIn dark:bg-gray-800 bg-gray-200 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] ${
                isVisible ? "in-view" : ""
            }`}
        >
            <div className="flex justify-between items-center">
                <h2 className="font-mono uppercase text-gray-700 dark:text-gray-300">
                    {index} | {projectType}
                </h2>
            </div>

            <div className="flex flex-wrap gap-6 mt-4">
                <img
                    className="w-full lg:w-full rounded-lg object-cover shadow-md"
                    width={400}
                    height={300}
                    loading="lazy"
                    src={import.meta.env.VITE_STORE_URL + image}
                    alt="Project Image"
                />

                <div className="w-full lg:w-full flex flex-col gap-4">
                    <p className="mobile: text-xl laptop:text-2xl font-mono text-blue-600 dark:text-blue-400 capitalize">
                        {name}
                    </p>
                    <p className="dark:text-gray-300 text-sm lg:text-base line-clamp-3">
                        {description}
                    </p>

                    <div className="text-3xl flex gap-4 flex-wrap">
                        {techStack.map((tech) => (
                            <i
                                key={tech}
                                className={`devicon-${tech} colored`}
                            ></i>
                        ))}
                    </div>

                    <div className="flex w-full gap-4 pt-4">
                        <a
                            href={
                                "https://github.com/joyalgeorgekj" + codeLink
                            }
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                variant="outlined"
                                className="text-blue-500 hover:shadow-md border border-blue-500 px-4 py-2 rounded-md hover:border-blue-600 hover:text-blue-600"
                            >
                                View Code
                            </button>
                        </a>
                        <a href={visitLink} target="_blank" rel="noreferrer">
                            <button
                                variant="contained"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                View Site
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
