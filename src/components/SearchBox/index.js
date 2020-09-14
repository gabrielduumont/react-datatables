import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import setLanguage from '../../constants/lang'
import styles from './styles.scss'


export default function SearchBox({ searchTerm, setSearchTerm, lang = null, hideLabel = false }) {
  const language = setLanguage(lang);
  const content = useMemo(() => {
    return (
      <div className={styles.gdDatatableSearchInputWrapper}>
        {!hideLabel && <label htmlFor="gd-datatables-search-input">{language.search.label}</label>}
        <input id="gd-datatables-search-input" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder={language.search.placeHolder} />
        {!!searchTerm && <p>{language.search.searchingFor} "{searchTerm}"</p>}
      </div>
    )
  }, [searchTerm]);

  return content;
}

SearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  lang: PropTypes.any,
  hideLabel: PropTypes.bool,
}
