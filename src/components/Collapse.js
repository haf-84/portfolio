import {useState} from 'react';

function Collapse({title, children}){
    const [isCollapsed,setIsCollapsed]=useState(true);

    const toggleCollapse=()=>{
        setIsCollapsed(!isCollapsed);
    }
    
    return(
        <div className={`collapse ${isCollapsed ? 'collapsed' : 'expanded'}`}>
            <div className='collapse-header'onClick={toggleCollapse}>
                <h2>{title}</h2>
                <div className='toggle-icon'>
                    <i className={`fa-solid ${isCollapsed ? 'fa-angle-up': 'fa-angle-down'}`}/>
                </div>
            </div>
            <div className='collapse-content'>{children}</div>

        </div>
    );
}
export default Collapse