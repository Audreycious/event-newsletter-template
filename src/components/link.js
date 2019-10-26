import React from 'react'
import { Link } from 'react-router-dom'


export const LinkComp = ({linkStyle, linkPath, children, ...props}) => <Link to={linkPath} style={linkStyle} {...props}>{children}</Link>