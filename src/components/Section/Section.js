import React from 'react';
import style from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ className, as: TagName, title, children }) => {
  const classList = [style.section, className].join(' ');
  return (
    <TagName className={classList}>
      <h2>{title}</h2>
      {children}
    </TagName>
  );
};

Section.defaultProps = {
  as: 'div',
  className: '',
};

Section.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Section;
