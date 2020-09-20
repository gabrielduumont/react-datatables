import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import setLanguage from '../../constants/setLanguage'
import styles from './styles.scss'

const defaultSearchStyle = {
  wrapper: null,
  label: null,
  input: null,
  searchingForLabel: null
}

export default function SearchBox({ searchTerm, setSearchTerm, lang = null, hideLabel = false, tableStyles = null }) {
  const language = setLanguage(lang);
  const content = useMemo(() => {
    const selectedStyle = { ...defaultSearchStyle, ...tableStyles.search };

    return (
      <div
        className={styles.gdDatatableSearchInputWrapper}
        style={{ ...selectedStyle.wrapper }}
      >
        {!hideLabel && (
          <label
            htmlFor="gd-datatables-search-input"
            style={{ ...selectedStyle.label }}
          >
            {language.search.label}
          </label>
        )}
        <input
          id="gd-datatables-search-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder={language.search.placeHolder}
          style={{ ...selectedStyle.input }}
        />
        {!!searchTerm && (
          <p
            style={{ ...selectedStyle.searchingForLabel }}
          >
            {language.search.searchingFor} "{searchTerm}"
          </p>
        )}
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
