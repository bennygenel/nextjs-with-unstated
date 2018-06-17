import React from 'react'
import { Subscribe } from 'unstated'
import { ClockContainer, CounterContainer } from '../containers'
import { Clock, Counter } from '../components'

class Index extends React.Component {
  render() {
    return(
      <Subscribe to={[ClockContainer, CounterContainer]}>
        {(clock, counter) => (
          <div>
            <Clock clock={clock} />
            <Counter counter={counter} />
          </div>
        )}
      </Subscribe>
    )
  }
}

export default Index