import React from "react";
import PropTypes from "prop-types";
import "./CryptoPrice.css";

class CryptoPrice extends React.Component {
  render() {
    return (
      <div className="CryptoPrice">
        <div className="CryptoPriceItem">
          <div className="price">
            1 Bitcoin = $ {this.props.value.bitcoin.price} AUD
          </div>
          <div className="otherInfo">
            <div className="infoLabels">
              <div className="last-updated">Last Updated:</div>
              <div className="changeIn24Hours">Change in 24 Hours:</div>
            </div>
            <div className="values">
              <div className="last-updated">{this.props.value.bitcoin.lastUpdated}</div>
              <div className="changeIn24Hours">$ {this.props.value.bitcoin.changeIn24Hours} AUD</div>
            </div>
          </div>
        </div>

        <div className="CryptoPriceItem">
          <div className="price">
            1 Ethereum = $ {this.props.value.ethereum.price} AUD
          </div>
          <div className="otherInfo">
            <div className="infoLabels">
              <div className="last-updated">Last Updated:</div>
              <div className="changeIn24Hours">Change in 24 Hours:</div>
            </div>
            <div className="values">
              <div className="last-updated">{this.props.value.ethereum.lastUpdated}</div>
              <div className="changeIn24Hours">$ {this.props.value.ethereum.changeIn24Hours} AUD</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CryptoPrice;

CryptoPrice.propTypes = {
  value: PropTypes.shape({
    bitcoin: PropTypes.shape({
      price: PropTypes.number,
      lastUpdated: PropTypes.string,
      changeIn24Hours: PropTypes.number
    }),
    ethereum: PropTypes.shape({
      price: PropTypes.number,
      lastUpdated: PropTypes.string,
      changeIn24Hours: PropTypes.number
    })
  })
};
