import Vivus from 'vivus';

declare module 'vivus' {
  export default class Vivus {
    constructor(
      element: string | HTMLElement | SVGElement,
      options?: {
        type?: string;
        duration?: number;
        start?: string;
        animTimingFunction?: (x: number) => number;
      },
      callback?: () => void
    );

    static EASE: (x: number) => number;
    static EASE_IN: (x: number) => number;
    static EASE_OUT: (x: number) => number;
    static EASE_OUT_BOUNCE: (x: number) => number;
  }
}
