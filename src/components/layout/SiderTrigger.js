import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import styles from './SiderTrigger.css';
import { withRouter } from 'dva/router'


function SiderTrigger({ collapsed }) {
    return (
        <div className={styles.dataVis_sider_trigger}>
            <div className={styles.dataVis_sider_trigger_button}>
                <Icon type={collapsed ? 'verticle-left' : 'verticle-right'} />
            </div>
            <div className={styles.dataVis_sider_trigger_text}>
                收起
            </div>
        </div>
    );
}


export default SiderTrigger