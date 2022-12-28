import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimatedCur = () => {
  return (
    <div>
      <AnimatedCursor 
        innerSize={10}
        outerSize={14}
        color='66, 165, 253'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'texttarea',
          'button',
          '.link',
        ]}
      />
    </div>
  )
}

export default AnimatedCur
