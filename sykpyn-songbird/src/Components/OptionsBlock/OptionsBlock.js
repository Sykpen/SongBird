import React, { Component } from "react";
import OptionsBlockItem from "./OptionsblockItem/OptionsBlockItem";
import "./OptionsBlock.css";

class OptionsBlock extends Component {
  render() {
    const {
      birdNames,
      updatePosition,
      rightAnswerId,
      updateScore,
      updateClickCounter,
      clickCounter,
      showGameZone,
      showInfoZone,
      indicateRightAnswer,
      useSound,
      enableSound,
    } = this.props;
    const rows = [];
    const numberOfAnswers = birdNames.length - 1;
    birdNames.forEach((element) => {
      rows.push(
        <OptionsBlockItem
          key={`${element.id}_${element.name}`}
          birdName={element.name}
          updatePosition={updatePosition}
          position={element.id - 1}
          birdId={element.id}
          rightAnswerId={rightAnswerId}
          updateScore={updateScore}
          numberOfAnswers={numberOfAnswers}
          clickCounter={clickCounter}
          showGameZone={showGameZone}
          showInfoZone={showInfoZone}
          indicateRightAnswer={indicateRightAnswer}
          useSound={useSound}
          enableSound={enableSound}
          updateClickCounter={updateClickCounter}
        />
      );
    });

    return <div className="options_block_main">{rows}</div>;
  }
}

export default OptionsBlock;
