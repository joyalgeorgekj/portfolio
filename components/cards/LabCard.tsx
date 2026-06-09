import { Gamepad2Icon } from "lucide-react";
import Link from "next/link";

function LabCard({
    game,
}: {
    game: {
        title: string;
        desc: string;
        status: string;
    };
}) {
    return (
        <Link
            href={"/lab/" + game.id}
            key={game.title}
            className="group bg-background rounded-3xl border border-typography/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 grid gap-3">
            <div className="flex items-start justify-between gap-4">
                <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-primary/20 to-violet-400/20 flex justify-center items-center">
                    <Gamepad2Icon
                        height={24}
                        width={24}
                        className="rounded-2xl group-hover:text-primary"
                    />
                </div>

                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                    {game.status}
                </span>
            </div>

            <h3 className="text-2xl font-semibold leading-tight transition group-hover:text-primary">
                {game.title}
            </h3>

            <p className="max-w-2xl leading-7 text-typography/75">
                {game.desc}
            </p>

            <span className="inline-flex text-sm text-primary transition group-hover:translate-x-1">
                Interact →
            </span>
        </Link>
    );
}

export default LabCard;
