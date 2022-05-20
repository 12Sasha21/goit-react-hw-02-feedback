import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

export default function Section({ title, children }) {
  return (
    <section className="title">
      {title}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
