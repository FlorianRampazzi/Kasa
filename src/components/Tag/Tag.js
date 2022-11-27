import './Tag.css'

export default function Tag({ key, content}) {
    const tagsList = content
    const tag = tagsList.map((tag) => 
        <span key={tag.toString()} className='kasa-tag'>
           {tag}
        </span>)

    return (
        < >
            {tag}
        </>
    )
}
  