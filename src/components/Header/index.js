import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const HeaderItem = ({ element, setActiveOrderHeader, activeOrderHeader, maxWidthForCells }) => {
    const [orderAscending, setOrderAscending] = useState(null);
    const [clickCount, setClickCount] = useState(0);

    const content = useMemo(() => {
        const isActiveOrderFilter = !!activeOrderHeader && activeOrderHeader.key === element.key;

        const renderOrderIcon = () => {
            return orderAscending === false ? <span>&#8595;</span> : orderAscending === true ? <span>&#8593;</span> : null;
        }

        const updateClicks = () => {
            if (clickCount >= 2) {
                setClickCount(0);
                setOrderAscending(null);
                setActiveOrderHeader(null);
            }
            else {
                if (clickCount === 0) {
                    setClickCount(1);
                    setOrderAscending(true);
                    setActiveOrderHeader({
                        key: element.key,
                        order: 'asc'
                    });
                }
                else {
                    setClickCount(2);
                    setOrderAscending(false);
                    setActiveOrderHeader({
                        key: element.key,
                        order: 'desc'
                    });
                }
            }
        }
        return (
            <th title={element.title} onClick={updateClicks} className='gd-datatable-header-cell' style={{ width: maxWidthForCells + '%' }}>
                <div>
                    <span>{element.label}</span>
                    {!!isActiveOrderFilter && renderOrderIcon()}
                </div>
            </th>
        )
    }, [element, activeOrderHeader, maxWidthForCells]);
    return content;
}

export default function Header({ activeOrderHeader, setActiveOrderHeader, headers = [] }) {
    const content = useMemo(() => {
        if (!!headers && headers.length > 0) {
            const maxWidthForCells = 95 / headers.length;
            return (
                <thead className='gd-datatable-table-header'>
                    <tr className='gd-datatable-table-header-row'>
                        <th className='gd-datatable-table-header-cell'>

                        </th>
                        {headers.map(element => <HeaderItem
                            key={element.key}
                            element={element}
                            setActiveOrderHeader={setActiveOrderHeader}
                            activeOrderHeader={activeOrderHeader}
                            maxWidthForCells={maxWidthForCells}
                        />)}

                    </tr>
                </thead>
            )
        }
        else return null;
    }, [headers, activeOrderHeader]);
    return content;
}


Header.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            title: PropTypes.string,
            mustBeVisible: PropTypes.bool
        })
    ),
    activeOrderHeader: PropTypes.shape({
        key: PropTypes.string.isRequired,
        order: PropTypes.string.isRequired,
    }),
    setActiveOrderHeader: PropTypes.func
}
