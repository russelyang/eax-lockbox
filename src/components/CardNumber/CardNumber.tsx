
import * as React from 'react'
import { ClassNames } from '@emotion/core';

const oktTilte4 = `
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  font-weight: 300;
  text-align: left;
`;

const otkInputLabel = `
  display: block;
  margin-bottom: 5px;
`;

const otkInput = `
  background: #ffebe4;
  input {
    height: 45px;
    padding: 0 10px;
    width: 100%;
    margin: 0;
    border-radius: 4px;
    border: 1px solid #f56c2d;
    -webkit-appearance: none;
  }
  input:focused {
    border: 1px solid #f56c2d;
    background: #fff;
    z-index: 1;
    -webkit-box-shadow: 0 0 1px 0 #f56c2d;
    box-shadow: 0 0 1px 0 #f56c2d;
  }
`;

/**
 * Checkout component from poc
 */
class CardNumber extends React.PureComponent {
  public render() {
    return (
      <ClassNames>
      {({cx, css}) => {
        return (<div
          className={cx(
            css`
              display: flex;
              position: 'relative';
              margin-top: 30;
              padding: 30;
              width: 100%;
              margin-left: auto;
              margin-right: auto;
              box-sizing: border-box;
            `
          )}>
          <label>
            <span className={[cx(css(oktTilte4)), cx(css(otkInputLabel))].join(' ')}>
              Credit Card Number
            </span>
            <div className={cx(css(otkInput))}>
              <input type="text" value="" className="credit-card " />
            </div>
          </label>
        </div>
      )}}  
      </ClassNames>
    );
  }
}

export default CardNumber;
