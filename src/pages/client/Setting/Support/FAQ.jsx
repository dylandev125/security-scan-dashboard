import Accordion from './Accordion/Accordion'

const FAQ = () => {
  return (
    <div className='box-info-FAQ'>
      <div className="info-header">
        <span className='big-caption'>FAQ</span>
        <span className='normal-text'>Here you will find the most asked questions with answers about different topics.</span>
        <span className='normal-text'>If you still not find an answer to your question, then hit up us.</span>
      </div>

      <div className="list-bar">
        <span className="big-caption">Latest questions</span>

        <span className="text-wrapperbox">How I can see all websites once in the Dashboard?</span>
        <span className="text-wrapperbox">How many previous scans does it show?</span>
        <span className="text-wrapperbox">How many previous scans does it show?</span>
      </div>

      <div className="list-bar">
        <span className="big-caption">Category</span>

        <div className="accordion" id="accordionExample">
          <Accordion/>
        </div>

      </div>
    </div>
  )
}

export default FAQ