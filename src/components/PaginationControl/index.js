import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import setLanguage from '../../constants/setLanguage'
import styles from './styles.scss'

export default function PaginationControl({ maxRecordsPerPage, setMaxRecordsPerPage, lang = null }) {
  const language = setLanguage(lang);
  const content = useMemo(() => {
    const onChange = (e) => {
      return !e.target.value || e.target.value === 0 ?
        setMaxRecordsPerPage(1) : setMaxRecordsPerPage(parseInt(e.target.value))
    }

    return (
      <div className={styles.gdDatatablePaginationControlWrapper}>
        <label htmlFor="gd-datatables-page-size-input">{language.paginationControl.label}</label>
        <select
          value={maxRecordsPerPage}
          id="gd-datatables-page-size-input"
          onChange={onChange}
        >
          <option value={1}>1</option>
          <option value={10}>10</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
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
