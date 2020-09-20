import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const HeaderItem = ({ element, setActiveOrderHeader, activeOrderHeader, maxWidthForCells, cellStyle }) => {
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
            <th
                title={element.title}
                onClick={updateClicks}
                className='gd-datatable-header-cell'
                style={{ ...cellStyle, width: maxWidthForCells + '%' }}
            >
                <div>
                    <span>{element.label}</span>
                    {!!isActiveOrderFilter && renderOrderIcon()}
                </div>
            </th>
        )
    }, [element, activeOrderHeader, maxWidthForCells]);
    return content;
}

const defaultHeaderStyle = {
    thead: null,
    tr: null,
    th: null,
};

export default function Header({ activeOrderHeader, setActiveOrderHeader, headers = [], maxColumns = 1, headerStyle = null, isFooter = false }) {
    const content = useMemo(() => {
        if (!!headers && headers.length > 0) {
            const selectedHeaderStyle = !!headerStyle ? { ...headerStyle } : { ...defaultHeaderStyle };
            const maxWidthForCells = 98 / headers.length;
            if (!isFooter) {
                return (
                    <thead className='gd-datatable-table-header' style={{ ...selectedHeaderStyle.thead }}>
                        <tr className='gd-datatable-table-header-row' style={{ ...selectedHeaderStyle.tr }}>
                            <th className='gd-datatable-table-header-cell' style={{ ...selectedHeaderStyle.th }}>

                            </th>
                            {headers.map((element, index) => {
                                if (index < maxColumns) {
                                    return (
                                        <HeaderItem
                                            key={element.key}
                                            element={element}
                                            setActiveOrderHeader={setActiveOrderHeader}
                                            activeOrderHeader={activeOrderHeader}
                                            maxWidthForCells={maxWidthForCells}
                                            cellStyle={{ ...selectedHeaderStyle.th }}
                                        />
                                    );
                                }
                                else return null;
                            })}

                        </tr>
                    </thead>
                )
            }
            else {
                return (
                    <tfoot className='gd-datatable-table-header' style={{ ...selectedHeaderStyle.thead }}>
                        <tr className='gd-datatable-table-header-row' style={{ ...selectedHeaderStyle.tr }}>
                            <th className='gd-datatable-table-header-cell' style={{ ...selectedHeaderStyle.th }}>

                            </th>
                            {headers.map((element, index) => {
                                if (index < maxColumns) {
                                    return (
                                        <HeaderItem
                                            key={element.key}
                                            element={element}
                                            setActiveOrderHeader={setActiveOrderHeader}
                                            activeOrderHeader={activeOrderHeader}
                                            maxWidthForCells={maxWidthForCells}
                                            cellStyle={{ ...selectedHeaderStyle.th }}
                                        />
                                    );
                                }
                                else return null;
                            })}

                        </tr>
                    </tfoot>
                )
            }
        }
        else return null;
    }, [headers, activeOrderHeader, maxColumns]);
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
