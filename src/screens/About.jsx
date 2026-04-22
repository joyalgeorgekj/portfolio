import React from "react";

function About() {
    return (
        <div className="font-mono text-lg py-8 min-h-screen laptop:px-24">
            <div className="relative z-10 p-6 rounded-lg bg-opacity-20">
                <h1 className="mobile:text-2xl tablet:text-3xl laptop:text-4xl mobile:border-b tablet:border-b-2 laptop:border-b-4 font-bold dark:text-blue-400 text-blue-600 border-blue-600 dark:border-blue-500 pb-3">
                    About Me
                </h1>

                <div className="mt-6">
                    <h2 className="text-3xl font-semibold text-black dark:text-white">
                        Joyal George K J 🚀
                    </h2>
                    <p className="dark:text-gray-400 text-gray-600 text-lg font-medium">
                        Software Engineer | JavaScript / React / Node.js | Web Applications
                    </p>
                </div>

                <p className="mt-6 dark:text-gray-300 text-gray-800 leading-relaxed">
                    I am a passionate{" "}
                    <span className="dark:text-blue-400 text-blue-600 font-semibold">
                        Javascript/Typescript developer
                    </span>{" "}
                    dedicated to building high-performance and scalable web
                    applications. My journey into development was
                    unconventional—I took on my first project with minimal
                    experience, learning as I built a{" "}
                    <span className="font-semibold">bachelor’s project</span>{" "}
                    for a friend.
                </p>

                <p className="mt-4 dark:text-gray-300 text-gray-800 leading-relaxed">
                    Since then, I have tackled various{" "}
                    <span className="font-semibold">frontend challenges</span>{" "}
                    on platforms such as
                    <span className="dark:text-blue-400 text-blue-600">
                        {" "}
                        Frontend Mentor
                    </span>{" "}
                    and{" "}
                    <span className="dark:text-blue-400 text-blue-600">
                        iCodeThis
                    </span>
                    , honing my problem-solving skills through{" "}
                    <span className="dark:text-blue-400 text-blue-600">
                        HackerRank
                    </span>{" "}
                    and{" "}
                    <span className="dark:text-blue-400 text-blue-600">
                        CodeWars
                    </span>
                    .
                </p>

                <p className="mt-4 dark:text-gray-300 text-gray-800 leading-relaxed">
                    Despite challenges—including working part-time as a{" "}
                    <span className="font-semibold">fuel attendant</span> after
                    my laptop broke—I remained committed to my goal of becoming
                    a <span className="font-semibold">developer</span>. I also
                    secured
                    <span className="dark:text-green-400  text-green-600 font-bold">
                        {" "}
                        1st place
                    </span>{" "}
                    in an{" "}
                    <span className="font-semibold">
                        inter-university web development competition
                    </span>
                    .
                </p>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                        Skills
                    </h3>
                    <div className="text-4xl flex gap-6 flex-wrap justify-center p-6 rounded-lg shadow-lg dark:bg-gray-700 bg-gray-500 bg-opacity-20">
                        <i className="devicon-html5-plain-wordmark colored"></i>
                        <i className="devicon-css3-plain-wordmark colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-react-original-wordmark colored"></i>
                        <i className="devicon-redux-original colored"></i>
                        <i className="devicon-nextjs-original-wordmark colored"></i>
                        <i className="devicon-tailwindcss-original colored"></i>
                        <i className="devicon-github-original-wordmark colored"></i>
                        <i className="devicon-npm-original-wordmark colored"></i>
                        <i className="devicon-postman-plain colored"></i>
                        <i className="devicon-sass-original colored"></i>
                        <i className="devicon-vscode-plain colored"></i>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold dark:text-blue-400 text-blue-600">
                        Mission
                    </h3>
                    <p className="dark:text-gray-300 text-gray-800 mt-4 leading-relaxed">
                        My ultimate aspiration is to{" "}
                        <span className="font-semibold">build a company</span>{" "}
                        that
                        <span className="dark:text-green-400 text-green-600 font-bold">
                            {" "}
                            prioritizes people over profit
                        </span>
                        , contributing to the advancement of civilization into
                        the{" "}
                        <span className="dark:text-blue-400 text-blue-600 font-semibold">
                            next era
                        </span>
                        . I firmly believe technology should empower rather than
                        exploit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
