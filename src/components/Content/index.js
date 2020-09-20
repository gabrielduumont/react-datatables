import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import HeaderCells from './HeaderCells'
import styles from './styles.scss'

const renderDataAsTextNodes = (data, headers) => {
    let textNodesArray = [];
    for (let i in headers) {
        textNodesArray.push(
            () => (
                <p>
                    <b>{headers[i].label}: </b>
                    {
                        !!data[headers[i].key].parser ?
                            data[headers[i].key].parser(data[headers[i].key].value)
                            : data[headers[i].key].value
                    }
                </p>
            )
        );
    }
    return textNodesArray;
}

const DetailsRow = (data, headers, detailsStyle) => {
    const contentRender = useMemo(() => {
        const textNodes = renderDataAsTextNodes(data, headers);
        return (
            <tr className={styles.gdDetailsRow} style={{...detailsStyle.tr}}>
                <td colSpan={headers.length + 1} style={{...detailsStyle.td}}>
                    {textNodes.map((Component, index) => <Component key={`details_${index}`} />)}
                </td>
            </tr >
        );
    }, [data, headers]);

    return contentRender;
}

const DefaultRow = ({ detailsOpen, index, item, headers, content, toggleDetails, maxColumns = 1, contentStyle = null }) => {
    const contentRender = useMemo(() => {
        return (
            <tr className='gd-datatable-table-content-row' style={{ ...contentStyle.tr }}>
                <td className='gd-datatable-table-content-cell' onClick={toggleDetails} style={{ ...contentStyle.td }}>
                    <span>{!detailsOpen ? <span>+</span> : <span>-</span>}</span>
                </td>
                <HeaderCells
                    index={index}
                    item={item}
                    headers={headers}
                    content={content}
                    maxColumns={maxColumns}
                    cellStyle={{ ...contentStyle.td }}
                />
            </tr>
        );
    }, [detailsOpen, index, item, headers, content, maxColumns]);

    return contentRender;
};

const getItemsToRender = (defaultComponent, detailsOpen = false, data = null, headers = null, detailsStyle = null) => {
    let items = [
        defaultComponent
    ];
    if (!!detailsOpen) {
        items.push(() => DetailsRow(data, headers, detailsStyle));
    }
    return items;
}

const ContentRow = ({ index, item, headers, content, maxColumns = 1, contentStyle = null }) => {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const toggleDetails = () => setDetailsOpen(!detailsOpen);

    const contentRender = useMemo(() => {
        const itemsToRender = getItemsToRender(() => (
            <DefaultRow
                item={item}
                headers={headers}
                content={content}
                detailsOpen={detailsOpen}
                index={index}
                toggleDetails={toggleDetails}
                maxColumns={maxColumns}
                contentStyle={contentStyle}
            />
        ), detailsOpen, item, headers, {...contentStyle.details});

        return itemsToRender.map((Component, index) => <Component key={`itemRow_${index}`} />);
    }, [detailsOpen, headers, item, index, content, maxColumns]);

    return contentRender;
}

const defaultContentStyle = {
    tbody: null,
    tr: null,
    td: null,
    details: {
        tr: null,
        td: null,
    }
}

export default function Content({ headers, content, maxColumns = 1, contentStyle = null }) {

    const contentRender = useMemo(() => {
        const selectedContentStyle = !!contentStyle ? { ...contentStyle } : { ...defaultContentStyle };

        if (!!headers && headers.length > 0 && !!content && content.length > 0) {
            return (
                <tbody className='gd-datatable-table-content' style={{ ...selectedContentStyle.tbody }}>
                    {content.map((item, index) => (
                        <ContentRow
                            key={"row_" + index}
                            index={index}
                            item={item}
                            headers={headers}
                            content={content}
                            maxColumns={maxColumns}
                            contentStyle={{ ...selectedContentStyle }}
                        />
                    ))}

                </tbody>
            )
        }
        else return null;
    }, [headers, content, maxColumns]);

    return contentRender;
}

Content.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            title: PropTypes.string,
            mustBeVisible: PropTypes.bool
        })
    ),
    content: PropTypes.arrayOf(
        PropTypes.shape({
            headerKey: PropTypes.shape({
                value: PropTypes.any.isRequired,
                title: PropTypes.string,
                parser: PropTypes.func
            })
        })
    ),
}
