import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) /2);

    @media screen and (max-width: 768px) {
        grid-grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1 {
        margin-bottom: 0.5rem;
        font-size: 4rem;
    }

    p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;

const Button = styled.div`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    background: transparent;
`;

const ColumnRight = styled.div``;

const Hero = () => {
  return (
    <Section>
        <Container>
            <ColumnLeft>
                <h1>Welcome to space</h1>
                <h1>Journey to the unknown</h1>
                <Button>Get Started</Button>
            </ColumnLeft>
            <ColumnRight>filler</ColumnRight>
        </Container>
    </Section>
  )
}

export default Hero