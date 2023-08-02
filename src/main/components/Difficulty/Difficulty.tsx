import React  from "react";
import {StyledWrraper, StyledInfo ,StyledBody, StyledTitleContainer , StyledTitle} from './styles'

function Difficulty() {
    return (
        <StyledWrraper>
            <StyledInfo>
                <StyledTitleContainer>
                    <img width='32px' height='32px' src='../../../../dish.png'/>
                    <StyledTitle variant="h6">Difficulty: Medium</StyledTitle>
                </StyledTitleContainer>
                <StyledBody>
                    Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.
                </StyledBody>
            </StyledInfo>
        </StyledWrraper>
    )
}

export default Difficulty;