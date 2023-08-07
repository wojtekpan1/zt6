import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Desktop4 from "./components/Desktop4";
import Frame1 from "./components/Frame1";
import Desktop1 from "./components/Desktop1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/desktop-4">
          <Desktop4 {...desktop4Data} />
        </Route>
        <Route path="/frame-1">
          <Frame1 title="TEST1" />
        </Route>
        <Route path="/:path(|desktop-1)">
          <Desktop1 {...desktop1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const aCTLogoWhiteTransparentData = {
    src: "/img/act-logo-white-transparent@2x.png",
};

const headingData = {
    children: "CATALYST - TRIAGE",
};

const bannerVariant3Data = {
    actLogoWhiteSvg: "",
    headingProps: headingData,
};

const frame3211Data = {
    image: "/img/image@2x.png",
    className: "",
};

const navBar1Data = {
    frame321Props: frame3211Data,
};

const button1Data = {
    children: "Copy",
};

const button2Data = {
    children: "Print",
};

const button22Data = {
    src: "/img/button-icon.svg",
    className: "",
};

const searchField1Data = {
    label: "Search by Keyword:",
    placeholder: "AD-98932-08298",
    button2Props: button22Data,
};

const button3Data = {
    children: "Look for appointment",
    className: "button-2",
};

const button32Data = {
    children: "<",
};

const button33Data = {
    children: ">",
    className: "button-8",
};

const button34Data = {
    children: "@",
    className: "button-9",
};

const radio21Data = {
    className: "",
};

const radio1Data = {
    labelpositionStart: "Right",
    radio2Props: radio21Data,
};

const radio22Data = {
    className: "radio-3",
};

const radio31Data = {
    labelpositionStart: "Yes",
    radio2Props: radio22Data,
};

const radio51Data = {
    className: "",
};

const radio41Data = {
    labelpositionStart: "No",
    radio5Props: radio51Data,
};

const radio52Data = {
    className: "radio-9",
};

const radio61Data = {
    labelpositionStart: "Left",
    radio5Props: radio52Data,
};

const radio53Data = {
    className: "radio-9",
};

const radio62Data = {
    labelpositionStart: "Both",
    className: "radio-14",
    radio5Props: radio53Data,
};

const desktop4Data = {
    symptomCapture: "SYMPTOM CAPTURE",
    spanText1: "A  o o ",
    spanText2: "A",
    spanText3: " o o  ",
    spanText4: "A",
    chooseCondition: "Choose Condition:",
    x2AnswerQuestions: "2. Answer Questions:",
    x3SeeAutoSummary: "3. See Auto-Summary:",
    address: <React.Fragment>38 year old male, experiencing right knee pain This is a test of text wrapping. This is a test of text wrapping. This is a test of text wrapping. This is a test of text wrapping. This is a test of text wrapping. This is a test of text wrapping. This is a test of text wrapping. This is a test of text wrapping. This is a test of text wrapping. This is a test of text wrapping. This is a test of text wrapping. <br />Test of Bullets<br />Test of Bullets</React.Fragment>,
    consider: "Consider:",
    spanText5: <React.Fragment>Onset, Duration, and Frequency of pain<br /></React.Fragment>,
    spanText6: "3. Which side of your body is effected?",
    spanText7: "Consider scheduling appointment with an ",
    spanText8: "orthopedic physician",
    spanText9: ". Our local partner can recommend one.",
    doYouWantToShare: "Do you want to share this information when booking the appointment?",
    shoulderPain34038: <React.Fragment>Shoulder Pain (340380)<br />Hip Pain (340340)<br />Knee Pain (340390)</React.Fragment>,
    lookBySymptomCate: <React.Fragment>Look by Symptom Category:<br />  Skeletal:<br /><br /><br /><br /><br />  Digestive</React.Fragment>,
    spanText10: "Please note: ",
    spanText11: "Catalyst Triage is not designed and should not be used as a diagnostics tool. It is purely an aid in describing symptoms and considering options for getting care. We have partnered with local companies that can help to find you local clinical professionals, but they are in no way affilieted with ACT and we DO NOT endorse or guarantee their quality.",
    aCTLogoWhiteTransparentProps: aCTLogoWhiteTransparentData,
    bannerVariant3Props: bannerVariant3Data,
    navBarProps: navBar1Data,
    button1Props: button1Data,
    button2Props: button2Data,
    searchFieldProps: searchField1Data,
    button3Props: button3Data,
    button31Props: button32Data,
    button32Props: button33Data,
    button33Props: button34Data,
    radioProps: radio1Data,
    radio3Props: radio31Data,
    radio4Props: radio41Data,
    radio61Props: radio61Data,
    radio62Props: radio62Data,
};

const aCTLogoWhiteTransparent3Data = {
    src: "/img/act-logo-white-transparent-1@2x.png",
};

const frame3212Data = {
    image: "/img/image@2x.png",
    className: "frame-321-1",
};

const navBar2Data = {
    className: "nav-bar-1",
    frame321Props: frame3212Data,
};

const button4Data = {
    children: "Copy",
    className: "button-1",
};

const button5Data = {
    children: "Print",
    className: "button-1",
};

const button23Data = {
    src: "/img/button-icon.svg",
    className: "button-6",
};

const searchField2Data = {
    label: "Search by Keyword:",
    placeholder: "AD-98932-08298",
    className: "search-field-1",
    button2Props: button23Data,
};

const button6Data = {
    children: "Look for appointment",
    className: "button-3",
};

const button35Data = {
    children: "<",
};

const button36Data = {
    children: ">",
    className: "button-11",
};

const button37Data = {
    children: "@",
    className: "button-12",
};

const radio23Data = {
    className: "radio-4",
};

const radio7Data = {
    labelpositionStart: "Right",
    className: "radio-1",
    radio2Props: radio23Data,
};

const radio24Data = {
    className: "radio-5",
};

const radio32Data = {
    labelpositionStart: "Yes",
    className: "radio-7",
    radio2Props: radio24Data,
};

const radio54Data = {
    className: "radio-12",
};

const radio42Data = {
    labelpositionStart: "No",
    className: "radio-7",
    radio5Props: radio54Data,
};

const radio55Data = {
    className: "radio-10",
};

const radio63Data = {
    labelpositionStart: "Left",
    className: "radio-1",
    radio5Props: radio55Data,
};

const radio56Data = {
    className: "radio-10",
};

const radio64Data = {
    labelpositionStart: "Both",
    className: "radio-16",
    radio5Props: radio56Data,
};

const desktop1Data = {
    actLogoWhiteSvg: "/img/clip-path-group@2x.png",
    title: "CATALYST TRIAGE",
    symptomCapture: "SYMPTOM CAPTURE",
    spanText1: "A  o o ",
    spanText2: "A",
    spanText3: " o o  ",
    spanText4: "A",
    chooseCondition: "Choose Condition:",
    x2AnswerQuestions: "2. Answer Questions:",
    x3SeeAutoSummary: "3. See Auto-Summary:",
    address: "38 year old male, experiencing right knee pain",
    consider: "Consider:",
    spanText5: <React.Fragment>Onset, Duration, and Frequency of pain<br /></React.Fragment>,
    spanText6: "3. Which side of your body is effected?",
    spanText7: "Consider scheduling appointment with an ",
    spanText8: "orthopedic physician",
    spanText9: ". Our local partner can recommend one.",
    doYouWantToShare: "Do you want to share this information when booking the appointment?",
    shoulderPain34038: <React.Fragment>Shoulder Pain (340380)<br />Hip Pain (340340)<br />Knee Pain (340390)</React.Fragment>,
    lookBySymptomCate: <React.Fragment>Look by Symptom Category:<br />  Skeletal:<br /><br /><br /><br /><br />  Digestive</React.Fragment>,
    spanText10: "Please note: ",
    spanText11: "Catalyst Triage is not designed and should not be used as a diagnostics tool. It is purely an aid in describing symptoms and considering options for getting care. We have partnered with local companies that can help to find you local clinical professionals, but they are in no way affilieted with ACT and we DO NOT endorse or guarantee their quality.",
    aCTLogoWhiteTransparentProps: aCTLogoWhiteTransparent3Data,
    navBarProps: navBar2Data,
    button1Props: button4Data,
    button2Props: button5Data,
    searchFieldProps: searchField2Data,
    button3Props: button6Data,
    button31Props: button35Data,
    button32Props: button36Data,
    button33Props: button37Data,
    radioProps: radio7Data,
    radio3Props: radio32Data,
    radio4Props: radio42Data,
    radio61Props: radio63Data,
    radio62Props: radio64Data,
};

