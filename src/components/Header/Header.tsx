import React from 'react'
import { Container } from '../../shared/global'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AppLogo = styled.h1`
    color: #fff;
    text-decoration: none;
    font-size: 30px;
`


const HeaderWrapper = styled.header`
    background-color: #364051;
`


const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Link to='/'>
                    <AppLogo style={{ margin: '0px', paddingTop: '25px', paddingBottom: '25px' }}>
                        Budget App
                    </AppLogo>
                </Link>
            </Container>
        </HeaderWrapper>
    )
}

export default Header