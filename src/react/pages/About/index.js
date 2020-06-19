import React from 'react';
import { connect } from 'react-redux';
import './index.scss';

class About extends React.Component {
    goVue () {
        window.location.href = '/vue/about';
    }
    changeRedux () {
        this.props.dispatch({
            type: 'aboutModel/save',
            payload: {
                name: '哈哈哈'
            }
        })
    }
    textSaga () {
        this.props.dispatch({
            type: 'aboutModel/textSaga',
            payload: {
                name: '我是saga在作怪'
            }
        })
    }
    render() {
        let { name } = this.props;
        return (
            <div className="about-class">
                <div className="icon"></div>
                <h3>组件About-react</h3>
                <div>redux测试name -- {name}</div>
                <div className="btn" onClick={() => this.changeRedux()}>
                    点击更新redux
                </div>
                <div className="btn" onClick={() => this.textSaga()}>
                    测试saga
                </div>
                <div className="btn" onClick={() => this.goVue()}>
                    点击跳转vue应用
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state.aboutModel
    }
}
export default connect(mapStateToProps)(About);
