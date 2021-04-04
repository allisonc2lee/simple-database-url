import React from "react";
import {
  StyledResultHeading,
  StyledLink,
  StyledResults,
  StyledResult,
} from "./Main.styles";

const Results = ({ results }) => {
  return (
    <StyledResults>
      <StyledResultHeading>Saved Link</StyledResultHeading>

      {results.length > 0 &&
        results.map(({ _id, short, full }) => {
          return (
            <StyledResult key={_id}>
              <p>{short}</p>
              <StyledLink href={full}>Review</StyledLink>
            </StyledResult>
          );
        })}
    </StyledResults>
  );
};

export default Results;
