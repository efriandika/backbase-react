import PropTypes from 'prop-types';
import styles from './Skeleton.module.scss';

export function Skeleton({
  count,
  width,
  wrapper: Wrapper,
  height,
  circle,
  style: customStyle,
  className: customClassName,
}) {
  const elements = [];

  for (let i = 0; i < count; i++) {
    let elementStyle = {};

    if (width !== null) {
      elementStyle.width = width;
    }

    if (height !== null) {
      elementStyle.height = height;
    }

    if (width !== null && height !== null && circle) {
      elementStyle.borderRadius = "50%";
    }

    let className = styles.skeleton;

    if (customClassName) {
      className += " " + customClassName;
    }

    elements.push(
      <span
        key={i}
        className={className}
        style={{
          ...customStyle,
          ...elementStyle,
        }}
      >
        &zwnj;
      </span>
    );
  }

  return (
    <span>
      {Wrapper
        ? elements.map((element, i) => (
          <Wrapper key={i}>
            {element}
            &zwnj;
          </Wrapper>
        ))
        : elements}
    </span>
  );
}

Skeleton.propTypes = {
  count: PropTypes.number,
  width: PropTypes.any,
  wrapper: PropTypes.any,
  height: PropTypes.any,
  circle: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

Skeleton.defaultProps = {
  count: 1,
  width: null,
  wrapper: null,
  height: null,
  circle: false,
  style: {},
  className: "",
};
