import Link from "next/link";

export default function Footer() {
    return (
        <footer className="sticky z-50 transition-all duration-300 border-t border-typography/10 bg-background">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6 bg-background">
                {/* Brand */}
                <div>
                    <h3 className="text-lg font-semibold text-typography">
                        Joyal<span className="text-primary">.</span>
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-typography/75">
                        Building performant, scalable, and polished digital
                        products with React, Next.js, and TypeScript.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-sm font-semibold text-typography">
                        Navigation
                    </h4>
                    <div className="mt-4 space-y-3 text-sm text-typography/75">
                        <Link
                            href="/portfolio"
                            className="block hover:text-typography">
                            Portfolio
                        </Link>
                        <Link
                            href="/portfolio#projects"
                            className="block hover:text-typography">
                            Projects
                        </Link>
                        <Link
                            href="/portfolio#experience"
                            className="block hover:text-typography">
                            Experience
                        </Link>
                        <Link
                            href="/blog"
                            className="block hover:text-typography">
                            Blog
                        </Link>
                        <Link
                            href="/lab"
                            className="block hover:text-typography">
                            Lab
                        </Link>
                    </div>
                </div>

                {/* Connect */}
                <div>
                    <h4 className="text-sm font-semibold text-typography">
                        Connect
                    </h4>
                    <div className="mt-4 space-y-3 text-sm text-typography/75">
                        <Link
                            href="https://github.com/joyalgeorgekj"
                            target="_blank"
                            className="block hover:text-typography">
                            GitHub
                        </Link>

                        <Link
                            href="https://linkedin.com/in/joyalgeorgekj"
                            target="_blank"
                            className="block hover:text-typography">
                            LinkedIn
                        </Link>

                        <Link
                            href="mailto:joyalgeorgekj@gmail.com"
                            className="block hover:text-typography">
                            Email
                        </Link>
                    </div>
                    <h4 className="mt-8 text-sm font-semibold text-typography">
                        Legal
                    </h4>
                    <div className="mt-4 space-y-3 text-sm text-typography/75">
                        <Link
                            className=" mt-4 space-y-3 text-sm text-typography/75 block hover:text-typography"
                            href={"/privacy"}>
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold text-typography">
                        Let’s Build
                    </h4>
                    <p className="text-sm text-typography/75">
                        Have a project in mind? Let’s discuss and create
                        something impactful.
                    </p>

                    <Link
                        href="mailto:joyalgeorgekj@gmail.com"
                        className="btn btn-secondary">
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-typography/10">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-center md:text-start text-typography/75 md:flex-row md:items-center md:justify-between md:px-6">
                    <p>
                        © {new Date().getFullYear()} Joyal George K J. All
                        rights reserved.
                    </p>
                    <p>Built with Next.js · Tailwind CSS v4</p>
                </div>
            </div>
        </footer>
    );
}
