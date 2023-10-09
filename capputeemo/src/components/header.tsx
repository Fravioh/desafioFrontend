"use client"


import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./pesquisa"
import { CartControl } from "./ControleCarrinho"
import { useFilter } from "@/hooks/useFilter"





const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface HeaderProps {

}


const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 20px 160px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-decoration: none;

    >img {

    }

    @media(min-width: ${props => props.theme.tableBreakpoint}){
        font-size: 24px;
    }

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 40px;
    }
`

export function Header(props : HeaderProps){
    const {setSearch, search} = useFilter();

    return(
        <TagHeader>
            <Logo className={sairaStencil.className} href="/">
                <img src="Teemo_Handler.jpg" /> CappuTEEMO
            </Logo>
            <div>
                <PrimaryInputWSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder="O que você está procurando?"
                />
                <CartControl/>
            </div>
        </TagHeader>
    )
}