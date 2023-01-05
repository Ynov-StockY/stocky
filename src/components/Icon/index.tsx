import React from 'react';
import style from './style.module.css';

type iconProps = {
    src: string;
    alt: string;
    size: string;
    };

export default function Icon({src, alt, size}: iconProps) {

    return (
      <img className={'${style.icon}'} src={src} alt={alt}/>  
              );
  }