import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Table from '../Table'
import PaginationControl from '../PaginationControl'
import Pagination from '../Pagination'
import SearchBox from '../SearchBox'
import _ from 'lodash'
import { filterParser, getPagesFromData, orderByParser } from '../../util/helpers/TableHelpers'
import useWindowSize from '../../hooks/useWindowSize'
import styles from './styles.scss'

const getMaxColumnsByWindowWidth = (width) => {
  let maxColumns = 0;
  if(width >= 1281){
    //Device = Desktops
    maxColumns = 5;
  }
  else if(width > 1024 && width <= 1280){
    //Laptops, Desktops
    maxColumns = 4;
  }
  else if(width > 768 && width <= 1024){
    //Tablets, Ipads (portrait)
    maxColumns = 3;
  }
  else if(width > 500 && width <= 768){
    //Tablets, Ipads (portrait)
    maxColumns = 2;
  }
  else if(width <= 500){
    maxColumns = 1;
  }

  return maxColumns;
}
export default function DataTable({ headers, data, lang = null, tableStyles = null, pageSizes = null, initialPageSize = 10, extraConfig = null }) {
  if (!headers || !data) return null;
  else {
    const width = useWindowSize()[0];
    const [activeOrderHeader, setActiveOrderHeader] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [maxRecordsPerPage, setMaxRecordsPerPage] = useState(initialPageSize);
    const [currentPage, setCurrentPage] = useState(1);


    const orderData = (originalDataArray) => {
      const dataArray = [...originalDataArray];
      if (!!activeOrderHeader && dataArray.length > 0) {
        const orderedArray = _.orderBy(dataArray, [o => orderByParser(o, activeOrderHeader.key, headers)], [activeOrderHeader.order]);
        return orderedArray;
      }
      else return dataArray;
    }

    const filterData = (originalDataArray) => {
      const dataArray = [...originalDataArray];
      if (!!searchTerm) {
        const filteredArray = _.filter(dataArray, o => filterParser(o, searchTerm));
        return filteredArray;
      }
      else return dataArray;
    }

    const paginateData = (originalDataArray) => {
      const dataArray = [...originalDataArray];
      if (dataArray.length > 0) {
        const paginatedArray = getPagesFromData(dataArray, maxRecordsPerPage);
        return {
          currentPageData: paginatedArray[currentPage - 1],
          totalPages: paginatedArray.length
        };
      }
      else {
        return {
          currentPageData: dataArray,
          totalPages: dataArray.length
        };
      }
    }

    const initializeArray = (array) => {
      const filteredData = filterData(orderData(array));
      const data = paginateData(filteredData);
      return {
        totalPages: data.totalPages,
        currentPageData: data.currentPageData,
        totalFiltered: filteredData.length
      };
    }

    const tableData = initializeArray(data);

    return (
      <div className={styles.gdDatatableWrapper}>
        <div className={styles.gdDatatableControl}>
          <div className={styles.gdDatatableControlSearch}>
            <SearchBox
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              lang={lang}
              tableStyles={tableStyles}
              extraConfig={extraConfig}
            />
          </div>
          <div className={styles.gdDatatableControlPagination}>
            <PaginationControl
              maxRecordsPerPage={maxRecordsPerPage}
              setMaxRecordsPerPage={setMaxRecordsPerPage}
              lang={lang}
              tableStyles={tableStyles}
              options={pageSizes}
              extraConfig={extraConfig}
            />
          </div>
        </div>
        <div className={styles.gdDatatableTableWrapper}>
          <Table 
            headers={headers}
            activeOrderHeader={activeOrderHeader}
            setActiveOrderHeader={setActiveOrderHeader}
            content={tableData.currentPageData}
            maxColumns={getMaxColumnsByWindowWidth(width)}
            tableStyles={tableStyles}
            extraConfig={extraConfig}
          />
        </div>
        <div className={styles.gdDatatablePagination}>
          <Pagination
            currentPage={currentPage}
            pageLength={!!tableData && !!tableData.currentPageData ? tableData.totalFiltered : 0}
            dataLength={!!data ? data.length : 0}
            totalPages={tableData.totalPages}
            setCurrentPage={setCurrentPage}
            lang={lang}
            tableStyles={tableStyles}
            extraConfig={extraConfig}
          />
        </div>
      </div>
    )
  }
}

DataTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      title: PropTypes.string,
      mustBeVisible: PropTypes.bool
    })
  ),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      headerKey: PropTypes.shape({
        value: PropTypes.any.isRequired,
        title: PropTypes.string,
        parser: PropTypes.func
      })
    })
  ),
  lang: PropTypes.any,
  pageSizes: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ),
  initialPageSize: PropTypes.number
}

// DataTable.defaultProps = {
// }
