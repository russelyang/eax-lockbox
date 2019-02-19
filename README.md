# eax-lockbox

> react components for lockbox team

[![NPM](https://img.shields.io/npm/v/eax-lockbox.svg)](https://www.npmjs.com/package/eax-lockbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save eax-lockbox
```

## Usage

```tsx
import * as React from 'react'

import {PaymentInfo} from 'eax-lockbox'

const onSubmit = (values) => consloe.log(values)

class Example extends React.Component {
  render () {
    return (
      <PaymentInfo onSubmit={onSubmit}/>
    )
  }
}
```

### Run
```bash
cd eax-lockbox
yarn start
```
start example site
```bash
cd eax-lockbox/example
yarn start
```

## License

MIT © [russelyang](https://github.com/russelyang)
