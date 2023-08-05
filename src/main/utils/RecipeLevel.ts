import React from 'react';

const renderText = (difficulty:number) : string=> {
    switch (difficulty) {
      case 1:
        return 'Easy';
      case 2:
        return 'Medium';
      case 3:
        return 'Hard';
      default:
        return 'Easy';
    }
  };

  const renderColor = (difficulty:number) : string => {
    switch (difficulty) {
      case 1:
        return '#17CFC4';
      case 2:
        return '#FAA019';
      case 3:
        return '#41479B';
      default:
        return '#17CFC4';
    }
  };

  export {renderColor , renderText}