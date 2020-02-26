import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import Header from './header';
import Footer from './footer';
import useSeo from '../hooks/useSeo';

const Layout = (props) => {
    const seo = useSeo();
    const { siteName, fallbackSeo: { description, title }} = seo;

    return ( 
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 16px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sanas', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Roboto', sans-serif;
                    }
                    h3 {
                        font-family: 'PT Sanas', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>{siteName}</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet"/>
                <meta name="description" content={description}/>
            </Helmet>
            <Header/>
                {props.children} 
            <Footer
                title={title}
            />
        </>
    );
}
 
export default Layout;