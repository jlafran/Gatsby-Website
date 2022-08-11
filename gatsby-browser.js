import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'

import React from 'react'
import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => {
    return(
    <Layout {...props} >
        {element}
    </Layout>)
}