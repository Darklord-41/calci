import './ShinyText.css';

const ShinyText = ({
  text,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  speed = 2,
  delay = 0,
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = 'left',
  disabled = false,
  className = '',
}) => {
  const animationDuration = `${speed}s`;
  const animationDelay = `${delay}s`;
  const spreadAngle = spread;
  const isRtl = direction === 'right';

  const style = {
    '--speed': animationDuration,
    '--delay': animationDelay,
    '--spread': `${spreadAngle}deg`,
    '--shine-color': shineColor,
    '--text-color': color,
  };

  const isYoyo = yoyo ? 'yoyo' : '';
  const isPauseOnHover = pauseOnHover ? 'pause-hover' : '';
  const isDisabled = disabled ? 'disabled' : '';
  const isRtlClass = isRtl ? 'rtl' : '';

  return (
    <span
      className={`shiny-text ${isYoyo} ${isPauseOnHover} ${isDisabled} ${isRtlClass} ${className}`}
      style={style}
    >
      {text}
    </span>
  );
};

export default ShinyText;
