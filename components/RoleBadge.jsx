"use client";
import {useId,useState} from "react";
export default function RoleBadge({rotation,image,alt,title,description,href}) {
  const [open,setOpen]=useState(false);
  const id=useId();
  return <div className="role-badge" style={{"--r":rotation}} data-open={open}
    onMouseEnter={()=>{if(window.matchMedia("(hover:hover)").matches)setOpen(true)}}
    onMouseLeave={e=>{if(!e.currentTarget.contains(document.activeElement))setOpen(false)}}
    onFocus={()=>setOpen(true)}
    onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false)}}
    onKeyDown={e=>{if(e.key==="Escape"){setOpen(false);document.activeElement?.blur()}}}>
    <button className="badge-front" type="button" aria-expanded={open} aria-controls={id} aria-label={`${alt}. Flip for details`} onClick={()=>setOpen(true)}>
      <img src={image} alt={alt} loading="lazy"/><span>Flip / tap for details</span>
    </button>
    <div className="badge-back" id={id}><b>{title}</b><p>{description}</p><a className="btn btn-ghost btn-sm" href={href}>View more details →</a><button type="button" className="badge-reset" onClick={e=>{setOpen(false);e.currentTarget.blur()}}>Show badge ↩</button></div>
  </div>;
}
