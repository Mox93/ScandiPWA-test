import { PureComponent } from "react";
import "./ProgressBar.style.scss";

class ProgressBar extends PureComponent {
  getStepIndex() {
    let index = 0;

    for (let key in this.props.steps) {
      if (key === this.props.currentStep) return index;
      index++;
    }

    return index;
  }

  renderMilestone(title, stepNumber, checked = false, active = false) {
    return (
      <div block="MileStone" className={checked | active ? "active" : ""}>
        <div block="Badge">
          {checked ? <div block="CheckMark"></div> : stepNumber}
        </div>
        <div block="Title">{title}</div>
      </div>
    );
  }

  renderPath(active = false) {
    return (
      <div block="Path" className={active ? "active" : ""}>
        <div block="BackGround"></div>
        <div block="Filler"></div>
      </div>
    );
  }

  renderSteps() {
    const steps = Object.keys(this.props.steps).map(
      (key) => this.props.steps[key]
    );
    const result = [this.renderPath(true)];
    let stepIndex = this.getStepIndex();

    steps.slice(0, -1).forEach((step, index) => {
      result.push(
        this.renderMilestone(
          step.title,
          index + 1,
          index < stepIndex,
          index === stepIndex
        )
      );
      result.push(this.renderPath(index < stepIndex));
    });

    return result;
  }

  render() {
    return <div block="ProgressBar">{this.renderSteps()}</div>;
  }
}

export default ProgressBar;
