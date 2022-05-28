import { createContext } from 'react';
import { FormState, Position } from '../interfaces/Form';

interface ContextProps {
  state: FormState;
  modifyForm: (state: FormState) => void;
  modifyPosition: (position: Position) => void;
}

export const FormContext = createContext({} as ContextProps);
