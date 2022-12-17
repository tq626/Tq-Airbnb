import React, {memo, useState} from 'react'
import classNames from 'classnames'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle(item) {
    
    // 重新创建一个数组, 不要对原来的数组进行处理
    const newSelect = [...selectItems]
    if (newSelect.includes(item)) {  //移除操作
      // 如果之前有在数组中, 先找出对应的索引, 然后在利用索引把该值给删了
      const itemIndex = newSelect.findIndex(iten => iten === item )  
      newSelect.splice(itemIndex, 1)
    } else { // 添加操作
      newSelect.push(item)
    }
   
    setSelectItems(newSelect)

  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div 
            key={item}
            className={classNames("item", {active: selectItems.includes(item)})}
            onClick={e => itemClickHandle(item)}
            >{item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter