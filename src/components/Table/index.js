import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Content from '../Content'
import Header from '../Header'
import setLanguage from '../../constants/setLanguage'
import styles from './styles.scss'
export default function Table({ headers, activeOrderHeader, setActiveOrderHeader, content, maxColumns = 1, lang = null }) {
    const language = setLanguage(lang);
    const contentRenderer = useMemo(() => {
        return (
            <table
                className={styles.gdDatatableTable}
            >
                <Header
                    headers={headers}
                    activeOrderHeader={activeOrderHeader}
                    setActiveOrderHeader={setActiveOrderHeader}
                    maxColumns={maxColumns}
                />
                <Content
                    headers={headers}
                    content={content}
                    maxColumns={maxColumns}
                />
            </table>
        );
    }, [headers, activeOrderHeader, content, maxColumns]);

    return contentRenderer;
}

Table.propTypes = {
    lang: PropTypes.any,
}
