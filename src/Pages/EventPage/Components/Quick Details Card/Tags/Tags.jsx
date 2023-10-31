import React from 'react'
import './tags.css'

const Tags = ({tags}) => {
    
    const colorTag = (tagId) =>{
        switch (tagId) {
            case 'Free': 
            {
                return 'tag free-tag'
            }
            case 'CSS': 
            {
                return 'tag css-tag'
            }
            case 'JavaScript': 
            {
                return 'tag javaScript-tag'
            }

            default : 
            {
                return 'tag normal-tag'
            }

        }
    }

  return (
    
      <div className="tags">
    {tags.map(((tag,index)=>(
        <div className={colorTag(tag)} key={index}># {tag}</div>
    )))}
  </div>
  )
}

export default Tags