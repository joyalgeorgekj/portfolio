import { Skill } from "@/types/skill.type";
import SkillCard from "./SkillCard";
import AnimateCard from "../ui/AnimateCard";

interface Props {
    category: string;
    skills: Skill[];
}

export default function SkillCategoryCard({ category, skills }: Props) {
    return (
        <div
            className={`group card rounded-2xl p-5`}>
            <h3 className="capitalize text-sm font-semibold text-typography/75">
                {category}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((item, ind) => (
                    <AnimateCard key={item.title} delayTimes={ind}>
                        <SkillCard skill={item} />
                    </AnimateCard>
                ))}
            </div>
        </div>
    );
}
