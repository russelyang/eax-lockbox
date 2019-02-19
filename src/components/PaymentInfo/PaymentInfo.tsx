import * as React from 'react'
import {Form, Field} from 'react-final-form'
import styles from './PaymentInfo.scss'

export const PaymentInfo = ({onSubmit} : any) => (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label>Credit card number</label>
            <div className={styles.otkInput}>
              <Field
                name="cardNumber"
                component="input"
                type="text"
              />
            </div>
          </div>

          <div className={styles.row}>
            <label>CCV</label>
            <div className={styles.otkInput}>
              <Field
                name="ccv"
                component="input"
                type="text"
              />
            </div>
          </div>

          <div className={styles.row}>
            <label>Name</label>
            <div className={styles.otkInput}>
              <Field
                name="name"
                component="input"
                type="text"
              />
            </div>
          </div>

          <div className={styles.row}>
            <label>Billing Address</label>
            <div className={styles.otkInput}>
              <Field
                name="billingAddress"
                component="input"
                type="text"
              />
            </div>
          </div>
          <div className="buttons {styles.row}">
            <button type="submit" disabled={submitting || pristine}>
              Next
            </button>
          </div>
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    />
)

