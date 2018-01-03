import React from 'react';
import styles from './dataIntegrationScheme.css'
import { Steps, Button, message, Input, Form, Row, Col } from 'antd';
const Step = Steps.Step;
const FormItem = Form.Item;
const { TextArea } = Input;
import PropTypes from 'prop-types'
import { connect } from 'dva'


const DataIntegrationScheme = ({ dataIntegrationScheme, dispatch }) => {
    const { currentStep } = dataIntegrationScheme;
    const steps = [{
        title: "基本信息"
    }, {
        title: "数据源"
    }, {
        title: "转换规则"
    }, {
        title: "输出目标"
    }, {
        title: "部署拓扑"
    }, {
        title: "总结"
    }];
    const next = () => {
        dispatch({ type: 'dataIntegrationScheme/nextStep' })
    }
    const prev = () => {
        dispatch({ type: 'dataIntegrationScheme/lastStep' })
    }
    return (
        <div className={styles.data_integration_scheme_wrap}>
            <p className={styles.data_integration_scheme_title}>增加数据集成方案</p>
            <Steps current={currentStep} size="small">
                {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div className={styles.data_integration_scheme_content}>
                <Form>
                    <Row>
                        <Col span={11}>
                            <FormItem label={'方案名称'}><Input /></FormItem>
                        </Col>
                        <Col span={11} offset={2} >
                            <FormItem label={'数据类型'}><Input /></FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <FormItem label={'方案描述'}><TextArea rows={8} /></FormItem>
                    </Row>
                </Form>
            </div>
            <div className="steps-action">
                {
                    currentStep < steps.length - 1
                    &&
                    <Button type="primary" onClick={next} style={{ float: 'right',marginLeft: '10px' }}>下一步</Button>
                }
                {
                    currentStep === steps.length - 1
                    &&
                    <Button type="primary" style={{ float: 'right' ,marginLeft: '10px'}} onClick={() => message.success('Processing complete!')}>完成</Button>
                }
                {
                    currentStep > 0
                    &&
                    <Button style={{ marginLeft: 8 }} onClick={prev} style={{ float: 'right' }}>
                        上一步
            </Button>
                }
            </div>
        </div>
    );
};

DataIntegrationScheme.propTypes = {
};

export default connect(({ dataIntegrationScheme }) => ({ dataIntegrationScheme }))(DataIntegrationScheme);
