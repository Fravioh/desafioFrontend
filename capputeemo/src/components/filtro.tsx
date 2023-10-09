"use client"

import { styled } from "styled-components";
import { FilterByType } from "./filtro-tipo";
import { FilterByPriority } from "./filtro-prioridade";

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

export function FilterBar(props : FilterBarProps){
    return(
        <FilterContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterContainer>
    )
}