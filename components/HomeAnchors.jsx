"use client";
import { useEffect } from "react";
export default function HomeAnchors(){
  useEffect(()=>{
    let cancelled=false;
    const align=()=>{const id=decodeURIComponent(location.hash.slice(1));const el=id&&document.getElementById(id);if(el)el.scrollIntoView({block:"start",behavior:"instant"});};
    const ready=async()=>{await document.fonts.ready;if(!cancelled)requestAnimationFrame(()=>requestAnimationFrame(align));};
    ready();window.addEventListener("hashchange",align);
    return()=>{cancelled=true;window.removeEventListener("hashchange",align);};
  },[]);
  return null;
}
