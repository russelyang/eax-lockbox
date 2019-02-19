
import * as React from 'react'
import { css, cx } from 'emotion';


const oktTilte4 = cx(css`
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  font-weight: 300;
  text-align: left;
`);

const otkInputLabel = cx(css`
  display: block;
  margin-bottom: 5px;
`);

const otkInput = cx(css`
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
`);

/**
 * Checkout component from poc
 */
class CardNumber extends React.PureComponent {
  public render() {
    return (
      <>
        <div
          className={cx(
            css`
              display: flex;
              position: 'relative';
              margin-top: 30;
              padding: 30;
              width: 400px;
              height: 600px;
              margin-left: auto;
              margin-right: auto;
              box-sizing: border-box;
            `
          )}>
          <label>
            <span className={[oktTilte4, otkInputLabel].join(' ')}>
              Credit Card Number
            </span>
            <div className={otkInput}>
              <input type="text" value="" className="credit-card " />
            </div>
          </label>
        </div>
      </>
    );
  }
}

export default CardNumber;
