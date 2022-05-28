import { FormState, Position } from '../interfaces/Form';
type Action =
  | {
      type: 'Form -  Modify Form State';
      formState: FormState;
    }
  | {
      type: 'Form -  Modify Position';
      position: Position;
    };

export const FormReducer = (state: FormState, action: Action) => {
  switch (action.type) {
    case 'Form -  Modify Form State':
      return { ...state, ...action.formState };
    case 'Form -  Modify Position':
      return { ...state, position: action.position };
    default:
      return state;
  }
};
