import React from "react";
import ACTLogoWhiteTransparent from "../ACTLogoWhiteTransparent";
import BannerVariant3 from "../BannerVariant3";
import NavBar from "../NavBar";
import Button from "../Button";
import SearchField from "../SearchField";
import Button3 from "../Button3";
import Radio from "../Radio";
import Radio3 from "../Radio3";
import Radio4 from "../Radio4";
import Radio6 from "../Radio6";
import "./Desktop4.css";

function Desktop4(props) {
  const {
    symptomCapture,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    chooseCondition,
    x2AnswerQuestions,
    x3SeeAutoSummary,
    address,
    consider,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    doYouWantToShare,
    shoulderPain34038,
    lookBySymptomCate,
    spanText10,
    spanText11,
    aCTLogoWhiteTransparentProps,
    bannerVariant3Props,
    navBarProps,
    button1Props,
    button2Props,
    searchFieldProps,
    button3Props,
    button31Props,
    button32Props,
    button33Props,
    radioProps,
    radio3Props,
    radio4Props,
    radio61Props,
    radio62Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-4 screen">
        <ACTLogoWhiteTransparent src={aCTLogoWhiteTransparentProps.src} />
        <BannerVariant3
          actLogoWhiteSvg={bannerVariant3Props.actLogoWhiteSvg}
          headingProps={bannerVariant3Props.headingProps}
        />
        <div className="rectangle-13"></div>
        <NavBar frame321Props={navBarProps.frame321Props} />
        <img className="line-1" src="/img/line-1.svg" alt="Line 1" />
        <div className="flex-row">
          <div className="overlap-group1">
            <div className="symptom-capture inter-bold-white-28px">{symptomCapture}</div>
          </div>
          <p className="a-o-o-a-o-o-a inputdefault">
            <span className="inputdefault">{spanText1}</span>
            <span className="labellarge">{spanText2}</span>
            <span className="inputdefault">{spanText3}</span>
            <span className="xl">{spanText4}</span>
          </p>
        </div>
        <div className="flex-row-1 inter-bold-electric-violet-24px">
          <div className="choose-condition">{chooseCondition}</div>
          <div className="x2-answer-questions">{x2AnswerQuestions}</div>
          <div className="x3-see-auto-summary">{x3SeeAutoSummary}</div>
        </div>
        <div className="overlap-group-container">
          <div className="overlap-group2">
            <p className="address labeldefault">{address}</p>
            <div className="button-container">
              <Button>{button1Props.children}</Button>
              <Button>{button2Props.children}</Button>
            </div>
          </div>
          <div className="overlap-group">
            <div className="consider inter-bold-black-24px">{consider}</div>
            <SearchField
              label={searchFieldProps.label}
              placeholder={searchFieldProps.placeholder}
              button2Props={searchFieldProps.button2Props}
            />
            <div className="rectangle-3"></div>
            <div className="rectangle-4"></div>
            <div className="rectangle-10"></div>
            <div className="rectangle-11"></div>
            <Button className={button3Props.className}>{button3Props.children}</Button>
            <Button3>{button31Props.children}</Button3>
            <Button3 className={button32Props.className}>{button32Props.children}</Button3>
            <Button3 className={button33Props.className}>{button33Props.children}</Button3>
            <Radio labelpositionStart={radioProps.labelpositionStart} radio2Props={radioProps.radio2Props} />
            <Radio3 labelpositionStart={radio3Props.labelpositionStart} radio2Props={radio3Props.radio2Props} />
            <Radio4 labelpositionStart={radio4Props.labelpositionStart} radio5Props={radio4Props.radio5Props} />
            <Radio6 labelpositionStart={radio61Props.labelpositionStart} radio5Props={radio61Props.radio5Props} />
            <Radio6
              labelpositionStart={radio62Props.labelpositionStart}
              className={radio62Props.className}
              radio5Props={radio62Props.radio5Props}
            />
            <p className="onset-duration-and headingh6">
              <span className="span-1 headingh6">{spanText5}</span>
              <span className="labeldefault">{spanText6}</span>
            </p>
            <p className="consider-scheduling labeldefault">
              <span className="labeldefault">{spanText7}</span>
              <span className="span-1 headingh6">{spanText8}</span>
              <span className="labeldefault">{spanText9}</span>
            </p>
            <p className="do-you-want-to-share inter-bold-electric-violet-12px">{doYouWantToShare}</p>
            <p className="shoulder-pain-34038 inter-normal-black-18px">{shoulderPain34038}</p>
            <p className="look-by-symptom-cate componentsbuttonlarge">{lookBySymptomCate}</p>
          </div>
        </div>
        <div className="overlap-group3">
          <p className="please-note-catalys componentsbuttonsmall">
            <span className="span-1 componentsbuttonsmall">{spanText10}</span>
            <span className="inputdefault">{spanText11}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Desktop4;
