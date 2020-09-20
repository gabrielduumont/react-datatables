import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Content from '../Content'
import Header from '../Header'
import styles from './styles.scss'

const defaultTableStyle = {
    table: null,
    header: null,
    content: null
};
export default function Table({ headers, activeOrderHeader, setActiveOrderHeader, content, maxColumns = 1, lang = null, tableStyles = null }) {
    const contentRenderer = useMemo(() => {
        const tableStyle = !!tableStyles ? { ...tableStyles } : { ...defaultTableStyle };
        return (
            <table
                className={styles.gdDatatableTable}
                cellPadding={0}
                cellSpacing={0}
                style={{ ...tableStyle.table }}
            >
                <Header
                    headers={headers}
                    activeOrderHeader={activeOrderHeader}
                    setActiveOrderHeader={setActiveOrderHeader}
                    maxColumns={maxColumns}
                    headerStyle={{ ...tableStyle.header }}
                    isFooter={false}
                />
                <Content
                    headers={headers}
                    content={content}
                    maxColumns={maxColumns}
                    contentStyle={{ ...tableStyle.content }}
                />
                <Header
                    headers={headers}
                    activeOrderHeader={activeOrderHeader}
                    setActiveOrderHeader={setActiveOrderHeader}
                    maxColumns={maxColumns}
                    headerStyle={{ ...tableStyle.footer }}
                    isFooter={true}
                />
            </table>
        );
    }, [headers, activeOrderHeader, content, maxColumns]);

    return contentRenderer;
}

Table.propTypes = {
    lang: PropTypes.any,
    filterByColumn: PropTypes.bool,
}
