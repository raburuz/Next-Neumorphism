import { useContext, useState, useEffect } from 'react';
import { FormContext } from '../../context/FormContext';
import style from './Neumorphism.module.css';

export const Neumorphism = () => {
  const { state, modifyPosition } = useContext(FormContext);
  const [position, setPosition] = useState({
    top: '',
    right: '-',
    left: '',
    bottom: '-',
  });
  const { background, size, radius, blur, distance, colors } = state;
  const { top, left, right, bottom } = position;

  useEffect(() => {
    modifyPosition(position);
  }, [position]);

  const onclick = (direction: string) => {
    switch (direction) {
      case 'top':
        setPosition(position => ({
          ...position,
          top: '',
          right: '-',
          left: '',
          bottom: '-',
        }));

        break;
      case 'bottom':
        setPosition(position => ({
          ...position,
          top: '',
          right: '',
          left: '-',
          bottom: '-',
        }));
        break;
      case 'right':
        setPosition(position => ({
          ...position,
          top: '-',
          right: '-',
          left: '',
          bottom: '',
        }));
        break;
      case 'left':
        setPosition(position => ({
          ...position,
          top: '-',
          right: '',
          left: '-',
          bottom: '',
        }));
        break;

      default:
        break;
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '600px', //400media
        height: '600px', //400media
        borderRadius: '25px',
        background,
      }}
    >
      <button
        className={style.btn}
        style={{
          top: 0,
          left: 0,
          borderEndEndRadius: '30px',
        }}
        onClick={() => onclick('top')}
      ></button>
      <button
        className={style.btn}
        style={{ top: 0, right: 0, borderEndStartRadius: '30px' }}
        onClick={() => onclick('right')}
      ></button>
      <button
        className={style.btn}
        style={{ bottom: 0, right: 0, borderStartStartRadius: '30px' }}
        onClick={() => onclick('left')}
      ></button>
      <button
        className={style.btn}
        style={{ bottom: 0, left: 0, borderStartEndRadius: '30px' }}
        onClick={() => onclick('bottom')}
      ></button>
      <div
        style={{
          width: size,
          height: size,
          background,
          borderRadius: radius,
          boxShadow: `${bottom}${distance}px ${right}${distance}px ${blur}px ${colors.first}, ${top}${distance}px ${left}${distance}px ${blur}px  ${colors.second}`,
        }}
      ></div>
    </div>
  );
};
