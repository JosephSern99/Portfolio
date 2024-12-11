declare module 'react-typed' {
    import { Component } from 'react';
  
    interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      startDelay?: number;
      backDelay?: number;
      showCursor?: boolean;
      cursorChar?: string;
      onComplete?: () => void;
      onStringTyped?: (arrayPos: number) => void;
      onLastStringBackspaced?: () => void;
    }
  
    class Typed extends Component<TypedProps> {}
  
    export default Typed;
  }
  