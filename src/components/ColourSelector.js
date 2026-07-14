import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { key , background, label, classname } = config;
  return (
    <button data-testid={key} className={classname} onClick={() => selectNextBackground({background: background})}>
      {label}
    </button>
  )
}
export default ColourSelector;
