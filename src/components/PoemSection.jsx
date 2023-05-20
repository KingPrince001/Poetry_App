import '../pages/poems.css';

function PoemSection({title,poem,name,img}) {
  return (<>
    <div className="poems_container">
    <h2 className="poem-title">{title}</h2>
    <div className="poem">{poem}</div>
      <div className="author">
        <h4 className='author-tag'> <span className="first-letter">A</span>uthor</h4>
        <div className="author-img">
        <h4 className="name">{name}</h4>
        <img src={img} alt="authors image" className='image' />
        </div>
    
    
      </div>
    </div>
  
  </>
  
  )
}

export default PoemSection
