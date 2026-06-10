import { JSX } from "react";

export type Experiment = {
    id: string;
    title: string;
    desc: string;
    status: string;
    Component: () => JSX.Element;
};
