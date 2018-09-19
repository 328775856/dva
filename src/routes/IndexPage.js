import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import Test from '../routes/Test';
import List from '../routes/list';
import Cn from '../routes/cn';
import Count from '../routes/count';
import Login from '../components/login';
import {Link} from 'react-router-dom';

function IndexPage() {
  function add() {
    alert('onIncrement')
  }

  return (
    <div className={styles.normal}>
      <List></List>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome}/>
      <ul className={styles.list}>
        <Test value='sdf' onIncrement={add}/>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        <Link to={{pathname: '/count', query: 'a'}}>sdf</Link>
        <br/>
        <Cn></Cn>
        {/*<Count></Count>*/}
        <Link to='/products'>表格</Link>
        <Login></Login>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
