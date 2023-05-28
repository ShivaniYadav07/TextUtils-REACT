import React from 'react'

export default function About(props) {

    
  

    return (
        <div className='container' style={{color: props.mode === 'dark'? 'white' : '#042743'}} >
            <h1>{props.abttext}</h1>

            <div className="accordion  my-4" id="accordionExample"  >
                <div className="accordion-item" style={{background: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}}>
                            Name
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" >
                            <strong>Shivani Yadav</strong> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{background: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={{background: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}} >
                            Country
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>India</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{background: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{background: props.mode === 'dark'? 'rgb(36 74 104)' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}} >
                            Project
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils-React JS</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}