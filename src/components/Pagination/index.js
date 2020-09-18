import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import setLanguage from '../../constants/setLanguage'
import styles from './styles.scss'

export default function Pagination({ pageLength, dataLength, currentPage, totalPages, setCurrentPage, lang = null }) {
  const language = setLanguage(lang);
  const content = useMemo(() => {
    const onSwitchPage = (newPage) => {
      setCurrentPage(newPage);
    }
    const onNextPage = () => {
      if (currentPage < totalPages) onSwitchPage(currentPage + 1)
    }
    const onPreviousPage = () => {
      if (currentPage > 1) onSwitchPage(currentPage - 1)
    }
    const renderPageNumbers = () => {
      const pageNumbersArray = [];


      for (let i = 0; i < totalPages; ++i) {
        const page = i + 1;
        if (page === currentPage) {
          pageNumbersArray.push(<button key={'page_' + page}><b>{page}</b></button>)
        }
        else {
          pageNumbersArray.push(<button key={'page_' + page} onClick={() => onSwitchPage(page)}>{page}</button>)
        }
      }
      return pageNumbersArray.map(item => item)
    }
    const isNextDisabled = currentPage === totalPages
    const isPreviousDisabled = currentPage === 1
    return (
      <div className={styles.gdDatatablesPaginationWrapper}>
        <div>
          <button onClick={onPreviousPage} disabled={isPreviousDisabled}>{"<"}</button>
          {renderPageNumbers()}

          <button onClick={onNextPage} disabled={isNextDisabled}>{">"}</button>
        </div>
        <p>{language.pagination.totalLabel(pageLength, dataLength)}</p>
      </div>
    )
  }, [pageLength, dataLength, currentPage, totalPages]);

  return content;
}

Pagination.propTypes = {
  pageLength: PropTypes.number.isRequired,
  dataLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  lang: PropTypes.any,
}
