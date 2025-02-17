import React from "react";
import styled from 'styled-components';

const StyledButtonX = styled.button`
      display: block;
      padding: 6px 4px;	  
      color: #fff;	  
      font-size: 11px;	  
      border-radius: 3px;	  
      background-color: crimson;	  
      border: 0;
    `;
function StyledButton(props : any) {
    return (
        <div>
            <StyledButtonX name={props.name} onClick={props.onClick}>
                About
            </StyledButtonX>
        </div>
    )
}

export default StyledButton




