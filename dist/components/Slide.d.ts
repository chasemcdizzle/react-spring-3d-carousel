import React from "react";
import { OffsetFn } from "./Carousel";
interface IProps {
    content: JSX.Element;
    onClick?: () => void;
    offsetRadius: number;
    index: number;
    animationConfig: object;
    offsetFn?: OffsetFn;
}
export default function Slide({ content, offsetRadius, index, animationConfig, onClick, offsetFn, }: IProps): React.JSX.Element;
export {};
