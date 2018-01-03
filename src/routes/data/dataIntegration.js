import React from 'react';
import mainStyles from '../../assets/css/main.css'
import styles from './dataTemplete.css'
import { Icon, Table, Pagination } from 'antd';
import PropTypes from 'prop-types'
import { connect } from 'dva'


const DataIntegration = ({ dataIntegration }) => {
    let { columns, data } = dataIntegration;
    const onChange = () => { };
    return (
        <div>
            <p className={styles.data_integration_title}>数据集成方案管理</p>
            <div className={styles.data_integration_content_wrap}>
                <div className={styles.data_integration_content_add_btn}><Icon type="plus" className={styles.data_integration_content_add_icon} /></div>
                <Table className={styles.data_integration_table} columns={columns} dataSource={data} pagination={false} />
                <Pagination className={mainStyles.dataVis_pagination} showQuickJumper defaultCurrent={1} total={3} onChange={onChange} />
            </div>
        </div>
    );
};

DataIntegration.propTypes = {
};

export default connect(({ dataIntegration }) => ({ dataIntegration }))(DataIntegration);
