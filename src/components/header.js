import React from 'react';
import { css } from '@emotion/core';
import Navigation from './nav';

const Header = () => {
    return (
        <header
            css={
                css`
                    background-color: rgba(44,62,80);
                    padding: 1rem;
                `
            }
        >
            <div
                css={
                    css`
                        margin: 0 auto;
                        max-width: 1200px;

                        @media (min-width: 768px) {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    `
                }
            >
                <h1
                    css={
                        css`
                            color: #FFF;
                            text-align: center;
                        `
                    }
                >Hotel Gatsby</h1>
                <Navigation/>
            </div>
        </header>
    );
}
 
export default Header;