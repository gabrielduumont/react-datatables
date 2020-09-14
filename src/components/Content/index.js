import React from 'react'
import PropTypes from 'prop-types'
import HeaderCells from './HeaderCells'
import styles from './styles.css'

export default function Content({ headers, content }) {

    if (!!headers && headers.length > 0 && !!content && content.length > 0) {
        return (
            <tbody className='gd-datatable-table-content'>
                {content.map((item, index) =>
                    <tr key={"row_"+index} className='gd-datatable-table-content-row'>
                        <td className='gd-datatable-table-content-cell'>

                        </td>
                        <HeaderCells index={index} item={item} headers={headers} content={content} />

                    </tr>
                )}

            </tbody>
        )
    }
    else return null;
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
