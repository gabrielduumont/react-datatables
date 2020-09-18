import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Content from '../Content'
import Header from '../Header'
import setLanguage from '../../constants/setLanguage'
import styles from './styles.scss'


export default function Table({ headers, activeOrderHeader, setActiveOrderHeader, content, lang = null }) {
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
                />
                <Content headers={headers} content={content} />
            </table>
        );
    }, [headers, activeOrderHeader, content]);
    return contentRenderer;
}

Table.propTypes = {
    lang: PropTypes.any,
}
