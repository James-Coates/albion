declare module 'react-reveal' {
  interface CommonProps {
    duration?: number;
    delay?: number;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    count?: number;
    forever?: boolean;
    mirror?: boolean;
    opposite?: boolean;
    distance?: string;
    spy?: any;
    when?: any;
    in?: any;
    appear?: boolean;
    enter?: boolean;
    exit?: boolean;
    timeout?: number;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    force?: boolean;
    refProp?: string;
    innerRef?: () => any;
    cascade?: boolean;
    collapse?: boolean;
    fraction?: number;
    ssrFadeout?: boolean;
    ssrReveal?: boolean;
    wait?: number;
    onReveal?: () => any;
  }

  export const Zoom: React.FC<CommonProps>;
  export const Fade: React.FC<CommonProps>;
}

declare module 'react-reveal/globals' {
  export default (options: any) => any;
}
