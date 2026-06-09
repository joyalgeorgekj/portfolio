import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
};

function page() {
    return (
        <section className="relative mx-auto my-8 max-w-6xl px-4 py-16 md:px-6 rounded-xl bg-background">
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-typography/60">
                            Legal
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight text-typography md:text-5xl">
                            Privacy Policy
                        </h1>

                        <p className="text-base text-typography/75">
                            This website collects limited information to improve
                            user experience, provide newsletter updates, and
                            understand how the portfolio is being used.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-typography">
                                Information Collected
                            </h2>

                            <p className=" text-typography/75">
                                When subscribing to the newsletter, your email
                                address is stored securely in order to send
                                occasional updates about articles, projects, and
                                portfolio improvements.
                            </p>

                            <p className=" text-typography/75">
                                This website may also collect anonymous usage
                                analytics such as page visits, clicks, scrolling
                                behavior, browser information, and device
                                details through analytics tools.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-typography">
                                Analytics and Tracking
                            </h2>

                            <p className=" text-typography/75">
                                Analytics services such as Microsoft Clarity may
                                be used to better understand user interaction
                                and improve accessibility, usability, and
                                performance of the website.
                            </p>

                            <p className=" text-typography/75">
                                These services may collect anonymized technical
                                and behavioral information in accordance with
                                their own privacy policies.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-typography">
                                Newsletter and Email Usage
                            </h2>

                            <p className="text-typography/75">
                                Email addresses submitted through the newsletter
                                form are only used for portfolio and blog
                                related updates.
                                <br />
                                Subscribers can unsubscribe at any time using
                                the unsubscribe link provided in newsletter
                                emails.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-typography">
                                Third Party Services
                            </h2>

                            <p className=" text-typography/75">
                                This website may use third party platforms and
                                infrastructure providers including Vercel,
                                MongoDB Atlas, Resend, and Microsoft Clarity to
                                operate features and services.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-typography">
                                Contact
                            </h2>

                            <p className=" text-typography/75">
                                If you have questions regarding this privacy
                                policy or your data, you can contact:
                                <a
                                    href="mailto:joyalgeorgekj@gmail.com"
                                    className="text-primary transition hover:opacity-80">
                                    {" "}
                                    joyalgeorgekj@gmail.com
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-typography">
                                Updates
                            </h2>

                            <p className=" text-typography/75">
                                This privacy policy may be updated periodically
                                to reflect changes in the website, services, or
                                infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default page;
