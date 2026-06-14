"use client";

import { BASE_URL } from "@/constants/basic";
import { useEffect } from "react";

function useConsoleUI() {
    // Terms of Use   : ${BASE_URL}/terms

    useEffect(() => {
        console.group("Short Intro");
        console.log(`Hey ______,

Welcome, and thanks for stopping by.

Here's the short version:

I'm Joyal George K J, a software developer who enjoys building software that solves real problems. JavaScript and TypeScript are my primary tools, though I'm generally more interested in solving problems than being tied to a specific technology.

Over the years I've worked on web applications, developer tooling, automation systems, open source contributions, and various experiments. If you have an idea, proposal, opportunity, or something slightly crazy you'd like to build, don't hesitate to reach out.

Useful Links
------------
Home      : ${BASE_URL}/
Portfolio : ${BASE_URL}/portfolio
Blog      : ${BASE_URL}/blog
Lab       : ${BASE_URL}/lab
Open Source : ${BASE_URL}/portfolio#opensource

Connect
-------
GitHub    : https://github.com/joyalgeorgekj
LinkedIn  : https://linkedin.com/in/joyalgeorgekj
Mail      : joyalgeorgekj@gmail.com

Privacy & Security
------------------
Privacy Policy : ${BASE_URL}/privacy-policy
Newsletter     : ${BASE_URL}/newsletter

A quick note:

This website uses Microsoft Clarity analytics to understand how visitors interact with the site and improve the experience. If you subscribe to the newsletter, your email address is stored only for newsletter updates and can be removed at any time using the unsubscribe link included in every email.

For more information, please review the privacy policy and Microsoft's Clarity documentation.

Thanks for visiting.

If you have feedback, suggestions, found a bug, or just want to say hi, I'd genuinely love to hear from you.

By
Joyal George K J
Software Developer`);
        console.log(`Psst... try ${BASE_URL}/lab/welcome-links-generator`);
        console.groupEnd();
    }, []);
}

export default useConsoleUI;
