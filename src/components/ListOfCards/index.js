import React, { useState } from 'react';
import './style.css';

export default function ListOfCards({ children }) {
  return <ul className="ListOfCards">{children}</ul>;
}
