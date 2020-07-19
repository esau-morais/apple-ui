import styled from "styled-components";

export const Hero = styled.section`
  padding-top: 4.4rem;
  background: url("/images/hero/john_lewis_large.jpg") no-repeat center;

  min-height: 822px;
  background-position: center bottom;
  background-size: 3008px 822px;

  @media screen and (max-width: 1068px) {
    background: url("/images/hero/john_lewis_medium.jpg") no-repeat;
    min-height: 633px;
    background-position: 42% bottom;
    background-size: 1068px 633px;
  }

  @media screen and (max-width: 767px) {
    background: url("/images/hero/john_lewis_small.jpg") no-repeat;
    background-position: center bottom;
    background-size: 736px 808px;
    min-height: 840px;
  }
`;

export const TitleContainer = styled.blockquote`
  color: #1d1d1f;
  text-align: left;
  padding-top: 141px;
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  margin: 0 auto;
  max-width: 980px;

  @media screen and (max-width: 1068px) {
    max-width: 716px;
    padding-top: 106px;
    margin-left: auto;
    margin-right: auto;
    width: 692px;
  }

  @media screen and (max-width: 767px) {
    max-width: initial;
    padding-top: 64px;
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

export const Heading = styled.h2`
  font-size: 56px;
  line-height: 1.07143;
  font-weight: 600;
  letter-spacing: -0.005em;

  @media screen and (max-width: 1068px) {
    font-size: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 32px;
    margin-left: 2px;
    max-width: 289px;
  }
`;

export const SubHeading = styled.h3`
  color: #000c;
  font-size: 21px;
  line-height: 1.381;
  font-weight: 400;
  letter-spacing: 0.011em;
  margin-top: 0.6rem;

  @media screen and (max-width: 1068px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 11px;
    max-width: 215px;
    margin-left: 3px;
  }
`;
