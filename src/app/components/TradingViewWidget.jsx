// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "COINBASE:BTCUSD|ALL"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": true,
          "hideSymbolLogo": true,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "no-values",
          "chartType": "line",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "fontColor": "rgba(19, 23, 34, 1)",
          "lineWidth": 1,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
          ],
          "color": "rgba(49, 121, 245, 1)"
        }`;
      container.current.appendChild(script);

      console.log("trade"); // Moved inside useEffect

    return () => {
      container.current.removeChild(script);
    };

    },
    []
  );

  console.log("trade")

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
