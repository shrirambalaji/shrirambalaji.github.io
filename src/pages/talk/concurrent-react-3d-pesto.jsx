import * as React from "react";
import "../../lib/keynote/assets/player/pdfjs/bcmaps.js";
import "../../lib/keynote/assets/player/pdfjs/web/compatibility";
import "../../lib/keynote/assets/player/pdfjs/pdf";
import "../../lib/keynote/assets/player/main";

import Head from "next/head";

const PestoTalk = () => {
  <>
      <Head children={undefined}>
        <title>Keynote</title>
        <meta name="viewport" content="initial-scale = 1.0, minimum-scale = 1.0, maximum-scale = 1.0, user-scalable = no, width = device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" type="text/css" href="../../lib/keynote/assets/player/styles.css" />
    </Head>
    <div id="stageArea">
      <div id="stage" class="stage"></div>
      <div id="hyperlinkPlane" class="stage"></div>
    </div>
    <div id="slideshowNavigator"></div>
    <div id="slideNumberControl"></div>
    <div id="slideNumberDisplay"></div>
    <div id="helpPlacard"></div>
    <div id="waitingIndicator">
      <div id="waitingSpinner"></div>
    </div>
  </>;
};

export default PestoTalk;
