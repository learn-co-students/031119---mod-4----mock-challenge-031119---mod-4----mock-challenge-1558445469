import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const renderSushi = () => {
    console.log('in sushi render');
    let shortSushi = props.allSushi.slice(props.start, props.end)
    return shortSushi.map(sushi => {
      return <Sushi key={sushi.id} sushiData={sushi} handleEat={props.handleEat} eaten={props.eaten}/>
    })
  }
  
  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton handleMore={props.handleMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer