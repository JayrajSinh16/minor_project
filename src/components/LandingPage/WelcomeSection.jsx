import React from "react";
import styled from "styled-components";
import transactionImage from "../../assets/images/transactions.svg";
import indiaFlag from "../../assets/icons/india-flag.png";
import usFlag from "../../assets/icons/us-flag.png";
import checkIcon from "../../assets/icons/check.svg";
import currency from "../../assets/icons/currency.png";
import abstractImage from "../../assets/abstract-design/abstract-2.png";

const SectionContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 40px;
    border-radius: 20px;
    gap: 60px;
    margin: 40px auto;
    width: 80%;
    color: #b3b3b3;
    position: relative;
`;

const Column = styled.div`
    flex: 1;
    margin-right: 20px;
`;

const Title = styled.h1`
    color: #ffffff;
    font: inherit;
    font-size: 36px;
    margin-bottom: 20px;
`;

const Highlight = styled.span`
    color: #caff33;
`;

const Description = styled.p`
    margin-bottom: 20px;
    font: inherit;
    font-size: 14px;
    font-weight: lighter;
`;

const Button = styled.button`
    background-color: #caff33;
    color: #1a1a1a;
    border: none;
    border-radius: 20px;
    padding: 10px 25px;
    cursor: pointer;
    font: inherit;
    font-size: 16px;
`;

const InfoBox = styled.div`
    display: flex;
    font: inherit;
    font-weight: lighter;
    align-items: center;
    background-color: #262626;
    border-radius: 50px;
    width: 280px;
    padding: 5px 15px;
    margin-bottom: -25px;
`;

const CheckIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

const TransactionContainer = styled.div`
    background-color: #262626;
    border-radius: 20px;
    padding: 20px;
    flex: 1;
    position: relative;
`;

const AbstractImage = styled.div`
    background: url(${abstractImage}) top right no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    height: 250px;
    opacity: 0.5;
    z-index: 0;
`;

const TransactionTitle = styled.h3`
    color: #ffffff;
    font: inherit;
    font-size: 24px;
    font-weight: 450;
    margin-bottom: 15px;
`;

const TransactionImage = styled.img`
    width: 100%;
    height: 280px;
    border-radius: 10px;
    margin-bottom: 20px;
`;

const MoneyExchange = styled.div`
    margin-bottom: 20px;
`;

const CurrencyTable = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    background-color: #1a1a1a;
    margin: 15px;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
`;

const CurrencyCell = styled.div`
    display: flex;
    font-size: 18px;
    flex-direction: column;
    justify-content: left;
    padding: 10px;
`;

const CurrencyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 15px;
    margin-bottom: 5px;
`;

const Flag = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;
`;

const CurrencyText = styled.div`
    font: inherit;
    color: #ffffff;
    font-size: 16px;
`;

const ExchangeButton = styled(Button)`
    width: 400px;
    background-color: #353828;
    color: #D1FF4D;
    margin: 10px auto 0;
    display: block;
`;

const SupportedCurrency = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    width: 350px;
    padding: 10px 15px;
    border-radius: 50px;
    background-color: #353828;
    align-items: center;

    span {
        font-family: inherit;
        font-size: 16px;
        color: #ffffff;
    }
`;

const CurrencyIcon = styled.img`
    width: 200px;
    height: 50px;
    margin-left: 5px;
`;

const WelcomeSection = () => {
    return (
        <SectionContainer>
            <Column>
                <InfoBox>
                    <CheckIcon src={checkIcon} alt="Check"/>
                    <span>No LLC Required, No Credit Check.</span>
                </InfoBox>
                <Title>
                    Welcome to YourBank<br/>
                    Empowering Your <Highlight>Financial Journey</Highlight>
                </Title>
                <Description>
                    At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and
                    businesses to achieve their financial goals. We are committed to delivering personalized and
                    innovative services that prioritize our customers' needs.
                </Description>
                <Button>Explore Services</Button>
            </Column>
            <TransactionContainer>
                <AbstractImage/>
                <TransactionImage src={transactionImage} alt="Transactions"/>
                <MoneyExchange>
                    <TransactionTitle>Money Exchange</TransactionTitle>
                    <CurrencyTable>
                        <CurrencyCell>
                            <CurrencyHeader>
                                <Flag src={indiaFlag} alt="INR"/>
                                <CurrencyText>INR</CurrencyText>
                            </CurrencyHeader>
                            <CurrencyText style={{color: "#b3b3b3"}}>Indian Rupees</CurrencyText>
                        </CurrencyCell>
                        <CurrencyCell>
                            <CurrencyHeader>
                                <Flag src={usFlag} alt="USD"/>
                                <CurrencyText>USD</CurrencyText>
                            </CurrencyHeader>
                            <CurrencyText style={{color: "#b3b3b3"}}>United States Dollar</CurrencyText>
                        </CurrencyCell>
                        <CurrencyCell>5,000</CurrencyCell>
                        <CurrencyCell>12.00</CurrencyCell>
                    </CurrencyTable>
                    <ExchangeButton>Exchange</ExchangeButton>
                </MoneyExchange>
                <SupportedCurrency>
                    <span>Supported Currency: </span>
                    <CurrencyIcon src={currency} alt="Currency icon"/>
                </SupportedCurrency>
            </TransactionContainer>
        </SectionContainer>
    );
};

export default WelcomeSection;