import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import setLanguage from '../../constants/setLanguage'
import styles from './styles.scss'

const defaultPaginationControlStyle = {
  wrapper: null,
  label: null,
  input: {
    select: null,
    options: null
  }
}

const OptionsList = ({ values = null, optionStyle = null }) => {
  const options = !!values ? values : [10, 25, 50, 100];
  return options.map((item, index) => {

    return (
      <option
        key={`paginationOption_${index}`}
        value={item}
        style={{ ...optionStyle }}
      >
        {item}
      </option>
    );
  });
}

export default function PaginationControl({ maxRecordsPerPage, setMaxRecordsPerPage, lang = null, tableStyles = null, options = null }) {
  const language = setLanguage(lang);
  const content = useMemo(() => {
    const selectedStyle = !!tableStyles ? { ...tableStyles.paginationControl } : { ...defaultPaginationControlStyle };

    const onChange = (e) => {
      return !e.target.value || e.target.value === 0 ?
        setMaxRecordsPerPage(1) : setMaxRecordsPerPage(parseInt(e.target.value))
    }

    return (
      <div
        className={styles.gdDatatablePaginationControlWrapper}
        style={{ ...selectedStyle.wrapper }}
      >
        <label
          htmlFor="gd-datatables-page-size-input"
          style={{ ...selectedStyle.label }}
        >
          {language.paginationControl.label}
        </label>
        <select
          value={maxRecordsPerPage}
          id="gd-datatables-page-size-input"
          onChange={onChange}
          style={!!selectedStyle.input ? { ...selectedStyle.input.select } : null}
        >
          <OptionsList
            values={options}
            optionStyle={!!selectedStyle.input ? { ...selectedStyle.input.options } : null}
          />
        </select>
      </div>
    )
  }, [maxRecordsPerPage]);

  return content;
}

PaginationControl.propTypes = {
  maxRecordsPerPage: PropTypes.number.isRequired,
  setMaxRecordsPerPage: PropTypes.func.isRequired,
  lang: PropTypes.any,
}
