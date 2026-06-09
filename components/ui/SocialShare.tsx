"use client";

import Link from "next/link";
import {
    FaFacebook,
    FaLinkedin,
    FaReddit,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";

interface Props {
    title: string;
    url: string;
}

export default function SocialShare({ title, url }: Props) {
    const encodedUrl = encodeURIComponent(url);

    const encodedTitle = encodeURIComponent(title);

    const links = [
        {
            icon: FaXTwitter,

            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,

            label: "Twitter",
        },

        {
            icon: FaLinkedin,

            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,

            label: "LinkedIn",
        },

        {
            icon: FaReddit,

            href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,

            label: "Reddit",
        },

        {
            icon: FaWhatsapp,

            href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,

            label: "WhatsApp",
        },

        {
            icon: FaFacebook,

            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,

            label: "Facebook",
        },
    ];

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-typography/50">
                Share
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
                {links.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-typography/10 bg-white/5 text-lg text-typography/75 transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary">
                            <Icon />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
