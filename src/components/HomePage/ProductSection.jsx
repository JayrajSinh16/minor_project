import React from "react";
import styled from "styled-components";
import checkingIcon from "../../assets/icons/checking.png";
import savingsIcon from "../../assets/icons/saving.png";
import loansIcon from "../../assets/icons/loans.png";

const SectionContainer = styled.section`
    padding: 40px;
    border-radius: 20px;
    margin: 40px auto;
    width: 80%;
    color: #b3b3b3;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -20px;
`;

const Title = styled.h2`
    color: #ffffff;
    font: inherit;
    font-size: 32px;
`;

const Highlight = styled.span`
    color: #caff33;
    font: inherit;
`;

const Description = styled.p`
    margin-bottom: 20px;
    font: inherit;
    font-size: 14px;
    font-weight: lighter;
`;

const ButtonContainer = styled.div`
    display: flex;
    background-color: #1c1c1c;
    border:1px solid #262626;
    border-radius: 50px;
    padding: 10px 15px;
    gap: 10px;
`;

const ToggleButton = styled.button`
    background-color: ${({active}) => (active ? "#caff33" : "#1c1c1c")};
    color: ${({active}) => (active ? "#1a1a1a" : "#ffffff")};
    border: 1px solid transparent;
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    
`;

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

const ProductBox = styled.div`
    background-color: #262626;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
`;

const Icon = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: -10px;
`;

const ProductTitle = styled.h3`
    color: #ffffff;
    font: inherit;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: -10px;
`;

const ProductDescription = styled.p`
    font: inherit;
    font-size: 16px;
    font-weight: lighter;
    color: #b3b3b3;
`;
const ProductsSection = () => {
    return (
        <SectionContainer>
            <Header>
                <Title>
                    Our <Highlight>Products</Highlight>
                </Title>
                <ButtonContainer>
                    <ToggleButton active>For Individuals</ToggleButton>
                    <ToggleButton>For Businesses</ToggleButton>
                </ButtonContainer>
            </Header>
            <Description>
                Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your
                unique financial needs and aspirations.
            </Description>
            <ProductsGrid>
                <ProductBox>
                    <Icon src={checkingIcon} alt="Checking Accounts"/>
                    <ProductTitle>Checking Accounts</ProductTitle>
                    <ProductDescription>
                        Enjoy easy and convenient access to your funds with our range of checking account options.
                        Benefit from features such as online and mobile banking, debit cards, and free ATM access.
                    </ProductDescription>
                </ProductBox>
                <ProductBox>
                    <Icon src={savingsIcon} alt="Savings Accounts"/>
                    <ProductTitle>Savings Accounts</ProductTitle>
                    <ProductDescription>
                        Build your savings with our competitive interest rates and flexible savings account options.
                        Whether you're saving for a specific goal or want to grow your wealth over time, we have the
                        right account for you.
                    </ProductDescription>
                </ProductBox>
                <ProductBox>
                    <Icon src={loansIcon} alt="Loans and Mortgages"/>
                    <ProductTitle>Loans and Mortgages</ProductTitle>
                    <ProductDescription>
                        Realize your dreams with our flexible loan and mortgage options. From personal loans to home
                        mortgages, our experienced loan officers are here to guide you through the application process
                        and help you secure the funds you need.
                    </ProductDescription>
                </ProductBox>
            </ProductsGrid>
        </SectionContainer>
    );
};

export default ProductsSection;