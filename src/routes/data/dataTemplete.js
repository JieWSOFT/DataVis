import React from 'react';
import mainStyles from '../../assets/css/main.css'
import styles from './dataTemplete.css'
import { Icon, Table, Pagination } from 'antd';
import PropTypes from 'prop-types'
import { connect } from 'dva'


const DataTemplete = ({ dataTemplete }) => {
    let { columns, data } = dataTemplete;
    const onChange = () => { };
    return (
        <div>
            <p className={styles.data_templete_title}>规则模版管理</p>
            <div className={styles.data_templete_content_wrap}>
                <div className={styles.data_templete_content_add_btn}><Icon type="plus" className={styles.data_templete_content_add_icon} /></div>
                <Table className={styles.data_templete_table} columns={columns} dataSource={data} pagination={false} />
                <Pagination className={mainStyles.dataVis_pagination} showQuickJumper defaultCurrent={1} total={3} onChange={onChange} />
            </div>
        </div>
    );
};

DataTemplete.propTypes = {
};

export default connect(({ dataTemplete }) => ({ dataTemplete }))(DataTemplete);
