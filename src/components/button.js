import React from "react"
import {Link} from "gatsby"
import buttonStyles from "./button.module.css"


export default props => (
    <Link activeClassName={buttonStyles.navLink_active} id={props.id} onMouseEnter={shuffle.bind(this, props.id)} onMouseLeave={makeNormal.bind(this, props.id)} className={buttonStyles.navLink} to={props.to} state={{isOpen : false}}>{props.children}</Link>
)

function shuffle(id){
    let originalText = document.getElementById(id).textContent;
    if( !(document.getElementById(id).hasAttribute('aria-current') && document.getElementById(id).getAttribute('aria-current') === 'page')){
        let modifiedText = originalText.split('');
        modifiedText.sort(function() { return 0.5 - Math.random() });
    
        let newText = modifiedText.toString( modifiedText );
        for (let i = 0; i < modifiedText.length-1; i++)
        {
          newText = newText.replace(",", "");
        }
    
        document.getElementById(id).textContent = newText;
    }
}

function makeNormal(id){
    document.getElementById(id).textContent = id.toUpperCase();
}