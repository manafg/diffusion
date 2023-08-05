import React  from "react";
import {StyledWrraper, StyledInfo ,StyledBody, StyledTitleContainer , StyledTitle} from './styles'
import {DifficultyProps} from './DifficultyProps';
import {renderColor , renderText } from '../../utils/RecipeLevel';

function Difficulty({selectedRecipe}: DifficultyProps) {
    return (
        <StyledWrraper>
            <StyledInfo sx={{ backgroundColor: renderColor(selectedRecipe.difficulty)}}>
                <StyledTitleContainer >
                    <img width='32px' height='32px' src='../../../../dish.png'/>
                    <StyledTitle variant="h6">Difficulty: {renderText(selectedRecipe.difficulty)}</StyledTitle>
                </StyledTitleContainer>
                <StyledBody>
                    {selectedRecipe.description}
                </StyledBody>
            </StyledInfo>
        </StyledWrraper>
    )
}

export default Difficulty;