import PropTypes from 'prop-types';
import styles from './Skeleton.module.scss';

/**
 * Skeleton Element can be used to make a component skeleton
 * @author efriandika
 */
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

  // Render multiple rows of skeleton
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
        data-testid="skeleton-element"
      >
        &zwnj;
      </span>
    );
  }

  return (
    <span role="status" aria-live="assertive" aria-label="Loading content...">
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
  /**
   * Total rows
   */
  count: PropTypes.number,

  /**
   * Width of the skeleton element
   */
  width: PropTypes.any,

  /**
   * Component to wrap the skeleton element
   */
  wrapper: PropTypes.any,

  /**
   * Height of the skeleton element
   */
  height: PropTypes.any,

  /**
   * Set element as circle
   */
  circle: PropTypes.bool,

  /**
   * Custom additional style
   */
  style: PropTypes.object,

  /**
   * Custom additional css class
   */
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
