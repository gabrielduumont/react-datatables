import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import setLanguage from '../../constants/setLanguage'
import styles from './styles.scss'

const defaultPaginationStyle = {
  wrapper: null,
  buttonsWrapper: null,
  previous: null,
  next: null,
  page: null,
  total: null,
}

export default function Pagination({ pageLength, dataLength, currentPage, totalPages, setCurrentPage, lang = null, tableStyles = null }) {
  const language = setLanguage(lang);
  const content = useMemo(() => {
    const selectedStyle = { ...defaultPaginationStyle, ...tableStyles.paginationButtons };

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
          pageNumbersArray.push(
            <button
              key={'page_' + page}
              data-active={true}
              style={{ ...selectedStyle.activePage }}
            >
              {page}
            </button>
          );
        }
        else {
          pageNumbersArray.push(
            <button
              key={'page_' + page}
              onClick={() => onSwitchPage(page)}
              style={{ ...selectedStyle.page }}
            >
              {page}
            </button>
          );
        }
      }
      return pageNumbersArray.map(item => item)
    }
    const isNextDisabled = currentPage === totalPages
    const isPreviousDisabled = currentPage === 1
    return (
      <div
        className={styles.gdDatatablesPaginationWrapper}
        style={{ ...selectedStyle.wrapper }}
      >
        <div style={{ ...selectedStyle.buttonsWrapper }}>
          <button
            onClick={onPreviousPage}
            disabled={isPreviousDisabled}
            style={{ ...selectedStyle.previous }}
          >
            {language.pagination.previous}
          </button>

          {renderPageNumbers()}

          <button
            onClick={onNextPage}
            disabled={isNextDisabled}
            style={{ ...selectedStyle.next }}
          >
            {language.pagination.next}
          </button>
        </div>
        <p style={{ ...selectedStyle.total }}>
          {language.pagination.totalLabel(pageLength, dataLength)}
        </p>
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
