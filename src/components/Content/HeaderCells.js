import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default function HeaderCells({ item, index, headers, maxColumns = 1 }) {

  return headers.map((headerItem, innerIndex) => {
    if (innerIndex < maxColumns) {

      const parser = item[headerItem.key].parser;
      const title = item[headerItem.key].title;
      return (
        <td key={headerItem.key + '_' + index} title={title} className='gd-datatable-table-content-cell'>
          {!!parser ? parser(item[headerItem.key].value) : item[headerItem.key].value}
        </td>
      )
    }
    else return null;
  })
}

HeaderCells.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      title: PropTypes.string,
      mustBeVisible: PropTypes.bool
    })
  ).isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      headerKey: PropTypes.shape({
        value: PropTypes.any.isRequired,
        title: PropTypes.string,
        parser: PropTypes.func
      })
    })
  ).isRequired,
  item: PropTypes.shape({
    headerKey: PropTypes.shape({
      value: PropTypes.any.isRequired,
      title: PropTypes.string,
      parser: PropTypes.func
    })
  }).isRequired,
  index: PropTypes.number.isRequired
}
