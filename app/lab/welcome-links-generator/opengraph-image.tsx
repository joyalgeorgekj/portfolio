// app/blog/[slug]/opengraph-image.tsx

import { ImageResponse } from "next/og";
import { EXPERIMENTS } from "@/content/lab/experiments";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
    const post = EXPERIMENTS.find(
        (blog) =>
            blog.id ===
            "welcome-links-generator"
    );

    if (!post) {
        return new ImageResponse(
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0b0f17",
                    color: "white",
                    fontSize: 48,
                    fontWeight: 700,
                }}>
                Blog Not Found
            </div>,
            size
        );
    }

    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "64px",
                background: "linear-gradient(135deg, #0b0f17 0%, #111827 100%)",
                color: "white",
                overflow: "hidden",
            }}>
            {/* Glow Effects */}
            <div
                style={{
                    position: "absolute",
                    top: -120,
                    right: -120,
                    width: 320,
                    height: 320,
                    borderRadius: "9999px",
                    background: "rgba(0, 211, 242, 0.18)",
                    filter: "blur(80px)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: -100,
                    left: -100,
                    width: 280,
                    height: 280,
                    borderRadius: "9999px",
                    background: "rgba(139, 92, 246, 0.18)",
                    filter: "blur(80px)",
                }}
            />

            {/* Top */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    zIndex: 1,
                }}>
                {/* Category */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}>
                    <div
                        style={{
                            width: 12,
                            height: 12,
                            borderRadius: "9999px",
                            background: "#00D3F2",
                        }}
                    />

                    <span
                        style={{
                            fontSize: 24,
                            color: "#94a3b8",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                        }}>
                        {post.status}
                    </span>
                </div>

                {/* Title */}
                <h1
                    style={{
                        fontSize: 72,
                        lineHeight: 1.05,
                        fontWeight: 800,
                        letterSpacing: "-0.04em",
                        maxWidth: "900px",
                        margin: 0,
                    }}>
                    {post.title}
                </h1>

                {/* Description */}
                <p
                    style={{
                        fontSize: 28,
                        lineHeight: 1.5,
                        color: "#94a3b8",
                        maxWidth: "850px",
                        margin: 0,
                    }}>
                    {post.desc}
                </p>
            </div>

            {/* Bottom */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    zIndex: 1,
                }}>
                {/* Branding */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}>
                    <span
                        style={{
                            fontSize: 32,
                            fontWeight: 700,
                        }}>
                        Joyal George K J
                    </span>

                    <span
                        style={{
                            fontSize: 22,
                            color: "#64748b",
                        }}>
                        joyalgeorgekj.com
                    </span>
                </div>
            </div>
        </div>,
        size
    );
}
