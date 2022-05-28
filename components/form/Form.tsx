import { FormEvent, useContext, useEffect, useState } from 'react';
import { FormState } from '../../interfaces/Form';
import styles from './Form.module.css';
import { FormContext } from '../../context/FormContext';
import { hexToRgb } from '../../helpers/colors';

interface Range {
  label: string;
  max: number;
  min: number;
  step: number;
}

const ranges: Range[] = [
  {
    label: 'Size',
    max: 480,
    min: 10,
    step: 1,
  },
  {
    label: 'Radius',
    max: 205,
    min: 0,
    step: 1,
  },
  {
    label: 'Distance',
    max: 50,
    min: 1,
    step: 1,
  },
  {
    label: 'Intensity',
    max: 60,
    min: 1,
    step: 1,
  },
  {
    label: 'Blur',
    max: 100,
    min: 0,
    step: 1,
  },
];

export const Form = () => {
  const { state: InitialState, modifyForm } = useContext(FormContext);
  const [state, setState] = useState<FormState>(InitialState);

  useEffect(() => {
    isIntensity(state.intensity);
  }, [state.background]);

  const onChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { name, value } = currentTarget;
    if (name === 'intensity') {
      isIntensity(Number(value));
    }

    setState(state => {
      return {
        ...state,
        [name as keyof typeof state]: isNaN(Number(value))
          ? value
          : Number(value),
      };
    });
    modifyForm(state);
  };

  const isIntensity = (value: number) => {
    const { background } = state;

    const { first, second } = hexToRgb(background, value);

    setState(state => {
      return { ...state, colors: { first, second } };
    });
  };

  const onClick = (shape: string) => {
    setState(() => {
      return { ...state, shape };
    });
    modifyForm(state);
  };

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="background">
          Color:{' '}
        </label>
        <input
          type="color"
          name="background"
          value={state.background}
          className={styles.color}
          onChange={onChange}
        />
        <span className={styles.hex}>or Hex</span>
        <input
          type="text"
          name="background"
          id="background"
          value={state.background}
          className={styles.hexafield}
          onChange={onChange}
        />
      </div>

      {ranges.map((range: Range) => {
        return (
          <div className={styles.field} key={range.label}>
            <label className={styles.label} htmlFor={range.label.toLowerCase()}>
              {range.label}:{' '}
            </label>
            <input
              type="range"
              className={styles.range}
              name={range.label.toLowerCase()}
              value={
                state[range.label.toLowerCase() as keyof typeof state] as string
              }
              id={range.label.toLowerCase()}
              onChange={onChange}
              max={range.max}
              min={range.min}
              step={range.step}
            />
          </div>
        );
      })}

      <pre className={styles.code}>
        <p className={styles.valueStyle}>
          <span className={styles.nameStyle}>border-radius:</span>
          {state.radius}px;
        </p>
        <p className={styles.valueStyle}>
          <span className={styles.nameStyle}>background:</span>
          {state.background};
        </p>
        <p className={styles.valueStyle}>
          <span className={styles.nameStyle}>box-shadow:</span>{' '}
          {InitialState.position.bottom}
          {state.distance}
          px {InitialState.position.right}
          {state.distance}px {state.blur}px {state.colors.first},
          <br />
          <span className={styles.space}>
            {' '}
            {InitialState.position.top}
            {state.distance}
            px {InitialState.position.left}
            {state.distance}px {state.blur}px {state.colors.second};
          </span>
        </p>
        {state.intensity}
      </pre>
    </div>
  );
};
