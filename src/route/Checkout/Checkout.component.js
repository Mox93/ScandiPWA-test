import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import SourceContentWrapper from "SourceComponent/ContentWrapper";

import ProgressBar from "component/ProgressBar/ProgressBar.component";

/** @namespace Route/Checkout/Checkout.component */
export class Checkout extends SourceCheckout {
  render() {
    return (
      <main block="Checkout">
        <ProgressBar
          steps={this.stepMap}
          currentStep={this.props.checkoutStep}
        />
        <SourceContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </SourceContentWrapper>
      </main>
    );
  }
}

export default Checkout;
