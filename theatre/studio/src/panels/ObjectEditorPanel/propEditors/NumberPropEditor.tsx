import type {PropTypeConfig_Number} from '@theatre/core/propTypes'
import type SheetObject from '@theatre/core/sheetObjects/SheetObject'
import BasicNumberEditor from '@theatre/studio/uiComponents/form/BasicNumberEditor'
import React from 'react'
import {useEditingToolsForPrimitiveProp} from './utils/useEditingToolsForPrimitiveProp'
import {SingleRowPropEditor} from './utils/SingleRowPropEditor'

const NumberPropEditor: React.FC<{
  propConfig: PropTypeConfig_Number
  pointerToProp: SheetObject['propsP']
  obj: SheetObject
}> = ({propConfig, pointerToProp, obj}) => {
  const stuff = useEditingToolsForPrimitiveProp<number>(pointerToProp, obj)

  return (
    <SingleRowPropEditor {...{stuff, propConfig, pointerToProp}}>
      <BasicNumberEditor
        value={stuff.value}
        temporarilySetValue={stuff.temporarilySetValue}
        discardTemporaryValue={stuff.discardTemporaryValue}
        permenantlySetValue={stuff.permenantlySetValue}
      />
    </SingleRowPropEditor>
  )
}

export default NumberPropEditor
