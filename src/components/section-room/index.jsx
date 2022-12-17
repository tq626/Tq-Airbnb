import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { SectionRoomWrapper } from './style'


const SectionRoom = memo((props) => {
  const { listInfo, itemWidth } = props
  return (
    <SectionRoomWrapper>
       <ul className='room-list'>
          {
            listInfo?.map(item => {
              return <RoomItem itemData={ item } key={item.id} itemWidth={itemWidth}/>
            })
          }
       </ul>
    </SectionRoomWrapper>
       
     
  )
})


export default SectionRoom