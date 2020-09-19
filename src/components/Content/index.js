import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import HeaderCells from './HeaderCells'
import styles from './styles.css'

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

const DetailsRow = (data, headers) => {
    const contentRender = useMemo(() => {
        const textNodes = renderDataAsTextNodes(data, headers);
        return (
            <tr className={styles.gdDetailsRow}>
                <td colSpan={headers.length + 1}>
                    {textNodes.map((Component, index) => <Component key={`details_${index}`} />)}
                </td>
            </tr >
        );
    }, [data, headers]);

    return contentRender;
}
const DefaultRow = ({ detailsOpen, index, item, headers, content, toggleDetails }) => {
    const contentRender = useMemo(() => {
        return (
            <tr className='gd-datatable-table-content-row'>
                <td className='gd-datatable-table-content-cell' onClick={toggleDetails}>
                    <span>{!detailsOpen ? 'hidden' : 'visible'}</span>
                </td>
                <HeaderCells index={index} item={item} headers={headers} content={content} />
            </tr>
        );
    }, [detailsOpen, index, item, headers, content]);

    return contentRender;
};


const getItemsToRender = (defaultComponent, detailsOpen = false, data = null, headers = null) => {
    let items = [
        defaultComponent
    ];
    if (!!detailsOpen) {
        items.push(() => DetailsRow(data, headers));
    }
    return items;
}


const ContentRow = ({ index, item, headers, content }) => {
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
            />
        ), detailsOpen, item, headers);

        return itemsToRender.map((Component, index) => <Component key={`itemRow_${index}`} />);
    }, [detailsOpen, headers, item, index, content]);

    return contentRender;
}

export default function Content({ headers, content }) {

    const contentRender = useMemo(() => {

        if (!!headers && headers.length > 0 && !!content && content.length > 0) {
            return (
                <tbody className='gd-datatable-table-content'>
                    {content.map((item, index) => (
                        <ContentRow
                            key={"row_" + index}
                            index={index}
                            item={item}
                            headers={headers}
                            content={content}
                        />
                    ))}

                </tbody>
            )
        }
        else return null;
    }, [headers, content]);

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
