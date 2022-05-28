export interface FormState {
  size: number;
  radius: number;
  distance: number;
  intensity: number;
  blur: number;
  background: string;
  shape: string;
  colors: {
    first: string;
    second: string;
  };

  position: Position;
}

export interface Position {
  top: string;
  right: string;
  left: string;
  bottom: string;
}
