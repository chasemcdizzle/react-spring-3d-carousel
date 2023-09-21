import { Component } from "react";
export declare type OffsetFn = (offsetFromCenter: number, index: number) => {
    transform?: string;
    left?: string | number;
    opacity?: number;
};
export interface IProps {
    slides: Slide[];
    goToSlide?: number;
    showNavigation: boolean;
    offsetRadius: number;
    animationConfig: object;
    goToSlideDelay: number;
    offsetFn?: OffsetFn;
}
interface IState {
    index: number;
    goToSlide: number | null;
    prevPropsGoToSlide: number;
    newSlide: boolean;
}
declare class CarouselComponent extends Component<IProps, IState> {
    state: IState;
    goToIn?: number;
    static defaultProps: {
        offsetRadius: number;
        animationConfig: {
            tension: number;
            friction: number;
        };
        goToSlideDelay: number;
    };
    static getDerivedStateFromProps(props: IProps, state: IState): {
        prevPropsGoToSlide: number | undefined;
        goToSlide: number | undefined;
        newSlide: boolean;
    } | null;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    modBySlidesLength: (index: number) => number;
    moveSlide: (direction: -1 | 1) => void;
    getShortestDirection(from: number, to: number): -1 | 0 | 1;
    handleGoToSlide: () => void;
    clampOffsetRadius(offsetRadius: number): number;
    getPresentableSlides(): Slide[];
    render(): JSX.Element;
}
export declare class Carousel extends CarouselComponent {
}
export {};
